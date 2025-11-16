import React from 'react';
import '../css/Footer.css';

function Footer({ className }) {
    return (
        <footer id="contact" className={`Footer ${className}`}>
                <div className="Footer-inner">
                        <h2 className="Footer-heading">Contact Us</h2>
                        <div className="Footer-links" aria-label="FranklinDAO social links">
                        <a className="Footer-link" href="https://www.linkedin.com/company/franklindao/" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedin.png" alt="FranklinDAO on LinkedIn" className="Footer-link-logo" />
                            <span className="Footer-link-label">LinkedIn</span>
                        </a>

                        <a className="Footer-link" href="https://x.com/franklin_dao?lang=en" target="_blank" rel="noopener noreferrer">
                            <img src="/x.png" alt="FranklinDAO on Twitter / X" className="Footer-link-logo" />
                            <span className="Footer-link-label">Twitter / X</span>
                        </a>

                        <a className="Footer-link" href="https://nreach.io/web3-database-companies/franklindao/" target="_blank" rel="noopener noreferrer">
                            <img src="/nreach.png" alt="FranklinDAO on nReach" className="Footer-link-logo" />
                            <span className="Footer-link-label">nReach</span>
                        </a>
                    </div>

                    <p className="Footer-copyright">&copy; {new Date().getFullYear()} FranklinDAO. All rights reserved.</p>
                </div>
            </footer>
    );
}

export default Footer;