import React from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {newMenuItem, newCategory} from '../../actions/restaurant/actions'
import Button from '../UI/Button/Button'
import {Column} from '../Grid'

import './MenuItems.css'

class NewMenuItemForm extends React.Component {
  constructor () {
    super()

    this.state = {
      toggle: false
    }
  }

  onFormSubmit (data) {
    const { history } = this.props;
    // this.props.newMenuItem(data)
    this.props.newCategory({
      ...data,
      restaurantId: this.props.restaurant.id
    })

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

  renderForm = () => {
    this.setState({
      toggle: !this.state.toggle 
    })
  }

  render () {
    const {handleSubmit} = this.props;
    
    return (
      <div>
        <Column flex className="categories">
          {
            this.props.restaurant.categories.map(cat => {
              return (
                <div key={cat.id} className="category">
                  {cat.name}
                  <div>
                    {
                      cat.menuItems.map(item => {
                        return <div key={item.id}>{item.name}</div>
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        <div>
          <button onClick={this.renderForm}>New Category</button>
          {
            this.state.toggle && (
              <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <Field type="text" component={this.renderField} placeholder="New Menu Item" label="menuItem" name="name" />
                {/* <Field type="number" component={this.renderField} placeholder="New Menu Item" label="menuItem" name="price" />  */}
                <Button primary block large action="submit">Submit</Button>
              </form>
            )
          }
        </div>
        </Column>
      </div>
    )
  }
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('newMenuItemForm'));

function validate (formProps) {
  const errors = {};

  if (!formProps.menuItem) {
    errors.username = 'required.'
  }

  return errors
}

function mapStateToProps (state) {
  return {
    restaurant: state.restaurant.data
  }
}

const form = reduxForm({
  form: 'newMenuItemForm',
  fields: ['name'],
  validate: validate,
  onSubmitSuccess: afterSubmit,
})(NewMenuItemForm);

export default connect(mapStateToProps, { 
  newMenuItem,
  newCategory
})(form);