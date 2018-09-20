import React from 'react';
import { connect } from 'react-redux'
import { reduxForm, Field, reset } from 'redux-form';
import {Column} from '../Grid'
import {newMenuItem} from '../../actions/restaurant/actions'
import Button from '../UI/Button/Button'
import MenuItemsList from './MenuItemsList';

class Category extends React.Component {
  constructor () {
    super();

    this.state = {
      toggleInput: false,
      id: null,
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('CATEGORY CWRP', nextProps.categorySelectedId, this.state.id)
    if (this.state.id && nextProps.categorySelectedId !== this.state.id) {
      this.setState({
        toggleInput: false
      })
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('CATEGORY SCU', nextProps.categorySelectedId, nextState.id)
    // if (nextProps.categorySelectedId !== nextState.id) return false;
    if (!nextState.id) return false
    if (nextState.id && nextProps.categorySelectedId !== nextState.id) return true
    if (nextState.id && nextState.toggleInput) return true
    return true
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('CATEGORY CDU', prevProps.categorySelectedId, this.props.categorySelectedId)
  }

  renderForm = (e) => {
    this.setState({
      toggleInput: !this.state.toggleInput,
      id: e.target.parentNode.parentNode.id
    })

    this.props.selectCategory(e)
  }

  onFormSubmit (data) {
    this.props.newMenuItem({
      ...data,
      restaurantId: this.props.restaurant.id,
      categoryId: this.props.category.id
    })

    this.setState({
      toggleInput: false
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

  render () {
    const { handleSubmit, category } = this.props;

    return (
      <Column className="category" id={`category_${category.id}`}>
        <h6>{category.name}</h6>
        <div>
          <MenuItemsList category={category} />
          <button onClick={this.renderForm}>New Item</button>
          {
            this.state.toggleInput && (
              <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <Field type="text" component={this.renderField} placeholder="New Menu Item" label="menuItem" name="name" />
                <Field type="number" component={this.renderField} placeholder="New Menu Item" label="menuItem" name="price" />
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
  dispatch(reset('test'));

function validate (formProps) {
  const errors = {};

  if (!formProps.menuItem) {
    errors.username = 'required.'
  }

  return errors
}

const form = reduxForm({
  form: 'test',
  fields: ['name'],
  validate: validate,
  onSubmitSuccess: afterSubmit,
})(Category);

export default connect(null, { 
  newMenuItem
})(form);