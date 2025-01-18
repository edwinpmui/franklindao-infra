import React, { useState } from 'react';
import '../css/Login.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <form className="Login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="Login-field">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="Login-field">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="Login-button">Login</button>
        </form>
    );
}

export default LoginForm;