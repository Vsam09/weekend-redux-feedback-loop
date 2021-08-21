import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';

 //Create a reducer for dispatching
const surveyReducer = (state = {}, action) => {
    switch (action.type) {
        case ('ADD_FEELING'):
            return {...state, feeling: action.payload.feeling};
        case ('ADD_UNDERSTANDING'):
            return {...state, understanding: action.payload.understanding};
        case ('ADD_SUPPORT'):
            return {...state, support: action.payload.support};
        case ('ADD_COMMENTS'):
            return {...state, comments: action.payload.comments};
        default:
    }
    return state;
}

//Create redux store for reducers
const storeInstance = createStore(
    combineReducers({
        surveyReducer
    })
        
);

ReactDOM.render( 
<Provider store={storeInstance}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
