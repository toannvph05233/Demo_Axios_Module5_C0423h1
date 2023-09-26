import React from 'react';
import HeaderComponent from "./page/HeaderComponent";
import BodyComponent from "./page/BodyComponent";
import FooterComponent from "./page/FooterComponent";
import CreatePost from "./crud/CreatePost";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import EditPost from "./crud/EditPost";
import Cart from "./Cart";


const Post = () => {
    return (
        <div>
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path="/" element={<BodyComponent/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/create" element={<CreatePost/>}/>
                    <Route path="/edit/:id" element={<EditPost/>}/>
                </Routes>
                <FooterComponent/>
            </BrowserRouter>
        </div>
    );
};

export default Post;
