import MyCard from "./MyCard";
import {fantasy as books} from '../data/books'
import { Row } from "react-bootstrap";
import './AllTheBooks.css'

function AllTheBooks() {
    return (  
        <Row>
            {
                books.map(b => <MyCard key={b.asin} book={b}></MyCard>)
            }
        </Row>    
    );
}

export default AllTheBooks;