declare type User = {
  id: number;
  name: string;
  surname: string;
  job: string;
}

declare type Snackbar = {
  key?: number;
  message: string;
  options?: Record<string, any>;
}

declare type CloseSnackbar = {
  key?: number;
  dismissAll?: boolean;
}
