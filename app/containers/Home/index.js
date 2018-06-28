import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from 'components/Input'
import { setUsername } from 'containers/App/actions'
import { selectUsername } from 'containers/App/selectors'

export class Home extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    username: PropTypes.string,
    onChangeUsername: PropTypes.func,
  }

  goToLearningPage = () => {
    const { history } = this.props
    history.push('/learning')
  }

  render() {
    const { username, onChangeUsername } = this.props
    return (
      <div className="d-flex flex-column mt-4">
        <p className="d-flex justify-content-center">
          This is simple react app!
          <br />
          Please type your name:
        </p>
        <div className="d-flex justify-content-center mb-4">
          <Input value={username} onChange={onChangeUsername} />
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" onClick={this.goToLearningPage}>
            Go to Learning Page
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  username: selectUsername(state),
})

export const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (value) => dispatch(setUsername(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
