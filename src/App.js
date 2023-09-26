import './App.css';
import React, {useState} from "react";
import LifecycleDemo from "./component/LifecycleDemo";
import ProductManager from "./component/product/ProductManager";
import Student from "./component/student/Student";
import ProductHook from "./component/hook/ProductHook";
import Dmeo from "./component/hook/Dmeo";
import Post from "./component/post/Post";
import Animal from "./component/props/Animal";
import {Provider} from "react-redux";
import store from "./component/redux/store";

function App() {
    return (
        <Provider store={store}>
            <Post/>
        </Provider>
    );
}

export default App;
