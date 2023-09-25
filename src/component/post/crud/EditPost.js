import React from 'react';
import { useParams } from "react-router-dom";

const EditPost = () => {
    const {id} = useParams();

    return (
        <div className="container">
            <h1>Edit Post</h1>
            <input value={id} placeholder="Nhập name"/><br/>
            <input placeholder="Nhập title"/><br/>
            <input placeholder="Nhập img"/><br/>
            <input placeholder="Nhập content"/><br/>
            <button>Create</button>
        </div>
    );
};

export default EditPost;
