import React from 'react';

class Form extends React.Component {
  render () {
    return (
      <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
        <Field type="text" component={this.renderField} placeholder="New Menu Item" label="menuItem" name="name" />
        <Button primary block large action="submit">Submit</Button>
      </form>
    )
  }
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

export default form;