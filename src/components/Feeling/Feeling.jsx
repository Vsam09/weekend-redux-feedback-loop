import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Feeling() {

    let history = useHistory();
    let dispatch = useDispatch();

    let [feeling, setFeeling] = useState('');
    
    const goToUnderstanding = () => {
        if (feeling <= 5 && feeling > 0) {
            dispatch({
                type: 'ADD_FEELING',
                payload: feeling
            })
        history.push('/understanding')
        }
        else {
            alert('Please have an entry of 1-5');
        }
    }

    return(
        <div>
        <h1>How are your feeling today? </h1>
        <h2>Please rate your feelings from 1 - 5</h2>
        <h3> 
        <input 
            type="number" 
            placeholder="Rate your day 1 - 5"
            value={feeling}
            onChange={(event) => setFeeling(event.target.value)}/> 
        <button onClick={goToUnderstanding}>Next</button>
        </h3>
        </div>
    )
}
export default Feeling;