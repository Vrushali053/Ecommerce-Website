
import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Logging in as: ${username}`);
    };

    return (
      <div className='container'>
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label>Username</label>
                    <input
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                         required
                    />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                      required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
};

export default Login;
