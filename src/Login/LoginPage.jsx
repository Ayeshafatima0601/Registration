import React, { useState } from 'react';
import './LoginPage.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = ({ username, setUsername, password, setPassword }) => {
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate fields
        if (!username) {
            setUsernameError('Username is required');
            return;
        }
        if (!password) {
            setPasswordError('Password is required');
            return;
        }

        setUsernameError('');
        setPasswordError('');

        const formData = {
            username,
            password
        };
        console.log(formData);

        setUsername('');
        setPassword('');
    };

    return (
        <div className="wrapper">
            <div className='text-xl'>
                <div className="form-box login">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-4xl ">Emvive</h2>
                        <h3>Login In</h3>
                        <div className="input-box">
                            <FaUser className="icon" />
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                    setUsernameError('');
                                }}
                            />
                            {usernameError && <span>{usernameError}</span>}
                        </div>
                        <div className="input-box">
                            <FaLock className="icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordError('');
                                }}
                            />
                            {passwordError && <span>{passwordError}</span>}
                        </div>
                        <button type="submit" className='text-2xl'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
