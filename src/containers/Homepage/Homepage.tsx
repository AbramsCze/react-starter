// libs
import React, { Fragment, FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

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
      </Fragment>
    )
}
