import { connect } from 'react-redux'
import { login } from '../actions/sessionActions'
import Login from '../components/Login'

const mapStateToProps = state => ({
	errorMsg: state.session.errorMsg,
})

const mapDispatchToProps = dispatch => ({
	login: (params, cb) => dispatch(login(params, cb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
