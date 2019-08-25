// libs
import React from 'react'
import { shallow } from 'enzyme'

// others
import { Homepage } from './Homepage'

describe('Homepage page', () => {
  it('should render', () => {
    const renderedApp = shallow(<Homepage />)
    expect(renderedApp).toMatchSnapshot()
  })
})
