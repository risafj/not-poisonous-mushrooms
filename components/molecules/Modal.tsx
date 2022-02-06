import { Button, CircularProgress, Dialog } from '@mui/material';
import React, { useContext } from 'react';
import { ModalContents } from '../../utils/modalCodes';
import { TranslationContext } from '../page_wrappers/TranslationsWrapper';

type Props = {
  data: ModalContents & { onConfirmArg: () => void }
};
export const Modal = ({ data }: Props) => {
  const { translation } = useContext(TranslationContext);
  return <div className='absolute h-screen w-screen flex flex-grow items-center justify-center'>
    <Dialog
      id="modal"
      open
      
    >
      <div >
        { data.title }
        <br/>
        { data.body }
        { data.showSpinner && <CircularProgress /> }
        { data.showConfirmButton && (<Button onClick={ () => data.onConfirmArg() }>
          { translation.modalOkButton }
        </Button>) }
      </div>
    </Dialog>
  </div>;
};
