import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from 'components/Input'
import { setUsername } from 'containers/App/actions'
import { selectUsername } from 'containers/App/selectors'

export class Download extends PureComponent {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func,
        }),
    }

    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        return (
            <div className="text-center" style={{position: 'relative', top: '50vh', transform: 'translateY(-50%)'}}>
                <h4>The server is processing your request.</h4>
                <p>Download will automatically start once the request has been processed.</p>
                <p>Sadly, there is no fancy loading animation.</p>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    username: selectUsername(state),
})

export const mapDispatchToProps = dispatch => ({
    onChangeUsername: value => dispatch(setUsername(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Download)
