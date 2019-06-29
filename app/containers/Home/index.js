import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from 'components/Input'
import { setUsername, setDownloadData } from 'containers/App/actions'
import { selectUsername } from 'containers/App/selectors'

export class Home extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    onChangeUsername: PropTypes.func,
    onCommandDownload: PropTypes.func,
  }

  goToLearningPage = () => {
    const { history } = this.props
    history.push('/learning')
  }

  generateDownloadData = (type) =>{
    let rawData = this.state[type]
    console.log(process)
    const processedData = type === 'shareID'? rawData : rawData.replace(/\s/g, '').split(',');
    this.props.onCommandDownload({
      // type,
      details: {
        type,
        details: processedData
      }
    })
    this.props.history.push('/download')
  }

  constructor(props){
    super(props)
    this.state = {
      single: '',
      multiple: '',
      shareID: '',
    }
  }

  updateField({data, field}){
    this.setState({
      [field]: data
    })
  }

  render() {
    
    return (
      <div className="d-flex flex-column mt-4">
        <div className="text-center">
          <h3>Past Year Scrapper </h3>
          <h5>By <a href="https://github.com/dannyongtey">Danny</a></h5>
          <p>When I got screwed by a problem I screw the problem back.</p>
          <br />
        </div>

        <div className="row mt-5">
          <div className="py-5 border text-center justify-content-center col-12 col-lg-4">
            <h5>Enter ID</h5>
            <p>to download single paper.</p>
            <Input placeholder="12345, 54321" onChange={(data) => this.updateField({data, field: 'single'})} />
            <button className="mt-3" type="button" onClick={(e) => this.generateDownloadData('single')}>
              Download
            </button>
          </div>

          <div className="py-5 border text-center justify-content-center col-12 col-lg-4">
            <h5>Enter Subject Code</h5>
            <p>to download papers for that subject.</p>
            <Input placeholder="TMD 1234, CCB 5678" onChange={(data) => this.updateField({data, field: 'multiple'})} />
            <button className="mt-3" type="button" onClick={(e) => this.generateDownloadData('multiple')}>
              Download
            </button>
          </div>

          <div className="py-5 border text-center justify-content-center col-12 col-lg-4">
            <h5>Enter download ID</h5>
            <p>to download a previously submitted request.</p>
            <Input onChange={(data) => this.updateField({data, field: 'shareID'})} />
            <button className="mt-3" type="button" onClick={(e) => this.generateDownloadData('shareID')}>
              Download
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  username: selectUsername(state),
})

export const mapDispatchToProps = dispatch => ({
  onChangeUsername: value => dispatch(setUsername(value)),
  onCommandDownload: value => dispatch(setDownloadData(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
