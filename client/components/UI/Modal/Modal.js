import React from 'react';

import './Modal.css'

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keyup', this.handleEscKeyUp, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleEscKeyUp, false);
  }

  handleEscKeyUp = (e) => {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener('keyup', this.handleEscKeyUp, false);
      },
    };

    if (keys[e.keyCode]) { keys[e.keyCode](); }
  }

  render () {
    const { onCloseRequest } = this.props;

    return (
      <div className="modal-wrapper">
        <div className="backdrop" onClick={onCloseRequest}></div>
        <div className="modal">
          <div className="modal-close" onClick={onCloseRequest}>Close</div>
          <div className="modal-content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;