import React from 'react';
import './Settings.css'
import SideBar from '../../SideBar/SideBar'

const Settings = () => {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingForm">
                    <label>Profile Pictue</label>
                    <div className="profilePicture">
                        <img src="https://source.unsplash.com/WLUHO9A_xik" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingProfileIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" name="" id="fileInput" style={{ display: 'none' }} />
                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder='Romel' name="" id="" />
                    <label>Email</label>
                    <input type="email" placeholder='romel@xyz.com' name="" id="" />
                    <label>Password</label>
                    <input type="password" name="" id="" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <SideBar></SideBar>
        </div>
    );
};

export default Settings;