// libs
import React from 'react'
import { shallow } from 'enzyme'

// others
import { App } from './App'

describe('App page', () => {
  it('should render', () => {
    const renderedApp = shallow(<App />)
    expect(renderedApp).toMatchSnapshot()
  })
})
