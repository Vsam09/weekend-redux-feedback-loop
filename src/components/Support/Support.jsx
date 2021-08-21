import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from 'react';

function Support() {

    let dispatch = useDispatch();
    let history = useHistory();
    let [support, setSupport] = useState('');

    const goToComments = () => {
        if (support <= 5 && support > 0) {
            dispatch({
                type: 'ADD_SUPPORT',
                payload: support
            })
            history.push('/comments')
        }
        else {
            alert('Please have an entry of 1 - 5');
        }
    }

    return(
        <div>
             <h1>How well are you being supported?</h1>
            <h2> 
            <input 
                type="number" 
                placeholder="Rate your support" 
                value={support}
                onChange={(event) => setSupport(event.target.value)}/> 
           <button onClick={goToComments}>Next</button>
           </h2>
        </div>
    )
}
export default Support;