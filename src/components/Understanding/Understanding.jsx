import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from 'react';
function Understanding() {
    
    let history = useHistory();
    let dispatch = useDispatch();

    let [understanding, setUnderstanding] = useState('');

    const goToSupport = () => {
        if (understanding <= 5 && understanding > 0) {
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: understanding
            })
            history.push('/support')
        }
        else {
            alert('Please have an entry of 1 - 5');
        }

    }

    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <h2>Please rate your understanding from 1 - 5</h2>
            <h3> 
            <input 
                type="number" 
                placeholder="Rate your understanding 1 - 5" 
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}/> 
           <button onClick={goToSupport}>Next</button>
           </h3>

        </div>
    )
}
export default Understanding;