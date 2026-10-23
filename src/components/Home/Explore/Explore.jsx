import Wear from '../../../assets/products/wear.webp'
import Accessories from '../../../assets/products/accessories.webp'
import HomeProduct from '../../../assets/products/home-product.webp'
import { IconArrowNarrowRight } from '@tabler/icons-react';
import ExploreImage from '../ExploreImage/ExploreImage';
import './Explore.css'

export default function Explore(){
    return(
        <div className='home-product-container'>
            <div className="explore-header">
                <p className='explore-header-text'>Explore by mood</p>
                <div className="head-view-container">
                    <h1>Curated for living</h1>
                    <div className="view-all-container">
                        <span>View All</span>
                        <IconArrowNarrowRight stroke={1.75} size={20}/>
                    </div>
                </div>
                <div className="explore-image-container">
                    <ExploreImage image={Wear} alt={"Everyday wear image"} text={"The everyday fit"} supportingText={"24 Pieces"}/>
                    <ExploreImage  image={Accessories} alt={"Accessories wear image"} text={"Quiet Accessories"} supportingText={"18 Pieces"}/>
                    <ExploreImage  image={HomeProduct} alt={"Home product image"} text={"Object for home"} supportingText={"16 Pieces"}/>
                </div>
            </div>
        </div>
    );
}