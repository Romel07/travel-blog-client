import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='Register'>
            <span className="RegisterTitle">Register</span>
            <form className="RegisterForm">
                <label>Name</label>
                <input className='RegisterInput' type="text" name="" id="" />
                <label>Email</label>
                <input className='RegisterInput' type="email" name="" id="" />
                <label>Password</label>
                <input className='RegisterInput' type="password" name="" id="" />
                <button className="RegisterButton">Register</button>
            </form>
            <button className="loginButton">
                <Link className='link' to='/login'>Login</Link>
            </button>
        </div>
    );
};

export default Register;