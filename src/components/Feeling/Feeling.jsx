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
        <h2> 
        <input 
            type="number" 
            placeholder="Rate your day"
            value={feeling}
            onChange={(event) => setFeeling(event.target.value)}/> 
        <button onClick={goToUnderstanding}>Next</button>
        </h2>
        </div>
    )
}
export default Feeling;