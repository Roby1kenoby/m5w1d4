import { fantasy as books } from '../data/books'
import { Row, Form } from "react-bootstrap";
import './AllTheBooks.css'
import SingleBook from "./SingleBook";
import { useEffect, useState } from 'react';

function AllTheBooks({ filterValue }) {
    // state per la gestione dell'array di libri
    const [filteredBooks, setFilteredBooks] = useState(books)
    // state per la gestione del filter text

    // funzione per il filtraggio dei libri
    const filterBooks = () => {
        let tempFilterValue = filterValue
        let tempBooks = books.filter(b => {
            return b.title.toLowerCase().includes(tempFilterValue.toLowerCase()) && b
        })
        // infine, setto l'array filteredBooks con l'array che contiene i valori filtrati
        setFilteredBooks(tempBooks)
    }

    useEffect(filterBooks, [filterValue])

    return (
        <>
            <Row>
                {
                    // mostro filteredbooks, che di default è tutti, ma se si digita nel textbox
                    // viene ridotto in base ai valori digitati
                    filteredBooks.map(b => <SingleBook key={b.asin} book={b}></SingleBook>)
                }
            </Row>
        </>
    );
}

export default AllTheBooks;