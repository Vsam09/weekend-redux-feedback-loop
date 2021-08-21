import react from 'react';
import {useDispatch, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios';


function Review() {

    let history = useHistory();
    const reviewInfo = useSelector(store => store.surveyReducer)

    const submitFeedback= () => {
        axios({
            method: 'POST',
            url: '/survey',
            data: reviewInfo
        }).then((response) => {
            console.log(response);
            history.push('/complete');
        }).catch((error) => {
            console.log('POST in review has error', error);
        })

    }

    return (
        <div>
            <h1>Feedback Review</h1>
            <p>Feeling: {reviewInfo.feeling}</p>
            <p>Understanding: {reviewInfo.understanding}</p>
            <p>Support: {reviewInfo.support}</p>
            <p>Comments: {reviewInfo.comments}</p>
            <button onClick={submitFeedback}>Submit</button>
        </div>
    )
}
export default Review;