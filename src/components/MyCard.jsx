import {Card, Col} from 'react-bootstrap';
import './MyCard.css';

function MyCard({book}) {
    return (
        <Col lg={3} md={4} sm={6} className='myCol' >
                <Card>
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

export default MyCard;