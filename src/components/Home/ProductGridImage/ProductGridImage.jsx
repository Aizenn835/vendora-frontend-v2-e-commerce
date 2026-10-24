import {IconHeart , IconHeartFilled , IconExternalLink } from '@tabler/icons-react';
import { useState } from 'react';
import './ProductGridImage.css'

export default function ProductGridImage({image , leftUpperText , name , price ,supportingText}){
    const [isFavorite , setIsFavorite] = useState(false);

    return(
        <div className="product-grid-image-container">
            <div className="product-grid-image-inner-container">
                <img src={image} className="product-grid-image"/>
                <div className="left-upper-text-product-grid">
                    <span className='left-upper-text'>{leftUpperText}</span>
                </div>
                <button className='favorite-btn' onClick={() => setIsFavorite(!isFavorite)}>
                    {isFavorite ?  
                    <IconHeartFilled size={18} className='fav-filled'/>: 
                    <IconHeart stroke={1.95} size={18} className='fav-empty'/>}
                </button>
                <button className="add-to-cart">
                    <IconExternalLink stroke={2} size={15}/>
                    <p className='add-to-cart-text'>View Product</p>
                </button>
            </div>
            <footer className="product-grid-footer">
                <div className="product-grid-name-price-container">
                    <p className='product-grid-name-text'>{name}</p>
                    <span className='product-grid-price-text'>{price}</span>
                </div>
                <span className='product-grid-supporting-text'>{supportingText}</span>
            </footer>
        </div>
    );
}