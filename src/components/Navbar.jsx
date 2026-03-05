import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onMenuClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="nav-brand">Vasanthakumar A</div>

                <div className="nav-links desktop-only">
                    <a href="#about" className="nav-item">Home</a>
                    <a href="#experience" className="nav-item">Experience</a>
                    <a href="#skills" className="nav-item">Skills</a>
                    <a href="#education" className="nav-item">Contact</a>
                </div>

                <div className="menu-icon" onClick={onMenuClick}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
