// libs
import React from 'react'
import { shallow } from 'enzyme'

// others
import Toast, { Props } from './Toast'

describe('Toast component', () => {
  let props: Props

  beforeEach(() => {
    props = {
      message: 'toast message',
    }
  })

  it('should render Toast with string messages', () => {
    const renderedToast = shallow(<Toast {...props} />)
    expect(renderedToast).toMatchSnapshot()
  })
})
