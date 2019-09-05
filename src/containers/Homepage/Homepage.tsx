// libs
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

// others
import { LoadingButton } from '../../components'
import routes from '../../constants/routes'
import { FormattedMessage } from 'react-intl'

export const Homepage: React.FunctionComponent = () => {
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
      </div>
    )
}
