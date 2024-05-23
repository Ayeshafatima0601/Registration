import React from 'react';
import './LoginPage.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Container } from 'postcss';

const LoginPage = ({ username, setUsername, password, setPassword, handleSubmit }) => {

    return (
        <div className="wrapper">
            <div className='text-xl'>
            {/* <h1 className='image'>
                <img src='https://www.creativefabrica.com/wp-content/uploads/2021/10/11/EE-E-logo-design-vector-Graphics-18624244-1-1-580x386.jpg' />
            </h1> */}
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
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <FaLock className="icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className='text-2xl'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
