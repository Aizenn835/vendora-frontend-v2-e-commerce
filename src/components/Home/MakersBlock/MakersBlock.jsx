import MakersBlockImage from '../MakersBlockImage/MakersBlockImage.jsx'
import MakersLeft from '../MakersBlockRightContent/MakersLeft.jsx';
import './MakersBlock.css'

export default function MakersBlock(){
    return(
        <div className="makers-block-container">
            <MakersBlockImage />
            <MakersLeft />
        </div>
    );
}