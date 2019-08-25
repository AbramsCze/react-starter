// libs
import React, { FunctionComponent } from 'react'

// others
import AddUserForm from './AddUserForm'

export const AddUserPage: FunctionComponent = () => {
  const handleSave = (values: User) => {
    console.log(values)
  }

  return <AddUserForm onSubmit={handleSave} />
}
