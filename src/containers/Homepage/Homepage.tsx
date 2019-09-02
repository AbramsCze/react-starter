// libs
import React, { Fragment, FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

// others
import { LoadingButton } from '../../components'
import routes from '../../constants/routes'
import { FormattedMessage } from 'react-intl'

export const Homepage: FunctionComponent = () => {
    return (
      <Fragment>
        <LoadingButton />
        <Link to={routes.USER_FORM}>Přidat uživatele</Link><br />
        <FormattedMessage id="app.user.menu.logout" /><br />
        <FormattedMessage id="app.validations.user.id.error" values={{ id: 2, name: 'Michal' }} /><br />
        <Button variant="contained" color="primary">Test</Button>
        <Button variant="contained" color="secondary">Test</Button>
      </Fragment>
    )
}
