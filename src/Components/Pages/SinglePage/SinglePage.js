import React from 'react';
import './SinglePage.css'
import SideBar from '../../SideBar/SideBar'
import SinglePost from '../../SinglePost/SinglePost'

const SinglePage = () => {
    return (
        <div className='singlePage'>
            <SinglePost></SinglePost>
            <SideBar></SideBar>
        </div>
    );
};

export default SinglePage;