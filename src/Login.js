import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eyeimg from "./assets/password-eye-icon.png";
import "./index.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const [FormError, setFormError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!email || !password) {
            setFormError("All fields are required.");
            return;
        }

        // Retrieve user data from local storage
        const userData = JSON.parse(localStorage.getItem("user"));

        if (userData) {
            // Check if email and password match
            if (userData.email === email && userData.password === password) {
                navigate('/landing');
            } else {
                setLoginError("Invalid email or password.");
            }
        }  
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='container bg-light p-5 rounded' style={{ width: '400px' }}>
            <h1>Login Form</h1>  
            <p className='text-danger'>{FormError}</p>
            <div>
                <label>Email:</label><br />
                <input 
                className='form-control'
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter your email" 
                />
            </div>
            <div>
                <label>Password:</label><br />
                <div className='logeye'>
                
                    <input 
                    className='form-control'
                        type={showPassword ? "text" : "password"} 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter your password" 
                         
                    />
                 
                </div>
            </div>
            {loginError ? <p className="text-danger">{loginError}</p> : <p></p>}

            <button className="btn btn-dark" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
