import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modalmovie from "../ModalMovie/ModalMovie"
import { useState } from 'react';

let Movie = ({ movies }) => {
    const [chosenMovie, setChosenMovie] = useState()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handelChosenRecipe(movie) {
        setChosenMovie(movie);
        handleShow();
    };
    return (
        <>
            {
                movies.map(movie => {
                    return (

                        <div key={movie.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={movie.image} />
                                <Card.Body>
                                    <Card.Title> Title: {movie.title}</Card.Title>
                                    <Card.Text>
                                        {movie.overview}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handelChosenRecipe(movie)}>Add to Fav</Button>
                                </Card.Body>
                            </Card>


                        </div>
                    )
                })

            }
            {chosenMovie && <Modalmovie movie={chosenMovie} show={show} handleClose={handleClose} />}
        </>
    )
};

export default Movie;