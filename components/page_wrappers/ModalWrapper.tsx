import React, { useContext, useState } from 'react';
import { RequireAtLeastOne } from '../../@types';
import { Modal } from '../molecules/Modal';
import { TranslationContext } from './TranslationsWrapper';

// all context must be type-safe initialized
// this could be put elsewhere if it were large
const dummyData = {
  title: 'UNSET',
  showSpinner: true
};

const WAITING_FOR_MUSHROOMS = 'WAITING_FOR_MUSHROOMS';
const NO_MUSHROOMS_AVAILABLE = 'NO_MUSHROOMS_AVAILABLE';

const modalTypes = [WAITING_FOR_MUSHROOMS, NO_MUSHROOMS_AVAILABLE] as const;

type InitializerObject = { [key in ModalType]: typeof dummyData };

// https://stackoverflow.com/questions/54789406/convert-array-to-object-keys
const modalSettingDefaultObject = modalTypes.reduce((currentObj, currentKey) => (currentObj[currentKey] = dummyData, currentObj), {} as InitializerObject);

type ModalType = typeof modalTypes[number];

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
  onConfirmArg?: () => void
};

export type ModalSettings = Record<ModalType, RequireAtLeastOne<ModalContents, 'showSpinner' | 'showConfirmButton'>>;

export const ModalWrapper = ({ children }: Props) => {

  const [modalValue, setModalValue] = useState<ModalContents & { onConfirmArg: () => void }>();
  const { translation } = useContext(TranslationContext);

  // we pass a "modalSettings" into openModal so that we can configure it when we need it
  const openModal = (modalContent: ModalContents) => {
    setModalValue({
      ...modalContent, onConfirmArg: () => {
        modalContent.onConfirmArg && modalContent.onConfirmArg();
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
