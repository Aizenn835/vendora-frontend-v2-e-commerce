import ArrowLeft from '../../shared/ArrowLeft/ArrowLeft';
import './GetToKnowMore.css'

export default function GetToKnowMore(){
    return(
        <div className="get-to-know-more-container">
            <div className="get-to-know-inner-container">
                <p className='get-to-know-sub-header'>Notes from the Vendora</p>
                <h1 className='get-to-know-header'>A slower kind of inbox.</h1>
                <p className='get-to-know-text-info'>New collections, seller stories, and useful things—sent thoughtfully, never too often.</p>
                <form className="get-to-know-email-container">
                    <input type="text" placeholder='Your email address' required/>
                    <ArrowLeft subClass={'arrow-left-get-to-know'}/>
                </form>
            </div>
        </div>
    );
}