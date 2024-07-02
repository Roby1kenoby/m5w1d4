import {Card, Col} from 'react-bootstrap';
import './SingleBook.css';
import { useState } from 'react';

function SingleBook({book}) {
    const [selected, setSelected] = useState(false)
    // funzione per fare il toggle della classe selected
    // diventa superflua se inserisco una funzione anonima direttamente nell'evento onClick.
    // quando dichiaro la funzione anonima nell'onclick è come se stessi mettendo solo il nome della funzione
    // (come se fosse senza parentesi). Di conseguenza, react non la chaima al caricamento, ma solo su onClick
    // const toggleSelected = function(){
    //     setSelected(!selected)
    // }
    // nella card, se selected, allora c'è anche la classe, altrimenti no.
    return (
        <Col lg={3} md={4} sm={6} className='myCol' >
                <Card className={selected && 'selected'} onClick={() => setSelected(!selected)}>
                    <div className='imgWrapper'>    
                        <Card.Img variant="top" src={book.img} />
                    </div>
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>
                            Price: {book.price} €
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Col>
    );
}

export default SingleBook;