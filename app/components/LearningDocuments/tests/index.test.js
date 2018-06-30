import React from 'react'
import { shallow } from 'enzyme'
import LearningDocuments from '../index'

describe('<LearningDocuments />', () => {
  const mockKeywords = [
    { id: 1, name: 'react', url: 'https://react.com' },
    { id: 2, name: 'redux', url: 'https://redux.com' },
  ]

  it('should render <a> tag if keyword is valid', () => {
    const renderedComponent = shallow(<LearningDocuments validKeywords={mockKeywords} keyword="react" />)
    expect(renderedComponent.find('a').length).toBe(1)
  })

  it('should not render <a> tag if keyword is invalid', () => {
    const renderedComponent = shallow(<LearningDocuments validKeywords={mockKeywords} keyword="test" />)
    expect(renderedComponent.find('a').length).toBe(0)
  })

  it('should show error status if have error', () => {
    const mockError = new Error('error')
    const renderedComponent = shallow(<LearningDocuments error={mockError} />)
    expect(renderedComponent.text()).toContain('Something went wrong, please try again!');
  })
})
