import MovieList from "../MovieList/MovieList.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import "../Home/Home.css";
import { useState, useEffect } from "react";

export default function Home() {
    const [movie, setMovie] = useState([]);
    async function getData() {
        //https://movies2000.herokuapp.com/
        let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
        let data = await response.json();
        setMovie(data);
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <>
            <Navbar />
            {movie && <MovieList data={movie} />}
            <Footer />
        </>

    )
}