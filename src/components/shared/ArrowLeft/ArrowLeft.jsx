import { IconArrowNarrowRight } from '@tabler/icons-react';
import './ArrowLeft.css'

export default function ArrowLeft({subClass}){
    return(
        <div className={`arrow-left-container ${subClass}`}>
            <IconArrowNarrowRight stroke={1.75} size={20}/>
        </div>
    );
}