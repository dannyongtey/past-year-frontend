import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from 'components/Input'
import { selectUsername } from 'containers/App/selectors'

import { selectKeyword } from './selectors'
import { documents } from './constants'
import { setKeyword } from './actions'

export class Learning extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    username: PropTypes.string,
    keyword: PropTypes.string,
    onChangeKeyword: PropTypes.func,
  }

  goToHomePage = () => {
    const { history } = this.props
    history.push('/')
  }

  renderLearningLink(keyword) {
    return ['react', 'redux', 'react-router', 'webpack'].indexOf(keyword) > -1 && (
      <div className="text-center mb-3">
        <a href={documents[keyword]} target="_blank" rel="noopener noreferrer">
          Read documents
        </a>
      </div>
    )
  }

  render() {
    const { keyword, username, onChangeKeyword } = this.props
    return (
      <div className="d-flex flex-column mt-4">
        <p className="d-flex justify-content-center text-center">
          {`Hello ${username || 'anonymous person'}!`}
          <br />
          What do you want to learn?
          <br />
          (React, Redux, React-router, Webpack)
        </p>
        <div className="d-flex justify-content-center mb-3">
          <Input value={keyword} onChange={onChangeKeyword} />
        </div>
        {keyword && this.renderLearningLink(keyword.toLowerCase())}
        <div className="d-flex justify-content-center">
          <button type="button" onClick={this.goToHomePage}>
            Go Home
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  keyword: selectKeyword(state),
  username: selectUsername(state),
})

export const mapDispatchToProps = (dispatch) => ({
  onChangeKeyword: (keyword) => dispatch(setKeyword(keyword)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Learning)
