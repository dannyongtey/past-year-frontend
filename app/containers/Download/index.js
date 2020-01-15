import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from 'components/Input'
import { setUsername } from 'containers/App/actions'
import { selectUsername, selectDownloadID } from 'containers/App/selectors'
import { showSnack } from 'react-redux-snackbar';


export class Download extends PureComponent {

    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func,
        }),
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { downloadID } = this.props
        return (
            <div className="text-center" style={{ position: 'relative', top: '50vh', transform: 'translateY(-50%)' }}>
                <h4>The server is processing your request.</h4>
                <p>Download will automatically start once the request has been processed.</p>
                <p>Sadly, there is no fancy loading animation.</p>
                <p><a href='/'>Back to home</a></p>
                {downloadID ?
                    <div>
                        <p>{downloadID}</p>
                        <p>{window.origin}/{downloadID}</p>
                        <p>Share the link or download ID with your friends so they can download what you have downloaded!</p>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    username: selectUsername(state),
    downloadID: selectDownloadID(state),
})

export const mapDispatchToProps = dispatch => ({
    onChangeUsername: value => dispatch(setUsername(value)),
    showSnack: (id, options) => dispatch(showSnack(id, options)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Download)
