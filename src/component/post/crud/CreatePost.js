import React from 'react';

const CreatePost = () => {
    return (
        <div className="container">
            <h1>Create Post</h1>
            <input placeholder="Nhập name"/><br/>
            <input placeholder="Nhập title"/><br/>
            <input placeholder="Nhập img"/><br/>
            <input placeholder="Nhập content"/><br/>
            <button>Create</button>
        </div>
    );
};

export default CreatePost;
