import {Card, Col} from 'react-bootstrap';
import './MyCard.css';

function MyCard({book}) {
    return (
        <Col lg={2} md={3} sm={6}>
            
            <Card>
                <Card.Img variant="top" src={book.img} />
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