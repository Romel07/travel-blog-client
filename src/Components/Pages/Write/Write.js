import React from 'react';
import './Write.css'

const Write = () => {
    return (
        <div className='write'>
            <img src="https://source.unsplash.com/WLUHO9A_xik" alt="" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon far fa-plus-square"></i>
                    </label>
                    <input type="file" style={{display:'none'}} name="" id="fileInput" />
                    <input className='WriteInput' autoFocus={true} type="text" name="" placeholder='Title'  id="" />
                </div>
                <div className="writeFormGroup">
                    <textarea className='WriteInput WriteText' type='text' placeholder='Tell your story... ...' name="" id=""></textarea>
                    
                </div>
                <button type="submit" className='writeSubmit'>Publish</button>
            </form>
        </div>
    );
};

export default Write;