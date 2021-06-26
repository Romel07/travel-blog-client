import React from 'react';
import './Post.css'

const Post = () => {
    return (
        <div className='post'>
            <img src="https://source.unsplash.com/UmV2wr-Vbq8" alt="" className="postImg" />
            <div className="postInfo">
            <div className="postCatagories">
                <span className="postCatagories">Music</span>
                <span className="postCatagories">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
            <p className="postDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione delectus officia debitis cupiditate reprehenderit aut. Labore officiis atque saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione delectus officia debitis cupiditate reprehenderit aut. Labore officiis atque saepe!</p>
            </div>
        </div>

    );
};

export default Post;