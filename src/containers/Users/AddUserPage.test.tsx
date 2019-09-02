// libs
import React from 'react'
import { shallow } from 'enzyme'
import { fake } from 'sinon'
import { SnackbarProvider } from 'notistack'

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
    const renderedApp = shallow(<SnackbarProvider><AddUserPage {...props} /></SnackbarProvider>)
    expect(renderedApp).toMatchSnapshot()
  })
})
