import { IconCheck } from '@tabler/icons-react';
import './ProgressIndicator.css'

export default function ProgressIndicator({progressCount , text , progress}){
    return(
        <div className="progress-indicator-container">
            <span className={`progress-indicator-count ${progress}`}>{progress === 'completed-progress' ? <IconCheck stroke={2} size={15}/> : progressCount}</span>
            <p className={`progress-indicator-text ${progress}`}>{text}</p>
        </div>
    );
}