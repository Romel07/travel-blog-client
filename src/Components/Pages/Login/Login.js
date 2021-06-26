import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input className='loginInput' type="email" name="" id="" />
                <label>Password</label>
                <input className='loginInput' type="password" name="" id="" />
                <button className="loginButton">LogIn</button>
            </form>
            <button className="registerButton">
                <Link className='link' to='/register'>Register</Link>
            </button>
        </div>
    );
};

export default Login;