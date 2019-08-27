// libs
import React, { FunctionComponent } from 'react'

// others
import AddUserForm from './AddUserForm'
import { connect } from 'react-redux'
import { setUserDetail } from '../../actions/cv'

type DispatchToProps = {
  setUserDetail: (user: User) => void;
}

export type Props = DispatchToProps

export const AddUserPage: FunctionComponent<Props> = (props: Props) => {
  const { setUserDetail } = props

  const handleSave = (values: User) => {
    setUserDetail(values)
  }

  return <AddUserForm onSubmit={handleSave} />
}

const mapDispatchToProps = {
  setUserDetail,
}

export default connect(null, mapDispatchToProps)(AddUserPage)