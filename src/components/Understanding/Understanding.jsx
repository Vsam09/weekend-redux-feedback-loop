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
            <h2> 
            <input 
                type="number" 
                placeholder="Rate your understanding" 
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}/> 
           <button onClick={goToSupport}>Next</button>
           </h2>

        </div>
    )
}
export default Understanding;