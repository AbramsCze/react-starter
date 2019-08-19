import React, { Component, Fragment } from 'react'
import { RouteComponentProps } from 'react-router'
import { LoadingButton } from '../../components'

export class App extends Component<RouteComponentProps<void>> {
  render() {
    return (
      <Fragment>
        <LoadingButton />
      </Fragment>
    )
  }
}
