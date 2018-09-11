import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, reset } from 'redux-form'; 
import Button from '../UI/Button/Button' 
import {newMenuItem} from '../../actions/restaurant/actions'

class MenuItemForm extends React.Component {
  onFormSubmit (data) {
    const { history } = this.props;
    this.props.newMenuItem(data)
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
      <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
        <Field type="text" component={this.renderField} placeholder="New Menu Item" label="menuItem" name="name" />
        <Button primary block large action="submit">Submit</Button>
      </form>
    )
  }
}

function validate () {

}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('newMenuItemForm'));

const form = reduxForm({
  form: 'newMenuItemForm',
  fields: ['name'],
  validate: validate,
  onSubmitSuccess: afterSubmit,
})(MenuItemForm);

export default connect(null, {
  newMenuItem
})(form);