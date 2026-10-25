import { IconArrowNarrowRight } from '@tabler/icons-react';
import './MakersLeft.css'

export default function MakersLeft(){
    return(
        <div className="makers-left-container">
            <p className="sub-header-makers-left">HOW VENDORA WORKS</p>
            <h1 className='makers-left-header'>One cart, many shops.</h1>
            <p className='makers-left-info-text'>Vendora brings independent sellers together in one marketplace. Add items from different shops to a single cart and check out once. Each seller ships their own part of your order.</p>
            <button className="makets-left-btn">
                <span>START SHOPPING</span>
                <IconArrowNarrowRight stroke={1.75} size={20}/>
            </button>
        </div>
    );
}