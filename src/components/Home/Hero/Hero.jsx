import Explore from '../Explore/Explore.jsx'
import Collection from '../Collection/Collection.jsx'
import HeroImage from '../HeroImage/HeroImage.jsx'
import ProductGrid from '../ProductGrid/ProductGrid.jsx'
import MakersBlock from '../MakersBlock/MakersBlock.jsx'
import Footer from '../Footer/Footer.jsx'
import GetToKnowMore from '../GetToKnowMore/GetToKnowMore.jsx'
import './Hero.css'

export default function Hero(){
    return(
        <div className="hero-home-container">
            <div className="inner-hero-home-container">
                <div className="welcome-container">
                    <Collection />
                    <HeroImage />
                </div>
                <Explore />
            </div>
            <ProductGrid />
            <MakersBlock />
            <GetToKnowMore />
            <Footer />
        </div>
    );
}