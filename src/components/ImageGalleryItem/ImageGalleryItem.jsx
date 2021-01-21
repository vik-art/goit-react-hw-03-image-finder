import { Component } from 'react';
import ModalWindow from '../Modal'

import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
state = {
    showModal: false,
}
toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal}))
  }
    render() {
        const { showModal } = this.state;
        const { src, alt, largeImageUrl } = this.props;
    return (
    <>
    <li className={s.item}>
    <img 
    src={src} 
    alt={alt}
    className={s.image}
    onClick={this.toggleModal}
    />
    </li>
    {showModal && <ModalWindow onClose={this.toggleModal} src={largeImageUrl} alt={alt}/>}
    </>
    )}
}

ImageGalleryItem.protoType = {
    toggleModal: PropTypes.func.isRequired
}

export default ImageGalleryItem;