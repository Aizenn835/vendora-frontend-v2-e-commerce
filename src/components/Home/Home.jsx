import HomeHeader from './Header/HomeHeader.jsx'
import SideBar from './SideBar/SideBar.jsx'
import Hero from './Hero/Hero.jsx'
import { useState } from 'react'

export default function Home(){
    const [isNavOpen , setIsNavOpen] = useState(false);

    return(
        <>
            <HomeHeader onMenuClick={() => setIsNavOpen(true)}/>
            <SideBar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)}/>
            <Hero />    
        </>
    );
}