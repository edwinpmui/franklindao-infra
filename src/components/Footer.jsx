import React, { useRef } from 'react';
import '../css/Footer.css';

function Footer({ className }) {
    const firstInputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            name: form.name.value,
            organization: form.organization.value,
            email: form.email.value,
            phone: form.phone.value,
            message: form.message.value
        };
        // For now, just log the data. Integrate backend as needed.
        console.log('Contact form submitted:', data);
        // Optionally clear the form or show confirmation here
        form.reset();
        if (firstInputRef.current) firstInputRef.current.focus();
    }

    return (
        <footer id="contact" className={`Footer ${className}`}>
            <div className="Footer-inner">
                <h2 className="Footer-heading">Contact Us</h2>

                <div className="Footer-contact-form">
                    <form className="ContactForm" onSubmit={handleSubmit}>
                        <label className="ContactLabel">Name
                            <input ref={firstInputRef} name="name" type="text" required className="ContactInput" />
                        </label>

                        <label className="ContactLabel">Company / Organization
                            <input name="organization" type="text" className="ContactInput" />
                        </label>

                        <label className="ContactLabel">E-mail
                            <input name="email" type="email" required className="ContactInput" />
                        </label>

                        <label className="ContactLabel">Contact Number
                            <input name="phone" type="tel" className="ContactInput" />
                        </label>

                        <label className="ContactLabel">Message
                            <textarea name="message" rows={5} className="ContactTextarea" />
                        </label>

                        <div className="ContactForm-actions">
                            <button type="reset" className="ContactBtn ContactBtn--ghost">Clear</button>
                            <button type="submit" className="ContactBtn ContactBtn--primary">Send</button>
                        </div>
                    </form>
                </div>
                <div className="Footer-links" aria-label="FranklinDAO social links">
                    <a className="Footer-link" href="https://www.linkedin.com/company/franklindao/" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png" alt="FranklinDAO on LinkedIn" className="Footer-link-logo" />
                        <span className="Footer-link-label">LinkedIn</span>
                    </a>

                    <a className="Footer-link" href="https://x.com/franklin_dao?lang=en" target="_blank" rel="noopener noreferrer">
                        <img src="/x.png" alt="FranklinDAO on Twitter / X" className="Footer-link-logo" />
                        <span className="Footer-link-label">Twitter / X</span>
                    </a>

                    {/* <a className="Footer-link" href="https://nreach.io/web3-database-companies/franklindao/" target="_blank" rel="noopener noreferrer">
                            <img src="/nreach.png" alt="FranklinDAO on nReach" className="Footer-link-logo" />
                            <span className="Footer-link-label">nReach</span>
                        </a> */}
                </div>

                <p className="Footer-copyright">&copy; {new Date().getFullYear()} FranklinDAO. All rights reserved.</p>

                
            </div>
        </footer>
    );
}

export default Footer;