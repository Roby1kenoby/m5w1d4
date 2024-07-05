import {Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import AddComment from "./AddComment"
import CommentList from "./CommentList"

function CommentArea({show, setShow, book}) {
    const apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY3M2M5NTdmNmI0YjAwMTU0MjhmYmIiLCJpYXQiOjE3MjAyMTI2NzgsImV4cCI6MTcyMTQyMjI3OH0.PhUhplwS_bhA_Xr2FoZVKfD2ODGab5aq9UeQsuaLv1E'
    // apiUrl per salvare commenti
    const postApiUrl = 'https://striveschool-api.herokuapp.com/api/comments'
    // apiUrl per recueprare i commenti
    const getApiUrl = 'https://striveschool-api.herokuapp.com/api/books/'
    const [reviews, setReviews] = useState([])

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
        alert("Review Added!")
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
            })
        } catch (error) {
            console.log(error)
        }
        finally {
            setFormData({initialFormData})
        }
    }

    // funzione per recuperare le reviews
    const loadReviews = async () => {
        let fetchedReviews = await fetch(getApiUrl+book.asin+'/comments',{
            headers: {
                Authorization: apiKey,
            },
            method: 'GET'
        })
        let data = await fetchedReviews.json()
        console.log(data)
    }
    
    useEffect(() => {loadReviews()}, [reviews])

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