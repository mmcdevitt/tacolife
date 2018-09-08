import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {signinUser} from '../../store/user'

const FIELDS = [
  { label: 'First Name', name: 'firstName' },
  { label: 'Last Name', name: 'lastName' },
  { label: 'Username', name: 'username' },
  { label: 'Email', name: 'email' },
  { label: 'Password', name: 'password' },
  { label: 'Password Confirmation', name: 'passwordConfirm' },
];

class Register extends React.Component {
  renderField (field) {
    // This method is being passed in the component field in the Field Component in the render method
    const { label, type, input, meta: { error, touched } } = field;

    return (
      <div className="form-group">
        <input className={`form-control ${(touched && error) ? 'form-contol-error' : ''}`} type={type} placeholder={label} {...input} />
        <div className="error">{(touched) ? error : ''}</div>
      </div>
    )
  }

  onFormSubmit (formProps) {
    const { signinUser, history } = this.props;

    signinUser(formProps, 'register');
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div>
          {this.props.errorMessage}
        </div>
      );
    } 
  }

  render () {
    const { handleSubmit } = this.props;

    return (
      <div>
        <div className="form-header center">
          <h3>Register</h3>
          <p>Please complete all fields.</p>
        </div>
        <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
          {FIELDS.map(field => {
            return (
              <Field
                key={field.label}
                type={(field.name.includes('password')) ? 'password' : 'text'}
                component={this.renderField}
                label={field.label}
                name={field.name}
              />
            )
          })}
          {this.renderAlert()}
          <div className="form-group">
            <button className="btn btn-primary btn-block" action="submit">Register</button>
          </div>
          <div className="center">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    )
  }
}

function validate (formProps) {
  const errors = {},
        vowels = ['a', 'e', 'i', 'o'];

  // Required fields
  FIELDS.forEach(field => {
    const firstLetter = field.name.split('')[0];

    if (!formProps[field.name]) {
      const an = ((vowels.includes(firstLetter)) ? 'an' : 'a');
      errors[field.name] = `Please enter ${an} ${field.label.toLowerCase()}`;
    }
  });

  // Password and confirmation must match
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match!';
  }

  // Password length must be 6 or more characters in length
  if (formProps.password && formProps.password.length < 6) {
    errors.password = 'Password must be 6 characters in length';
  } 

  return errors;
}

function mapStateToProps (state) {
  const { errorMessage } = state.auth;

  return {
    errorMessage
  }
}

const form = reduxForm({
  form: 'register',
  fields: ['firstName', 'lastName', 'email', 'password', 'passwordConfirm'],
  validate: validate,
})(Register)

export default connect(mapStateToProps, { 
  signinUser 
})(form)