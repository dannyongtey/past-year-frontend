import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import About from 'containers/About'
import Home from 'containers/Home'

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <p>
          This is simple react app
        </p>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Fragment>
    )
  }
}
