import './CommentList.css'
import SingleComment from './SingleComment';

function CommentList({reviews}) {
    return ( 
        <>
        <h6>Reviews</h6>
        <hr></hr>
            <ul>
                {
                    reviews.map(r => (
                        <SingleComment key={r._id} review={r}></SingleComment>
                    ))
                }
            </ul>
        </>
    );
}

export default CommentList;