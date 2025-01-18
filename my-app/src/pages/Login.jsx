import React from 'react';
import '../css/Login.css';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

function Login() {
    return (
        <div className="Login">
            <section className="Login-section">
                <LoginForm />
            </section>
            <Footer className="Footer-absolute" />
        </div>
    );
}

export default Login;