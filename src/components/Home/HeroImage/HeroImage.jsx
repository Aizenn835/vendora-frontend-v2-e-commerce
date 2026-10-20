import CollectionImage from '../../../assets/home-image/hero-img.webp'
import './HeroImage.css'

export default function HeroImage(){
    return(
        <div className="hero-img-container">
            <img src={CollectionImage} alt="A women with a tote bag" className='hero-image'/>
            <div className="new-arrival-collection-img">
                <div className="collection-img-name">
                    <span>New product</span>
                    <p>Luna Mini Bag</p>
                </div>
                <div className="collection-img-price">
                    <span>₱2000</span>
                </div>
            </div>
        </div>
    );
}