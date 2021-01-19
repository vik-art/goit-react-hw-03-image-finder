import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem'

import s from './ImageGallery.module.css'


const ImagesGallery = ({ items }) => {
        return (
            <div>
            <ul className={s.list}>
                {items.map(({ id, webformatURL, tags }) => (
                    <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags}/>
                ))}
            </ul>
        </div> 
        )
}
export default ImagesGallery;