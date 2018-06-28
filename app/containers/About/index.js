import React from 'react'
import PropTypes from 'prop-types'

export default class About extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
  }

  goToHomePage = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        About
        <button onClick={this.goToHomePage}>Go Home</button>
      </div>
    )
  }
}
