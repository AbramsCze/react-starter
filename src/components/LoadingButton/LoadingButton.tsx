import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setCvLoading } from '../../actions/cv'

type StateToProps = {
  cvAreLoading?: boolean;
}

type DispatchToProps = {
  setCvLoading: (loading: boolean) => void;
}

export type Props = StateToProps & DispatchToProps

export class LoadingButton extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  handleClick = (): void => {
    const { setCvLoading, cvAreLoading } = this.props
    setCvLoading(!cvAreLoading)
  }

  render() {
    const { cvAreLoading } = this.props
    const { handleClick } = this
    return (
      <Fragment>
        <button onClick={handleClick}>Toggle loading</button>
        <span>{cvAreLoading ? 'LOADING' : 'DONE'}</span>
      </Fragment>
    )
  }
}

const mapStateToProps = (state: State) => ({
  cvAreLoading: state.cv.loading
})

const mapDispatchToProps = {
  setCvLoading,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingButton)

