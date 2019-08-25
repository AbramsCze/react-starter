// libs
import React, { Fragment, FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

// others
import { LoadingButton } from '../../components'
import routes from '../../constants/routes'

export const Homepage: FunctionComponent = () => {
    return (
      <Fragment>
        <LoadingButton />
        <Link to={routes.USER_FORM}>Přidat uživatele</Link>
      </Fragment>
    )
}
