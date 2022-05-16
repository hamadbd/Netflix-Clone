import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
//import Favlist from "./components/favlist/Favlist";
//import Modalmovie from "./components/modalmovie/Modalmovie";
//import Movie from "./components/movie/Movie";
//import Movielist from "./components/movielist/Movielist";
//import Navbar from "./components/navbar/Navbar";

export default function App() {
    console.log("ERROR");
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            

        </Routes>
    );
}