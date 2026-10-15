import SecondImage from '../../../assets/login-image-one.webp'
import FirstImage from '../../../assets/login-image-two.webp'
import ThirdImage from '../../../assets/login-image-three.webp'
import './LeftCardHero.css'

export default function LeftCardHero(){
    return(
        <div className="left-card-hero-container">
            <div className="left-card-img-container">
                <img src={FirstImage} className="img" />
            </div>
            <div className="left-card-img-container">
                <img src={SecondImage} className="img" />
            </div>
            <div className="left-card-img-container">
                <img src={ThirdImage} className="img" />
            </div>
        </div>
    );
}