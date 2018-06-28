import React from 'react'
import { shallow } from 'enzyme'
import App from 'containers/App'
import { Route } from 'react-router-dom';

describe('<App />', () => {
  it('should render some routes', () => {
    const renderedComponent = shallow(
      <App />
    )
    expect(renderedComponent.find(Route).length).not.toBe(0);
  });
})
