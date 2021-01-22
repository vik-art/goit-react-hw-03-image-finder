import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';

import PropTypes from 'prop-types';

import s from './ImageGallery.module.css'


const ImagesGallery = ({ items }) => {
        return (
            <div>
            <ul className={s.list}>
                {items.map( item => (
                    <ImageGalleryItem 
                    key={item.id} 
                    src={item.webformatURL} 
                    alt={item.tags} 
                    largeImageUrl={item.largeImageURL}
                    />
                ))}
            </ul>
        </div> 
        )
}

ImagesGallery.propTypes = {
    key: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    largeImageURL: PropTypes.string
}
export default ImagesGallery;