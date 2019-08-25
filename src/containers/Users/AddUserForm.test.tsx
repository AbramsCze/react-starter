// libs
import React from 'react'
import { shallow } from 'enzyme'

// others
import AddUserForm, { OuterProps } from './AddUserForm'
import { fake } from 'sinon'

describe('AddUserForm page', () => {
  let props: OuterProps 

  beforeAll(() => {
    props = {
      onSubmit: fake(),
    }
  })

  it('should render', () => {
    const renderedApp = shallow(<AddUserForm {...props} />)
    expect(renderedApp).toMatchSnapshot()
  })
})
