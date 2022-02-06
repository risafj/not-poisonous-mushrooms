import React, { useContext, useState } from 'react';
import { ModalContents, modalSettingDefaultObject, ModalSettings } from '../../utils/modals';
import { Modal } from '../molecules/Modal';
import { TranslationContext } from './TranslationsWrapper';

export const ModalContext = React.createContext<{
  showModal: ( modalContent: ModalContents) => void,
  closeModal: () => void,
  modalSettings: ModalSettings
}>({ showModal: () => null, closeModal: () => null, modalSettings: modalSettingDefaultObject });

type Props = {
  children: any
};

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
