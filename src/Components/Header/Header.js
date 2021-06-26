import './Header.css'
import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <div className="headerTitleSmall">Story of the World</div>
                <div className="headerTitleLarge">Travel Blog</div>
            </div>
            <img src="https://source.unsplash.com/Yui5vfKHuzs" alt="" className="headerImg" />
           
        </div>
    );
};

export default Header;