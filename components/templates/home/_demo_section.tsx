import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { Section } from '../../atoms/Section';
import { ModalContext } from '../../page_wrappers/ModalWrapper';

export const DemoSection = () => {
  const { showModal, modalSettings } = useContext(ModalContext);
  return (
    <Section className='js-show-on-scroll' backgroundColor='primary.background'>
      <div className="flex flex-col justify-center items-center" id="pricing">
        <Button variant='contained' className='my-8' onClick={ () => showModal(modalSettings.NO_MUSHROOMS_AVAILABLE) }>
          No Mushrooms Left Modal
        </Button>
        <Button variant='contained' className='my-8' onClick={ () => showModal({ ...modalSettings.WAITING_FOR_MUSHROOMS, body: modalSettings.WAITING_FOR_MUSHROOMS.body + ' THE MUSHROOMS ARE SELLING OUT' }) }>
          Wait For The Mushrooms Modal
        </Button>
      </div>
    </Section>
  );
};
