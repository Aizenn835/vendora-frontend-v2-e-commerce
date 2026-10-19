import CollectionImage from '../../../assets/home-image/hero-img.webp'
import './HeroImage.css'

export default function HeroImage(){
    return(
        <div className="hero-img-container">
            <img src={CollectionImage} alt="A women with a tote bag" className='hero-image'/>
        </div>
    );
}