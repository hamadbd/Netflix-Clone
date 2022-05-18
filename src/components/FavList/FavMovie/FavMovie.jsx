import { Card, Button } from "react-bootstrap";
import swal from 'sweetalert';
export default function FavMovie({ movie, getFavMovie }) {
  function handelDelete(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        const url = `${process.env.REACT_APP_SERVER}/DELETE/${id}`;
        fetch(url, {method: "DELETE"}).then(() => {
          getFavMovie();
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <Card.Body>
          <Card.Title> Title: {movie.title}</Card.Title>
          <Card.Text> Your Comment: {movie.my_comment}</Card.Text>
          <Button variant="danger" onClick={() => handelDelete(movie.id)}>Delete</Button>
          <Button variant="primary" >Update</Button>
        </Card.Body>
      </Card>
    </div>

  );
}