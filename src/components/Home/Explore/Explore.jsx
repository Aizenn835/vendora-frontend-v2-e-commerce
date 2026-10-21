import Wear from '../../../assets/products/wear.webp'
import Accessories from '../../../assets/products/accessories.webp'
import HomeProduct from '../../../assets/products/home-product.webp'
import { IconArrowNarrowRight } from '@tabler/icons-react';
import './Explore.css'

export default function Explore(){
    return(
        <div className='home-product-container'>
            <div className="explore-header">
                <p>Explore by mood</p>
                <div className="head-view-container">
                    <h1>Curated for living</h1>
                    <div className="view-all-container">
                        <span>View All</span>
                        <IconArrowNarrowRight stroke={1.75} size={20}/>
                    </div>
                </div>
                <div className="explore-image-container">
                    <div className="inner-image-container">
                        <img src={Wear} alt="Everyday wear image" className='image-explore'/>
                    </div>
                    <div className="inner-image-container">
                        <img src={Accessories} alt="Accessories wear image" className='image-explore'/>
                    </div>
                    <div className="inner-image-container">
                        <img src={HomeProduct} alt="Home product image" className='image-explore'/>
                    </div>
                </div>
            </div>
        </div>
    );
}