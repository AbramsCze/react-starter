// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as original from 'react-toastify-redux'

// extends original module
declare module 'react-toastify-redux' {
  declare type ToastsState = Array<ToastState>
  declare type ToastState = {
    id: string;
    message: string;
    type: string;
  }
}
