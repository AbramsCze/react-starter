// libs
import React, { FunctionComponent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'

// others
import Forms from '../../constants/forms'

type OuterProps = {
  onSubmit: (values: User) => void;
}

type Props = OuterProps & RouteComponentProps<void>

const AddUserForm: FunctionComponent<Props & InjectedFormProps<User, Props>> = (props: Props & InjectedFormProps<User, Props>) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">First Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="surname">Last Name</label>
        <Field name="surname" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="job">Job</label>
        <Field name="job" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

const wrappedComponent = reduxForm<User, Props>({
  form: Forms.userFrom
})(AddUserForm)

export default withRouter(wrappedComponent)
