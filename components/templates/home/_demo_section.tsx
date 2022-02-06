import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { ModalContext } from '../../page_wrappers/ModalWrapper';

export const DemoSection = () => {
  const { showModal, modalSettings } = useContext(ModalContext);
  return <div className='flex flex-col'>
    <Button className='my-8' onClick={ () => showModal(modalSettings.NO_MUSHROOMS_AVAILABLE) }>
      NoMoreMushrooms
    </Button>
    <Button className='my-8' onClick={ () => showModal({ ...modalSettings.WAITING_FOR_MUSHROOMS, body: modalSettings.WAITING_FOR_MUSHROOMS.body + ' THE MUSHROOMS ARE SELLING OUT' }) }>
      NoMoreMushrooms
    </Button>
  </div>;
};
