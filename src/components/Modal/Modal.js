import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { overlay, modal } from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={overlay} onClick={this.props.closeModal}>
        <div className={modal}>
          <img src={this.props.modalBigImage} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalBigImage: PropTypes.string.isRequired
};

export default Modal;


