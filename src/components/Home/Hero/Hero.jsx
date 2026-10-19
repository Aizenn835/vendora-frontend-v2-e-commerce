import Collection from '../Collection/Collection.jsx'
import HeroImage from '../HeroImage/HeroImage.jsx'
import './Hero.css'

export default function Hero(){
    return(
        <div className="hero-home-container">
            <div className="inner-hero-home-container">
                <Collection />
                <HeroImage />
            </div>
        </div>
    );
}