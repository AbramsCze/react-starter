// libs
import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'

type OuterProps = {
  message: string;
  title?: string;
}

type Props = OuterProps

const Toast: FunctionComponent<Props> = (props: Props) => {
  const { message, title } = props

  const renderMessage = () => {
    if (message.length > 0) {
      return <FormattedMessage id={message} />
    }
    return title
  }

  return (
    <div className="toast">
      <div className="message">{renderMessage()}</div>
    </div>
  )
}

export default Toast
