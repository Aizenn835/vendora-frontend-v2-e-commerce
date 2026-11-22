import HomeHeader from './Header/HomeHeader.jsx'
import SideBar from './SideBar/SideBar.jsx'
import Hero from './Hero/Hero.jsx'
import SettingsModal from './SettingsModal/SettingsModal.jsx'
import { useState } from 'react'

export default function Home(){
    const [isNavOpen , setIsNavOpen] = useState(false);
    const [isSettingsOpen , setIsSettingsOpen] = useState(false);

    const handleNavOpen = () => {
        setIsNavOpen(true);
        setIsSettingsOpen(false);
    }

    return(
        <>
            <HomeHeader onMenuClick={handleNavOpen} onSettingsClick={() => setIsSettingsOpen(!isSettingsOpen)}/>
            <SideBar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)}/>
            <SettingsModal isOpen={isSettingsOpen} />
            <Hero />    
        </>
    );
}