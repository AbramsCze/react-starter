// libs
import React from 'react'
import { shallow } from 'enzyme'

// others
import { AddUserPage } from './AddUserPage'


describe('AddUserPage page', () => {
  it('should render', () => {
    const renderedApp = shallow(<AddUserPage />)
    expect(renderedApp).toMatchSnapshot()
  })
})
