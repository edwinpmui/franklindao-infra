import React from 'react';
import '../css/Footer.css';

function Footer({ className }) {
    return (
        <footer id="contact" className={`Footer ${className}`}>
                <p>&copy; {new Date().getFullYear()} FranklinDAO. All rights reserved.</p>
            </footer>
    );
}

export default Footer;