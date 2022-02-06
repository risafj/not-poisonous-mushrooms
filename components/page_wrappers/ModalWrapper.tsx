import React, { useState } from 'react';
import { ModalContents } from '../../utils/modalCodes';
import { Modal } from '../molecules/Modal';
export const ModalContext = React.createContext<{
  showModal: ( modalContent: ModalContents) => void,
  closeModal: () => void
}>({ showModal: () => null, closeModal: () => null });

type Props = {
  children: any
};

export const ModalWrapper = ({ children }: Props) => {
  
  const [modalValue, setModalValue] = useState<ModalContents & { onConfirmArg: () => void }>();
  
  const openModal = (modalContent: ModalContents) => {
    setModalValue({
      ...modalContent, onConfirmArg: () => {
        modalContent.onConfirmArg && modalContent.onConfirmArg();
        closeModal();
      }
    });
  };

  const closeModal = () => {
    setModalValue(undefined);
  };
  return (
    <ModalContext.Provider value={ { showModal: openModal, closeModal } } >
      <>
        { children } 
        { modalValue && <Modal data={ modalValue }/> }
      </>
    </ModalContext.Provider>
  );
};
