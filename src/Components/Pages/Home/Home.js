import './Home.css'
import React from 'react';
import Header from '../../Header/Header'
import Posts from '../../Posts/Posts'
import SideBar from '../../SideBar/SideBar'

const Home = () => {
    return (
        <>
            <Header></Header>
            <div className='home'>
                <Posts></Posts>
                <SideBar></SideBar>
            </div>
        </>
    );
};

export default Home;