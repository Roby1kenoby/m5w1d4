import { fantasy as books } from '../data/books'
import { Row, Form } from "react-bootstrap";
import './AllTheBooks.css'
import SingleBook from "./SingleBook";
import { useState } from 'react';

function AllTheBooks() {
    // state per la gestione dell'array di libri
    const [filteredBooks, setFilteredBooks] = useState(books)
    // state per la gestione del filter text
    const [filterValue, setFilterValue] = useState('')

    // funzione per il filtraggio dei libri
    const filterBooks = function(event){
        // come prima cosa aggiorno il campo di testo col valore individuato dall'evento
        const target = event.target
        setFilterValue(target.value)
        // poi, in un array di libri temporanei, filtro l'elenco di libri iniziale (books)
        // se il titolo di uno di questi contiene il valore del campo di testo
        // allora lo restituisco, altrimenti no (la sintassi && restituisce l'ultimo oggetto se 
        // entrambi i preidcati sono veri)
        let tempBooks = books.filter(b => {
            return b.title.toLowerCase().includes(target.value.toLowerCase()) && b
        }) 
        // infine, setto l'array filteredBooks con l'array che contiene i valori filtrati
        setFilteredBooks(tempBooks)
    }
    return (
        <>
            <div className='formContainer'>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <Form.Group>
                        <Form.Control 
                            type="text" 
                            placeholder="Find your new favourite book!" 
                            name='filterValue'
                            // evento per aggiornare il valore del campo di testo con quello che è stato
                            // intercettato dall'evento (ciò che ha digitato l'utente)
                            onChange={(event) => filterBooks(event)}
                            value={filterValue}/>
                    </Form.Group>
                </Form>
            </div>
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