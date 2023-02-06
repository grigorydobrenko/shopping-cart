import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "../features/Home/Home";
import NotFound from "../common/components/NotFound";
import NavBar from "../features/NavBar/NavBar";

const routes = {
    HOME: '/',
    NOT_FOUND: '/*'
}

function App() {

    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path={routes.HOME} element={<Home/>}/>
                <Route path={routes.NOT_FOUND} element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

export default App;
