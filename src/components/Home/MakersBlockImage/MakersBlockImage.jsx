import ProductImage from '../../../assets/products/different-product.jpg'
import './MakersBlockImage.css'

export default function MakersBlockImage(){
    return(
        <div className="makers-image-container">
            <img src={ProductImage} alt="Product image from different makers" className='product-image-makers'/>
            <div className="makers-image-text-container">
                <span className='makers-image-text'>100%</span>
                <p className='makers-image-supporting-text'>Mindfully sourced</p>
            </div>
        </div>
    );
}