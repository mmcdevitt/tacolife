import React from 'react';
import { connect } from 'react-redux'
import { reduxForm, Field, reset } from 'redux-form';
import {Column} from '../Grid'
import Category from './Category'
import {newCategory} from '../../actions/restaurant/actions'
import Button from '../UI/Button/Button'

class Categories extends React.Component {
  constructor () {
    super()

    this.state = {
      toggle: false,
      categorySelectedId: null,
    }
  }

  onFormSubmit (data) {
    this.props.newCategory({
      ...data,
      restaurantId: this.props.restaurant.id
    })

  }

  renderForm = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  selectCategory = (e) => {
    this.setState({
      categorySelectedId: e.target.parentNode.parentNode.id
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

  renderCategories () {
    const { restaurant } = this.props;

    return restaurant.categories.map(category => {
      return (
        <Category 
          key={category.id} 
          category={category}
          restaurant={restaurant}
          selectCategory={this.selectCategory}
          categorySelectedId={this.state.categorySelectedId}
        />
      )
    })
  }

  render () {
    const { handleSubmit } = this.props;

    return (
      <Column flex className="categories">
        { this.renderCategories() }
        <div>
          <button onClick={this.renderForm}>New Category</button>
          {
            this.state.toggle && (
              <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <Field type="text" component={this.renderField} placeholder="New Menu Item" label="menuItem" name="name" />
                <Button primary block large action="submit">Submit</Button>
              </form>
            )
          }
        </div>
      </Column>
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

const form = reduxForm({
  form: 'newMenuItemForm',
  fields: ['name'],
  validate: validate,
  onSubmitSuccess: afterSubmit,
})(Categories);

export default connect(null, { 
  newCategory
})(form);