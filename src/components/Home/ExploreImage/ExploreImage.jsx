import ArrowLeft from '../../shared/ArrowLeft/ArrowLeft';
import './ExploreImage.css'

export default function ExploreImage({image , alt , text , supportingText}){
    return(
        <div className="inner-image-container">
            <img src={image} alt={alt} className='image-explore'/>
            <div className="lower-footer">
                <div className="inner-lower-footer-container">
                    <div className="inner-image-text-container">
                        <p className='inner-image-p'>{text}</p>
                        <span className='inner-image-span'>{supportingText}</span>
                    </div>
                    <ArrowLeft subClass={'explore-image-arrow-left'}/>
                </div>
            </div>
        </div>
    );
}