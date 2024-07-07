import { Modal, Button, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import AddComment from "./AddComment"
import CommentList from "./CommentList"

function CommentArea({ show, setShow, book }) {
    const apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY3M2M5NTdmNmI0YjAwMTU0MjhmYmIiLCJpYXQiOjE3MjAyMTI2NzgsImV4cCI6MTcyMTQyMjI3OH0.PhUhplwS_bhA_Xr2FoZVKfD2ODGab5aq9UeQsuaLv1E'
    // apiUrl per salvare commenti
    const postApiUrl = 'https://striveschool-api.herokuapp.com/api/comments'
    // apiUrl per recueprare i commenti
    const getApiUrl = 'https://striveschool-api.herokuapp.com/api/books/'
    const [reviews, setReviews] = useState([])

    // stato usato per refreshare la lista di review se addComment ha aggiunto un commento.
    const [reviewAdded, setReviewAdded] = useState(false)

    const handleClose = () => setShow(false);
    // struttura base dell'oggetto form
    const initialFormData = {
        elementId: book.asin,
        rate: 1,
        comment: ''
    }
    // stato per AddComment
    const [formData, setFormData] = useState(initialFormData)

    // funzione per richiamare la post, salvare la review e sbiancare il form
    const saveReview = () => {
        postReview()
    }

    // funzione con fetch per salvare una review
    const postReview = async () => {
        try {
            let resp = await fetch(postApiUrl, {
                headers: {
                    Authorization: apiKey,
                    "Content-type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify(formData)

            }
            )
            // dopo che la post è andata a buon fine, indico che la review è stata aggiunta per aggiornare
            // la lsita grazie a useEffect
            if (!resp.ok) {
                throw new Error('Review discarded. Compile mandatory fields!')
            }
            else {
                alert("Review Added!")
                setReviewAdded(true)
                setFormData(initialFormData)
            }
        } catch (error) {
            alert(`Review not added for the following reason.\n${error}`)
            console.log(error)
        }
    }

    // funzione per recuperare le reviews
    const loadReviews = async () => {
        let fetchedReviews = await fetch(getApiUrl + book.asin + '/comments', {
            headers: {
                Authorization: apiKey,
            },
            method: 'GET'
        })
        let data = await fetchedReviews.json()
        setReviews(data)
        setReviewAdded(false)
    }

    // effettuo il caricamento dei commenti solo quando l'utente clicca sul pulsante di inserimento
    // review e mi appare il modale, oppure quando l'utente ha aggiunto una review
    useEffect(() => {
        (show || reviewAdded) && loadReviews()
    }, [show, reviewAdded])



    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Book Reviews</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddComment formData={formData} setFormData={setFormData}></AddComment>
                <CommentList reviews={reviews}></CommentList>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveReview}>
                    Save Review
                </Button>
            </Modal.Footer>
        </Modal>
    );

}

export default CommentArea;