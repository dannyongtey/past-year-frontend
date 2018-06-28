import React from 'react'
import PropTypes from 'prop-types'

export default class Home extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
  }

  goToAboutPage = () => {
    this.props.history.push('/about')
  }

  render() {
    return (
      <div>
        Home
        <button onClick={this.goToAboutPage}>Go Home</button>
      </div>
    )
  }
}
