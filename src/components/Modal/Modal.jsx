import { Component } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import s from './Modal.module.css'

const modalRoot = document.querySelector("#modal-root")

class ModalWindow extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)
    }
    handleKeydown = e => {
        if(e.code === 'Escape') {
            this.props.onClose();
        }
    }
    handleBackdropClick = e => {
        if(e.currentTarget === e.target) {
            this.props.onClose()
        }
    }
render() {
    const { src, alt } = this.props;
    return createPortal (
    <div className={s.overlay} onClick={this.handleBackdropClick}>
    <div className={s.modal}>
    <img 
    src={src}
    alt={alt}
    />
  </div>
</div>,
modalRoot,
    );
}
}

ModalWindow.propTypes = {
    handleBackdropClick: PropTypes.func.isRequired,
    handleKeydown: PropTypes.func.isRequired
}

export default ModalWindow