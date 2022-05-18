import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ModalMovie from "../ModalMovie/ModalMovie.jsx";
import "./Movie.css";

export default function Movie({ data }) {
    const [show, setShow] = useState(false);
    const [seeMore,setSeeMore]=useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function handleLessMore(){
        setSeeMore(!seeMore);
    }
    return (
        <>
        <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Movie : {data.title}</Card.Title>
                    <Card.Text>Release date : {data.release_date}</Card.Text>
                    <Card.Text>
                    {seeMore ? `Overview : ${data.overview}`:`Overview : ${data.overview.slice(0,100)} ...`}
                    <br/>
                    <button onClick={handleLessMore}>{seeMore?"See less": "See more"}</button></Card.Text>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${data.poster_path}`}/>
                    <Button variant="danger" onClick={handleShow}>Add to the favorite list</Button>
                </Card.Body>
            </Card>
            <ModalMovie data={data} show={show} handleClose={handleClose}/>
        </>
            
    )
} 