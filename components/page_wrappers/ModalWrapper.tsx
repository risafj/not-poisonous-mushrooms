import React, { useContext, useState } from 'react';
import { RequireAtLeastOne } from '../../@types';
import { Modal } from '../molecules/Modal';
import { TranslationContext } from './TranslationsWrapper';

const dummyData = {
  title: 'UNSET',
  showSpinner: true
};

const WAITING_FOR_MUSHROOMS = 'WAITING_FOR_MUSHROOMS';
const NO_MUSHROOMS_AVAILABLE = 'NO_MUSHROOMS_AVAILABLE';

const modalTypes = [WAITING_FOR_MUSHROOMS, NO_MUSHROOMS_AVAILABLE] as const;

type ModalType = typeof modalTypes[number];
type InitializerObject = { [key in ModalType]: typeof dummyData };

const setDummyDataForInitialContextState = (state: InitializerObject, keyToSet: ModalType): InitializerObject => {
  state[keyToSet] = dummyData;
  return state;
};

const modalSettingDefaultObject = modalTypes.reduce(setDummyDataForInitialContextState, {} as InitializerObject);

export const ModalContext = React.createContext<{
  showModal: ( modalContent: ModalContents) => void,
  closeModal: () => void,
  modalSettings: ModalSettings
}>({ showModal: () => null, closeModal: () => null, modalSettings: modalSettingDefaultObject });

type Props = {
  children: any
};

export type ModalContents = {
  title?: string
  body?: string
  showSpinner?: boolean
  showConfirmButton?: boolean
  onConfirm?: () => void
};

export type ModalSettings = Record<ModalType, RequireAtLeastOne<ModalContents, 'showSpinner' | 'showConfirmButton'>>;

export const ModalWrapper = ({ children }: Props) => {

  const [modalValue, setModalValue] = useState<ModalContents>();
  const { translation } = useContext(TranslationContext);

  // we pass a "modalSettings" into openModal so that we can configure it when we need it
  const openModal = (modalContent: ModalContents) => {
    setModalValue({
      ...modalContent, onConfirm: () => {
        modalContent.onConfirm && modalContent.onConfirm();
        closeModal();
      }
    });
  };

  // Technically you could just specify "showSpinner: false", but you'd be silly to do so.
  const modalSettings: ModalSettings = {
    WAITING_FOR_MUSHROOMS: {
      body: translation.waitingForMushroomsModal.body,
      showSpinner: true
    },
    NO_MUSHROOMS_AVAILABLE: {
      title: translation.noMoreMushroomsModal.title,
      body: translation.noMoreMushroomsModal.body,
      showConfirmButton: true
    }
  };

  const closeModal = () => {
    setModalValue(undefined);
  };
  return (
    <ModalContext.Provider value={ { showModal: openModal, closeModal, modalSettings } } >
      <>
        { children }
        { modalValue && <Modal data={ modalValue }/> }
      </>
    </ModalContext.Provider>
  );
};
