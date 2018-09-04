import React from 'react';
import Modal from './Modal';

class ModalLanucher extends React.Component {
  constructor () {
    super();

    this.state = {
      showModal: false,
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  renderElement () {
    // If a custom element is passed in to fire the modal 
    // If not, use the default button 
    const { customElement } = this.props;
    
    return customElement ? customElement(this.toggleModal) : 
    <button onClick={this.toggleModal}>Click</button>   
  }

  renderModal () {
    const { showModal } = this.state;

    if (showModal) {
      return (
        <Modal onCloseRequest={this.toggleModal}>
          {this.props.children}
        </Modal>
      )
    }
  }

  render () {
    
    
    return (
      <div className="modal-wrapper">
        { this.renderElement() }
        { this.renderModal() }
      </div>
    )
  }
}

export default ModalLanucher;