import React from 'react';

import s from './ImageGallery.module.css'


const ImagesGallery = ({ items }) => {
        return (
            <div>
            <ul className={s.list}>
                {items.map(item => (
                    <li key={item.id} className={s.item}>
                        <img 
                        src={item.webformatURL} 
                        alt={item.tags}
                        className={s.image}
                        />
                        </li>
                ))}
            </ul>
        </div> 
        )
}
export default ImagesGallery;