import LeftCardLoginModalText from '../LeftCardLoginModalText/LeftCardLoginModalText'
import OAuth from '../OAuth/OAuth.jsx'
import LeftCardHero from '../LeftCardHero/LeftCardHero.jsx'
import LeftCardCircle from '../LeftCardCircle/LeftCardCircle'
import './LeftCard.css'

export default function LeftCard(){
    return(
        <div className="left-card-container">
            <h2 className="left-card-header">VENDORA</h2>
            <LeftCardLoginModalText />
            <LeftCardCircle />
            <LeftCardHero />
            <footer className="ratings">
                <div className="left-card-rating-container">
                    <span className='rate-text'>2.4k+</span>
                    <p className='rate-text'>Reviews</p>
                </div>
                <div className="left-card-rating-container">
                    <span className='rate-text'> 4.8k </span>
                    <p className='rate-text'>Rating</p>
                </div>
                <div className="left-card-rating-container">
                    <span className='rate-text'>120+</span>
                    <p className='rate-text'>Products</p>
                </div>
            </footer>
        </div>
    )
}