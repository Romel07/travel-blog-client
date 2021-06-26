import React from 'react';
import './SideBar.css'

const SideBar = () => {
    return (
        <div className='sideBar'>
            <div className="sideBarItem">
                <span className="sideBarTitle">About Me</span>
                <img className="sideBarImg" src="https://source.unsplash.com/juHayWuaaoQ" alt="" />
                <p className="sideBarParagraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias doloremque sit repellendus quasi atque recusandae sunt provident tempore ad beatae qui magnam at, architecto obcaecati minus natus praesentium veniam nulla.</p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">Catagories</span>
                <ul className="sideBarLists">
                    <li className="sideBarListItems">Life</li>
                    <li className="sideBarListItems">Music</li>
                    <li className="sideBarListItems">Style</li>
                    <li className="sideBarListItems">Sports</li>
                    <li className="sideBarListItems">Travel</li>
                    <li className="sideBarListItems">Fun</li>
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">Follow US</span>
                <div className="sideBarSocial">
                    <i className="sideBarIcon fab fa-facebook-square"></i>
                    <i className="sideBarIcon fab fa-twitter-square"></i>
                    <i className="sideBarIcon fab fa-pinterest-square"></i>
                    <i className="sideBarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    );
};

export default SideBar;