/** Global action type */
declare type Action = {
  [key: string]: string;
}

/** Redux state */
declare type State = {
  cv: CvState;
}

declare type Token = string | null

declare type JsonConfig = {
  apiUrl: string;
  environment: string;
  timeout: number;
  tokenExpirationTolerance: number;
}
