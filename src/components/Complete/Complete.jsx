import { useHistory } from 'react-router-dom';
function Complete() {

    let history = useHistory();

    const newSurvey = () => {
        history.push('/')
    }

    return(
        <div>
            <h1>Thank You!</h1>
            <button onClick={newSurvey}>Leave a New Feedback</button>
        </div>
    )
}
export default Complete;