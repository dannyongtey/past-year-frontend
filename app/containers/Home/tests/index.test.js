import React from 'react'
import { shallow } from 'enzyme'
import { Home, mapDispatchToProps } from 'containers/Home'
import Input from 'components/Input'
import { setUsername } from 'containers/App/actions'

describe('<Learning />', () => {
  it('render without error', () => {
    const renderedComponent = shallow(<Home />)
    expect(renderedComponent.length).toEqual(1)
  })

  it('should render an Input component', () => {
    const onChangeEvent = jest.fn()
    const renderedComponent = shallow(<Home username="test" onChangeUsername={onChangeEvent} />)
    expect(renderedComponent.contains(<Input value="test" onChange={onChangeEvent} />)).toEqual(true)
  })

  it('should render a button', () => {
    const renderedComponent = shallow(<Home />)
    expect(renderedComponent.find('button').length).toBe(1)
  })

  it('should call change location event on click button', () => {
    const history = { push: jest.fn() }
    const renderedComponent = shallow(<Home history={history} />)
    jest.spyOn(history, 'push');
    renderedComponent.find('button').simulate('click')
    expect(history.push).toHaveBeenCalledWith('/learning');
  })

  describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.onChangeUsername).toBeDefined()
      })

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        const username = 'test'
        result.onChangeUsername(username)
        expect(dispatch).toHaveBeenCalledWith(setUsername(username))
      })
    })
  })
})
