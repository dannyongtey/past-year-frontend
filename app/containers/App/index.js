import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'containers/Home'
import { Snackbar } from 'react-redux-snackbar';
import Download from 'containers/Download'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Snackbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/download/:id" component={Download} />
          <Route path="/download" component={Download} />
        </Switch>
      </Fragment>
    )
  }
}
