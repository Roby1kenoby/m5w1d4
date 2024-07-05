import { Card, Col, Button} from 'react-bootstrap';
import './SingleBook.css';
import { useState } from 'react';
import CommentArea from './comments/CommentArea.jsx';

function SingleBook({ book }) {
    const [selected, setSelected] = useState(false)
    // funzione per fare il toggle della classe selected
    // diventa superflua se inserisco una funzione anonima direttamente nell'evento onClick.
    // quando dichiaro la funzione anonima nell'onclick è come se stessi mettendo solo il nome della funzione
    // (come se fosse senza parentesi). Di conseguenza, react non la chaima al caricamento, ma solo su onClick
    // const toggleSelected = function(){
    //     setSelected(!selected)
    // }
    // nella card, se selected, allora c'è anche la classe, altrimenti no.
    
    // questo state lo uso per far comparire il modale che sta dentro CommentArea
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Col lg={3} md={4} sm={6} className='myCol' >
                <Card className={selected && 'selected'} onClick={() => setSelected(!selected)}>
                    <div className='imgWrapper'>
                        <Card.Img variant="top" src={book.img} />
                    </div>
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <div className='cardBottom'>
                            <div className='btnWrapper'>
                                <Button variant='warning' type="button" onClick={handleShow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                    </svg>
                                </Button>
                                <Button variant='success' type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5" />
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                    </svg>
                                </Button>
                            </div>
                            <Card.Text>
                                Price: {book.price} €
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <CommentArea show={show} setShow={setShow} book={book}></CommentArea>
        </>
    );
}

export default SingleBook;