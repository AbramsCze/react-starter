// libs
import React from 'react'
import { shallow } from 'enzyme'
import { fake } from 'sinon'

// others
import { AddUserPage, Props } from './AddUserPage'



describe('AddUserPage page', () => {
  let props: Props

  beforeEach(() => {
    props = {
      setUserDetail: fake()
    }
  })

  it('should render', () => {
    const renderedApp = shallow(<AddUserPage {...props} />)
    expect(renderedApp).toMatchSnapshot()
  })
})
