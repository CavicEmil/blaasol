import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo_26.png';
import profileIcon from '/lofiprofile.png';
import Burger from './Burger';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        console.log('isscrolled is', isScrolled);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
 /*   */

    return (
        <header className="w-full h-[60px] min-h-[60px] flex items-center justify-between p-8 top-4 fixed bg-transparent z-[9999] gap-x-[1vw] transition-colors duration-400
           ${isScrolled ? 'bg-main-ight sticky' : 'bg-transparent fixed'}
        ">  
            <Burger />

            <Link to="/" className="flex-1 flex justify-center">
                <img
                src={logo}
                alt="BLÅ SOL Festival Logo"
                className="h-auto max-h-[60px] w-auto"
                />
            </Link>

            <Link to="/auth" className="flex items-center justify-center">
                <img
                src={profileIcon}
                alt="Profile"
                className="h-10 w-auto"
                />
            </Link>
        </header>
    );
}