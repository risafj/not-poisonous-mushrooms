import { RequireAtLeastOne, SupportedLocale } from '../@types';
import { translations } from './translations';

const WAITING_FOR_MUSHROOMS = 'WAITING_FOR_MUSHROOMS';
const NO_MUSHROOMS_AVAILABLE = 'NO_MUSHROOMS_AVAILABLE';

type ModalTypes =
  typeof WAITING_FOR_MUSHROOMS |
  typeof NO_MUSHROOMS_AVAILABLE; 

export type ModalContents = {
  title?: string
  body?: string
  showSpinner?: boolean
  showConfirmButton?: boolean
  onConfirmArg?: () => void
};

// Technically you could just specify "showSpinner: false", but you'd be silly to do so.

export type ModalSettings = Record<ModalTypes, RequireAtLeastOne<ModalContents, 'showSpinner' | 'showConfirmButton'>>;

export const getModalSettings = (locale: SupportedLocale) => {
  const translation = translations[locale];
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
  return modalSettings;
};
