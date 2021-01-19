import React from 'react';
import s from './ImageGalleryItem.module.css';


const ImageGalleryItem = (item) => {
    return (<li key={item.id} className={s.item}>
    <img 
    src={item.webformatURL} 
    alt={item.tags}
    className={s.image}
    />
    </li>
    )
}

export default ImageGalleryItem;