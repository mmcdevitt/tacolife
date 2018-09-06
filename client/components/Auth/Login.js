import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import BackButton from './BackButton';
import {signinUser} from '../../store/user'

class Login extends React.Component {
  componentWillMount () {
    const { authenticated, history } = this.props;

    if (authenticated) {
      history.push('/')
    }
  }

  onFormSubmit ({username, password}) {
    const { signinUser, history } = this.props;

    signinUser({username, password}, 'login')
  }

  renderField (field) {
    const { input, meta: { error, touched } } = field;

    return (
      <div className="form-group">
        <input className={`form-control ${(touched && error) ? 'form-contol-error' : ''}`} {...field.input} placeholder={field.placeholder} type={field.type} />
        <div className="error">
          {(touched) ? error : ''}
        </div>
      </div>
    )
  }

  renderAlert () {
    const { errorMessage } = this.props;

    if (errorMessage) {
      return (
        <div className="alert alert-danger">
          {errorMessage}
        </div>
      )
    }
  }

  render () {
    const { handleSubmit } = this.props;

    return (
      <div>
        <div className="form-header center">
          <h3>Login</h3>
          <p>Please complete all fields.</p>
        </div>
        {this.renderAlert()}
        <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
          <Field type="text" component={this.renderField} placeholder="Username" label="username" name="username" />
          <Field type="password" component={this.renderField} placeholder="Password" label="password" name="password" />
          
          <div className="form-group">
            <button action="submit" className="btn btn-primary btn-block">Log in</button>
          </div>
          <div className="center">
            <Link to="/">Forgot password?</Link>
            <div>
              Don't have an account? <Link to="/register">Register</Link>
            </div>
          </div>
        </form>
        <a href="/auth/google">Login with Google</a>
      </div>
    )
  }
}

function validate (formProps) {
  const errors = {};

  if (!formProps.username) {
    errors.username = 'Username is required.'
  }

  if (!formProps.password) {
    errors.password = 'Password is required.'
  }

  return errors
}

function mapStateToProps (state) {
  const { authenticated, errorMessage, currentUser } = state.Auth; 

  return {
    authenticated,
    errorMessage,
    currentUser
  }
}

const form = reduxForm({
  form: 'login',
  fields: ['username', 'password'],
  validate: validate
})(Login);

export default connect(mapStateToProps, { 
  signinUser
})(form);