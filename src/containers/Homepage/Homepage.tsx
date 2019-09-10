// libs
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

// others
import { LoadingButton } from '../../components'
import routes from '../../constants/routes'
import { FormattedMessage } from 'react-intl'
import { enqueueSnackbar, closeSnackbar, removeSnackbar, EnqueueSnackbarAction } from '../../actions/notification'

type DispatchToProps = {
  enqueueSnackbar: (notification: Snackbar) => EnqueueSnackbarAction;
  closeSnackbar: (key: number) => void;
  removeSnackbar: (key: number) => void;
}

export type Props = DispatchToProps

export const Homepage: React.FunctionComponent<Props> = (props: Props) => {
  const { enqueueSnackbar, closeSnackbar, removeSnackbar } = props
  let notificationKeys: Array<number> = []

  const handleEnqueueSnackbar = () => {
    const action = enqueueSnackbar({ message: 'uživatelská notifikace' })
    action.payload.key && notificationKeys.push(action.payload.key)
  }

  const handleCloseSnackbar = () => {
    closeSnackbar(0)
  }

  const handleRemoveSnackbar = () => {
    removeSnackbar(notificationKeys[0])
    notificationKeys = notificationKeys.slice(1)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <LoadingButton />
        </div>
        <div className="col-sm">
          <Link to={routes.USER_FORM}>Přidat uživatele</Link><br />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <FormattedMessage id="app.user.menu.logout" /><br />
          <FormattedMessage id="app.validations.user.id.error" values={{ id: 2, name: 'Michal' }} /><br />
        </div>
        <div className="col-sm">
          <Button variant="contained" color="primary">Test</Button>
          <Button variant="contained" color="secondary">Test</Button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Button variant="contained" color="primary" onClick={handleEnqueueSnackbar}>Enqueue</Button>
          <Button variant="contained" color="primary" onClick={handleCloseSnackbar}>Close</Button>
          <Button variant="contained" color="primary" onClick={handleRemoveSnackbar}>Remove</Button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  enqueueSnackbar,
  closeSnackbar,
  removeSnackbar,
}

export default connect(null, mapDispatchToProps)(Homepage)
