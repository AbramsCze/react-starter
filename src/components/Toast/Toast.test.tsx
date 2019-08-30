// libs
import React from 'react'
import { shallow } from 'enzyme'

// others
import Toast from './Toast'

describe('Toast component', () => {
  it('should render Toast with string message', () => {
    const renderedToast = shallow(<Toast message='' title='toast message' />)
    expect(renderedToast).toMatchSnapshot()
  })

  it('should render Toast with i18n message', () => {
    const renderedToast = shallow(<Toast message='app.user.menu.logout' />)
    expect(renderedToast).toMatchSnapshot()
  })
})
