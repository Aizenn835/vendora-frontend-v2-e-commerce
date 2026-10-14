import LeftCardLoginModalText from '../LeftCardLoginModalText/LeftCardLoginModalText'
import './LeftCard.css'

export default function LeftCard(){
    return(
        <div className="left-card-container">
            <h2 className="left-card-header">VENDORA</h2>
            <LeftCardLoginModalText />
        </div>
    )
}