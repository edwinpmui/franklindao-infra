import React, { useRef, useState } from 'react';
import '../css/Footer.css';

function Footer({ className }) {
    const firstInputRef = useRef(null);

    // Configuration: replace with your Google Form id and entry IDs.
    // 1) Find your form's ID in the URL: "https://docs.google.com/forms/d/e/FORM_ID/viewform"
    // 2) Inspect each field to find its entry.<number> name (or generate a prefill link in Google Forms
    //    and look for entry.<number> keys). Replace the placeholders below.
    const GOOGLE_FORM_ID = '1FAIpQLSeUkxhYE7MWUsI-aWyEUP0x3PyxY4SLjKxN89oZvC54QT3y3A';
    const GOOGLE_FORM_ACTION = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;
    const GOOGLE_FORM_ENTRY = {
        name: 'entry.1689608842',
        organization: 'entry.1400273831',
        email: 'entry.306680748',
        phone: 'entry.774024808',
        message: 'entry.331379053'
    };
    const [status, setStatus] = useState(null);

    function submitToGoogleForm(data) {
        // Build a hidden form and post to the Google Forms `formResponse` endpoint.
        // This avoids CORS issues because it uses a normal form POST. The response
        // will open in a new tab so the user can see the Google Forms confirmation.
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = GOOGLE_FORM_ACTION;
        form.target = '_blank';
        form.style.display = 'none';

        Object.keys(GOOGLE_FORM_ENTRY).forEach((key) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = GOOGLE_FORM_ENTRY[key];
            input.value = data[key] || '';
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    }

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

        // If GOOGLE_FORM_ID is not set, just log the data and keep the inline behavior.
        if (!GOOGLE_FORM_ID || GOOGLE_FORM_ID === 'REPLACE_WITH_FORM_ID') {
            console.warn('Google Form ID not configured. Replace GOOGLE_FORM_ID and GOOGLE_FORM_ENTRY values.');
            console.log('Contact form data:', data);
            setStatus('local');
            form.reset();
            if (firstInputRef.current) firstInputRef.current.focus();
            return;
        }

        try {
            submitToGoogleForm(data);
            setStatus('sent');
            form.reset();
            if (firstInputRef.current) firstInputRef.current.focus();
        } catch (err) {
            console.error('Failed to submit to Google Forms', err);
            setStatus('error');
        }
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