import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css'

const TopBar = () => {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItems"><Link className='link' to='/'>HOME</Link></li>
                    <li className="topListItems"><Link className='link' to='/'>ABOUT</Link></li>
                    <li className="topListItems"><Link className='link' to='/'>CONTACT</Link></li>
                    <li className="topListItems"><Link className='link' to='/write'>WRITE</Link></li>
                    <li className="topListItems">{user && "LOGOUT"}</li>
                </ul>
            </div>
            
            <div className="topRight">
            {
                user? (<img className='topImage' src="https://jgi.doe.gov/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg" alt="" />) : (
                <ul className="topList">
                <li className="topListItems"><Link className='link' to='/login'>LOGIN</Link></li> 
                <li className="topListItems"><Link className='link' to='/register'>REGISTER</Link></li> 
                </ul>)
            }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
};

export default TopBar;