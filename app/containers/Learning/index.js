import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectUsername } from 'containers/App/selectors'
import LearningDocuments from 'components/LearningDocuments'

import {
  selectKeyword, selectValidKeywords, selectLoading, selectError,
} from './selectors'
import { setKeyword, fetchKeywords } from './actions'

export class Learning extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    username: PropTypes.string,
    keyword: PropTypes.string,
    onChangeKeyword: PropTypes.func,
    fetchKeywords: PropTypes.func,
    validKeywords: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
  }

  componentDidMount() {
    const { fetchKeywords: getKeywords } = this.props
    getKeywords()
  }

  goToHomePage = () => {
    const { history } = this.props
    history.push('/')
  }

  render() {
    const {
      keyword, validKeywords, username, onChangeKeyword, loading, error,
    } = this.props

    return (
      <div className="d-flex flex-column mt-4">
        <p className="d-flex justify-content-center text-center">
          {`Hello ${username || 'anonymous person'}!`}
          <br />
          What do you want to learn?
          <br />
        </p>
        {loading ? (
          <p className="d-flex justify-content-center text-center">
            Loading...
          </p>
        ) : (
          <LearningDocuments
            keyword={keyword}
            validKeywords={validKeywords}
            onChangeKeyword={onChangeKeyword}
            error={error}
          />
        )}
        <div className="d-flex justify-content-center">
          <button type="button" onClick={this.goToHomePage}>
            Go Home
          </button>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  keyword: selectKeyword(state),
  username: selectUsername(state),
  validKeywords: selectValidKeywords(state),
  loading: selectLoading(state),
  error: selectError(state),
})

export const mapDispatchToProps = dispatch => ({
  onChangeKeyword: keyword => dispatch(setKeyword(keyword)),
  fetchKeywords: () => dispatch(fetchKeywords()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Learning)
