import React from 'react'
import { shallow } from 'enzyme'
import LearningDocuments from 'components/LearningDocuments'
import { context as globalContext } from 'containers/App/constants'
import { Learning, mapDispatchToProps, mapStateToProps } from 'containers/Learning'
import { setKeyword, fetchKeywords } from 'containers/Learning/actions'
import { context as learningContext } from 'containers/Learning/constants'

describe('<Learning />', () => {
  const getKeywords = jest.fn()

  describe('render', () => {
    it('render without error', () => {
      const renderedComponent = shallow(<Learning username="" keyword="" fetchKeywords={getKeywords} />)
      expect(renderedComponent.length).toEqual(1)
    })

    it('should render anonymous person text if username not exists', () => {
      const renderedComponent = shallow(<Learning username="" keyword="" fetchKeywords={getKeywords} />)
      expect(renderedComponent.text()).toContain('anonymous person')
    })

    it('should render exact username if it exists', () => {
      const renderedComponent = shallow(<Learning username="test" keyword="" fetchKeywords={getKeywords} />)
      expect(renderedComponent.text()).not.toContain('anonymous person')
      expect(renderedComponent.text()).toContain('test')
    })
  })

  it('should call change location event on click button', () => {
    const history = { push: jest.fn() }
    const renderedComponent = shallow(<Learning history={history} fetchKeywords={getKeywords} />)
    jest.spyOn(history, 'push');
    renderedComponent.find('button').simulate('click')
    expect(history.push).toHaveBeenCalledWith('/');
  })

  describe('Loading data', () => {
    it('should show Loading status when loading data', () => {
      const renderedComponent = shallow(<Learning loading fetchKeywords={getKeywords} />)
      expect(renderedComponent.text()).toContain('Loading...');
      expect(renderedComponent.find(LearningDocuments).length).toBe(0);
    })

    it('should show LearningDocuments component when not loading data', () => {
      const renderedComponent = shallow(<Learning loading={false} fetchKeywords={getKeywords} />)
      expect(renderedComponent.find(LearningDocuments).length).toBe(1);
    })
  })

  describe('mapDispatchToProps', () => {
    describe('setKeyword', () => {
      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.onChangeKeyword).toBeDefined()
      })

      it('should dispatch setKeyword when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        const keyword = 'test'
        result.onChangeKeyword(keyword)
        expect(dispatch).toHaveBeenCalledWith(setKeyword(keyword))
      })

      it('should dispatch fetchKeywords when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        result.fetchKeywords()
        expect(dispatch).toHaveBeenCalledWith(fetchKeywords())
      })
    })
  })

  describe('mapStateToProps', () => {
    it('should return props from state selectors', () => {
      const globalState = { username: 'username' }
      const learningState = {
        keyword: '',
        validKeywords: [],
        loading: false,
        error: false,
      }
      const mockState = {
        [globalContext]: globalState,
        [learningContext]: learningState,
      }
      const expectResult = {
        ...globalState,
        ...learningState,
      }
      const result = mapStateToProps(mockState)
      expect(result).toEqual(expectResult)
    })
  })
})
