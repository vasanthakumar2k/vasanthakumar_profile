import React from 'react';
import './Drawer.css';

const Drawer = ({ isOpen, onClose }) => {
    return (
        <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className={`drawer-content ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="drawer-header">
                    <div className="close-icon" onClick={onClose}>
                        <span>&times;</span>
                    </div>
                    <h2 className="drawer-title">VASANTHAKUMAR A</h2>
                    <p className="drawer-subtitle">React Native Developer</p>
                </div>

                <div className="drawer-links">
                    <a href="#about" onClick={onClose} className="drawer-item">About</a>
                    <a href="#experience" onClick={onClose} className="drawer-item">Experience</a>
                    <a href="#skills" onClick={onClose} className="drawer-item">Skills</a>
                    <a href="#education" onClick={onClose} className="drawer-item">Education</a>
                </div>

                <div className="drawer-footer">
                    <p>Coimbatore | +91 8925208494</p>
                    <p>2002vasanthakumar@gmail.com</p>
                    <div className="social-links">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
