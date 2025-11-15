import React from 'react';
import '../css/Protocols.css';
import HuddleLogo from '../assets/huddle01.svg';
import CantonLogo from '../assets/canton.svg';

function Protocols() {
    const protocols = [
        { name: 'Huddle01', img: HuddleLogo, alt: 'Huddle01 logo' },
        { name: 'Canton', img: CantonLogo, alt: 'Canton logo' }
    ];

    return (
        <div className="Protocols">
            <h2 className="Protocols-title">Supported Protocols</h2>

            <p className="Protocols-subtext">
                we are open to supporting any network if our node operation services are required. Please (
                <a href="#contact" className="Protocols-contact-link">contact us</a>)
            </p>

            <div className="Protocols-list">
                {protocols.map((p) => (
                    <div key={p.name} className="Protocol">
                        <img src={p.img} alt={p.alt} className="Protocol-logo" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Protocols;
