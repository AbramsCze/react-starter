// libs
import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'

// others
import AddUserForm from './AddUserForm'
import { fake, SinonSpy } from 'sinon'
import { configureStore } from '../../store'


describe('AddUserForm page', () => {
  let props: {
    onSubmit: SinonSpy;
  } 
  const store = configureStore()

  beforeAll(() => {
    props = {
      onSubmit: fake(),
    }
  })

  it('should render', () => {
    const renderedApp = shallow(<AddUserForm {...props} />)
    expect(renderedApp).toMatchSnapshot()
  })

  it('should call onSubmit props on submit form', () => {
    const renderedApp = mount(<Provider store={store}><MemoryRouter><AddUserForm {...props} /></MemoryRouter></Provider>)
    renderedApp.find('form').simulate('submit')
    expect(props.onSubmit.calledOnce).toBeTruthy()
  })
})
