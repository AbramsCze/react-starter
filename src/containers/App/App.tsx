// libs
import React, { Fragment, FunctionComponent } from 'react'
import { Route, Switch } from 'react-router'
import { ToastContainer } from 'react-toastify-redux'

// others
import Toast from '../../components/Toast/Toast'
import routes from '../../constants/routes'
import AddUserPage from '../Users/AddUserPage'
import { Homepage } from '../Homepage/Homepage'

export const App: FunctionComponent = () => (
  <Fragment>
    <ToastContainer toastComponent={Toast} position="top-right" />
      <Switch>
        <Route path={routes.USER_FORM} component={AddUserPage} />
        <Route path={routes.EMPTY} component={Homepage} />
      </Switch>
    </Fragment>
)

export default App
