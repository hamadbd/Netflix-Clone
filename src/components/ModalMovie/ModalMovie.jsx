import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import swal from 'sweetalert';


export default function ModalMonie({ data, show, handleClose}) {

    function handelFormSubmit(e){
        e.preventDefault();
        let comment = e.target.comment.value;
        addToFavList(data,comment)
      }
      async function addToFavList(data, comment){
        const url = `${process.env.REACT_APP_SERVER}/addMovie`;
        const movie = {
          id : data.id,
          release_date : data.release_date,
          title : data.title,
          poster_path : data.poster_path, 
          overview : data.overview, 
          my_comment : comment
        }
        await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(movie)
        });
        swal("Favorite Movie", "You added a new Movie", "success");
        handleClose();
      }

    return (
        <>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><Image variant="top" src={`https://image.tmdb.org/t/p/original${data.poster_path}`} style={{ width: '18rem', alignItems: 'center', margin: 'auto', display: 'block' }} /></Modal.Body>
                <Modal.Body>
                    <Form onSubmit={handelFormSubmit}>
                        <Form.Group style={{ width: '18rem', alignItems: 'center', margin: 'auto', display: 'block' }}>
                            <Form.Label>Your Comment :</Form.Label>
                            <Form.Control name="comment" type="Comment" placeholder="Your Comment" />
                            <Button variant="success" type="submit">Add Your Comment</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}