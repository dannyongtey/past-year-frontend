import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import Input from 'components/Input'

export default class LearningDocuments extends PureComponent {
  static propTypes = {
    keyword: PropTypes.string,
    onChangeKeyword: PropTypes.func,
    validKeywords: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
  }

  showValidKeywords() {
    const { validKeywords } = this.props
    return `(${validKeywords.map(({ name: keywordName }) => keywordName)})`
  }

  renderLearningLink(keyword) {
    const { validKeywords } = this.props
    const match = validKeywords.find(({ name }) => name === keyword)
    return match && (
      <div className="text-center mb-3">
        <a href={match.url} target="_blank" rel="noopener noreferrer">
          Read documents
        </a>
      </div>
    )
  }

  render() {
    const {
      keyword, onChangeKeyword, error,
    } = this.props

    return (
      <Fragment>
        {error ? (
          <p className="d-flex justify-content-center text-center">
            Something went wrong, please try again!
          </p>
        ) : (
          <Fragment>
            <p className="d-flex justify-content-center text-center">
              { this.showValidKeywords() }
            </p>
            <div className="d-flex justify-content-center mb-3">
              <Input value={keyword} onChange={onChangeKeyword} />
            </div>
            {keyword && this.renderLearningLink(keyword.toLowerCase())}
          </Fragment>
        )}
      </Fragment>
    )
  }
}
