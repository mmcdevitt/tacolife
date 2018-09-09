import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import {newMenuItem} from '../../actions/restaurant/actions'
import Button from '../UI/Button/Button'

class NewMenuItemForm extends React.Component {
  onFormSubmit (data) {
    const { history } = this.props;

    // this.props.newMenuItem(data)
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

  render () {
    const {handleSubmit} = this.props;
    
    return (
      <div>
        <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
          <Field type="text" component={this.renderField} placeholder="New Menu Item" label="menuItem" name="menuItem" />
          <Button primary block large action="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

function validate (formProps) {
  const errors = {};

  if (!formProps.menuItem) {
    errors.username = 'required.'
  }

  return errors
}

const form = reduxForm({
  form: 'newMenuItemForm',
  fields: ['menuItem'],
  validate: validate
})(NewMenuItemForm);

export default connect(null, { 
  // newMenuItem
})(form);