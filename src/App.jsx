import React, { useState } from 'react';
import LoginPage from './Login/LoginPage';
// import Header from './Header/header';
import './App.css'; 

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="App">
         {/* <Header /> */}
            <LoginPage
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default App;
