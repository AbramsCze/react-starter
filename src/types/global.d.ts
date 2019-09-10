// libs
import { FormStateMap } from 'redux-form'

/** Global action type */
declare type Action = {
  [key: string]: string;
}

/** Redux state */
declare type StoreState = {
  form: FormStateMap;
  cv: CvState;
  notifications: Array<Snackbar>;
}

declare type Token = string | null

declare type JsonConfig = {
  apiUrl: string;
  environment: string;
  timeout: number;
  tokenExpirationTolerance: number;
}
