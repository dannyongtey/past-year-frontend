import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import Home from 'containers/Home'
import { Snackbar } from 'react-redux-snackbar';
import Download from 'containers/Download'
import { connect } from 'react-redux'
import { checkLogin } from 'containers/App/actions'

export class App extends Component {

  componentDidMount() {
    this.props.checkLogin()
  }

  render() {
    return (
      <Fragment>
        <Snackbar />
        <Switch>
          <Route path="/download/:id" component={Download} />
          <Route path="/download" component={Download} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Fragment>
    )
  }
}

export const mapStateToProps = _ => ({
})

export const mapDispatchToProps = dispatch => ({
  checkLogin: () => dispatch(checkLogin()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
