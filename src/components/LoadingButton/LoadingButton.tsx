import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setCvLoading, getUserDetail } from '../../actions/cv'
import { StoreState } from '../../types/global'

type StateToProps = {
  cvAreLoading?: boolean;
}

type DispatchToProps = {
  setCvLoading: (loading: boolean) => void;
  getUserDetail: (userId: number) => void;
}

export type Props = StateToProps & DispatchToProps

export class LoadingButton extends Component<Props> {
  handleLoading = (): void => {
    const { setCvLoading, cvAreLoading } = this.props
    setCvLoading(!cvAreLoading)
  }

  handleDetail = (): void => {
    const { getUserDetail } = this.props
    getUserDetail(2)
  }

  render() {
    const { cvAreLoading } = this.props
    const { handleLoading, handleDetail } = this
    
    return (
      <Fragment>
        <button onClick={handleLoading}>Toggle loading</button>
        <span>{cvAreLoading ? 'LOADING' : 'DONE'}</span>
        <button onClick={handleDetail}>Fetch user</button>
      </Fragment>
    )
  }
}

const mapStateToProps = (state: StoreState) => ({
  cvAreLoading: state.cv.loading
})

const mapDispatchToProps = {
  setCvLoading,
  getUserDetail,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingButton)

