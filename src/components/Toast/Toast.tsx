// libs
import React, { FunctionComponent } from 'react'

type OuterProps = {
  message: string;
}

export type Props = OuterProps

const Toast: FunctionComponent<Props> = (props: Props) => {
  const { message } = props

  return (
    <div className="toast">
      <div className="message">{message}</div>
    </div>
  )
}

export default Toast
