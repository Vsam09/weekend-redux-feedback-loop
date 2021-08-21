import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from 'react';

function Comments() {
    let history = useHistory();
    let dispatch = useDispatch(); 
    let [comments, setComments] = useState('');
    
    const goToReview = () => {
        console.log('comments', comments);

        dispatch({
            type: 'ADD_COMMENTS',
            payload: {comments}
        })
        history.push('/review')
    }

    return(
        <div>
        <h1>Any comments you want to leave?</h1>
        <h2>
        <input 
            placeholder="Comments (optional)"
            type="text" 
            value={comments} 
            onChange={(event) => setComments(event.target.value)}/>
        <button onClick={goToReview}>Next</button>
        </h2>
        </div>
    )
}
export default Comments;