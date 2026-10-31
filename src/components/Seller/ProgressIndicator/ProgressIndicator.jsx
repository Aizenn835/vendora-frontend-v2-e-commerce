import './ProgressIndicator.css'

export default function ProgressIndicator({progressCount , text}){
    return(
        <div className="progress-indicator-container">
            <span className='progress-indicator-count'>{progressCount}</span>
            <p className='progress-indicator-text'>{text}</p>
        </div>
    );
}