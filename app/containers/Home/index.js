import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from 'components/Input'
import { setUsername, setDownloadData, loginUser, logoutUser } from 'containers/App/actions'
import { selectUsername, selectAuth } from 'containers/App/selectors'
import { GoogleLogin } from 'react-google-login';
import { showSnack } from 'react-redux-snackbar';


export class Home extends PureComponent {

  componentDidMount() {
    const shareID = this.props.location.pathname.split('/')[1]
    const SHAREID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    if (SHAREID_REGEX.test(shareID)) {
      setTimeout(() => {
        this.setState({
          shareID
        })
        this.generateDownloadData('shareID')
      }, 1000);

    }
  }

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    onChangeUsername: PropTypes.func,
    onCommandDownload: PropTypes.func,
  }


  generateDownloadData = (type) => {
    let rawData = this.state[type]
    const processedData = type === 'shareID' ? rawData : rawData.replace(/\s/g, '').split(',');
    this.props.onCommandDownload({
      // type,
      details: {
        type,
        details: processedData
      }
    })
    console.log(this.props.history)
    this.props.history.push('/download')
  }

  constructor(props) {
    super(props)
    this.state = {
      single: '',
      multiple: '',
      shareID: '',
    }
  }

  updateField({ data, field }) {
    this.setState({
      [field]: data
    })
  }

  responseGoogle = (response) => {
    this.props.loginUser(response)
    console.log(response)
  }

  failedResponse = (response) => {
    if (response.error && response.details) {
      this.props.showSnack('error', { label: response.details, timeout: 5000 })
    }
    console.log(response)
  }

  logout = () => {
    this.props.logout()
  }

  isValidEmail(email) {
    if (!email.endsWith('@student.mmu.edu.my')) {
      return false
    }
    return true
  }

  render() {

    const { isLoggedIn, loginData } = this.props
    return (
      <div className="d-flex flex-column mt-4">
        <div className="text-center">
          <h3>Past Year Scraper </h3>
          <h5>By <a href="https://github.com/dannyongtey">Danny</a></h5>
          <p>When I got screwed by a problem I screw the problem back.</p>
          <br />
          {isLoggedIn ?
            <div className='text-center'>
              {this.isValidEmail(loginData.profileObj.email) ?
                'Logged in as ' + loginData.profileObj.name + '. Welcome!'
                :
                'You must use MMU approved student email (ends with @student.mmu.edu.my) to access the functions. Try clearing your cache if you are unable to choose credentials.'
              }
              <p><a style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={this.logout}>Logout</a></p>
            </div>
            :
            <div>

            </div>
          }
        </div>

        {isLoggedIn ?
          this.isValidEmail(loginData.profileObj.email) ?
            <div className="row mt-5">

              <div className="py-5 border text-center justify-content-center col-12 col-lg-4">
                <h5>Enter ID</h5>
                <p>to download single paper.</p>
                <Input placeholder="12345, 54321" onChange={(data) => this.updateField({ data, field: 'single' })} />
                <button className="mt-3" type="button" onClick={(e) => this.generateDownloadData('single')}>
                  Download
          </button>
              </div>

              <div className="py-5 border text-center justify-content-center col-12 col-lg-4">
                <h5>Enter Subject Code</h5>
                <p>to download papers for that subject.</p>
                <Input placeholder="TMD 1234, CCB 5678" onChange={(data) => this.updateField({ data, field: 'multiple' })} />
                <button className="mt-3" type="button" onClick={(e) => this.generateDownloadData('multiple')}>
                  Download
          </button>
              </div>

              <div className="py-5 border text-center justify-content-center col-12 col-lg-4">
                <h5>Enter download ID</h5>
                <p>to download a previously submitted request.</p>
                <Input onChange={(data) => this.updateField({ data, field: 'shareID' })} />
                <button className="mt-3" type="button" onClick={(e) => this.generateDownloadData('shareID')}>
                  Download
          </button>
              </div>
            </div>
            :
            <div></div>
          :

          <div
            style={{ textAlign: 'center' }}>
            <GoogleLogin
              clientId="481435186556-tan5omqbs8diicjtcs5uifroac0p1v0s.apps.googleusercontent.com"
              buttonText="Login with MMU Account"
              onSuccess={this.responseGoogle}
              onFailure={this.failedResponse}
              cookiePolicy={'single_host_origin'}
            />
            <p style={{ marginTop: '20px' }}>This application involves downloading MMU's intellectual property. Hence, you need to prove that you are a MMU student.</p>
          </div>
        }

      </div>
    )
  }
}

export const mapStateToProps = state => ({
  username: selectUsername(state),
  isLoggedIn: Object.keys(selectAuth(state)).length > 0 ? true : false,
  loginData: selectAuth(state),
})

export const mapDispatchToProps = dispatch => ({
  onChangeUsername: value => dispatch(setUsername(value)),
  onCommandDownload: value => dispatch(setDownloadData(value)),
  showSnack: (id, options) => dispatch(showSnack(id, options)),
  loginUser: value => dispatch(loginUser(value)),
  logout: () => dispatch(logoutUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
