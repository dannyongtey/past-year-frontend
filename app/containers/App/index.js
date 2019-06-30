import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'containers/Home'
import { Snackbar } from 'react-redux-snackbar';
import Download from 'containers/Download'
import { connect } from 'react-redux'
import { checkLogin } from 'containers/App/actions'

export class App extends Component {

  componentDidMount(){
    this.props.checkLogin()
  }

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

export const mapStateToProps = _ => ({
})

export const mapDispatchToProps = dispatch => ({
  checkLogin: () => dispatch(checkLogin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
