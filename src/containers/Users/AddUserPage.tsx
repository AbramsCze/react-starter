// libs
import React, { FunctionComponent } from 'react'
import { useSnackbar } from 'notistack'

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
  const { enqueueSnackbar } = useSnackbar()

  const handleSave = (values: User) => {
    enqueueSnackbar(<div>I love hooks</div>, {
      variant: 'success',
      autoHideDuration: 1000,
    })

    setUserDetail(values)
  }

  return <AddUserForm onSubmit={handleSave} />
}

const mapDispatchToProps = {
  setUserDetail,
}

export default connect(null, mapDispatchToProps)(AddUserPage)