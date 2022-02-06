import { RequireAtLeastOne } from '../@types';

export type ModalContents = {
  title?: string
  body?: string
  showSpinner?: boolean
  showConfirmButton?: boolean
  onConfirm?: () => void
};

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

export const modalSettingDefaultObject = modalTypes.reduce(setDummyDataForInitialContextState, {} as InitializerObject);

export type ModalSettings = Record<ModalType, RequireAtLeastOne<ModalContents, 'showSpinner' | 'showConfirmButton'>>;
