// libs
import React from 'react'
import { shallow } from 'enzyme'
import { fake } from 'sinon'

// others
import { LoadingButton, Props } from './LoadingButton'

describe('LoadingButton component', () => {
  let props: Props

  beforeEach(() => {
    props = {
      setCvLoading: fake(),
      getUserDetail: fake(),
      cvAreLoading: false,
    }
  })

  it('should render', () => {
    const renderedComponent = shallow(<LoadingButton {...props} />)
    expect(renderedComponent).toMatchSnapshot()
  })
})
