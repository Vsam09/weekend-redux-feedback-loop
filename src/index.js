import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore} from 'redux';

 
const surveyReducer = (state = [], action) => {
    switch (action.type) {
        case ('ADD_FEELING'):
            return action.payload;
        case ('ADD_UNDERSTANDING'):
            return action.payload;
        case ('ADD_SUPPORT'):
            return action.payload;
        case ('ADD_COMMENTS'):
            return action.payload;
        default:
    }
    return state;
}

const store = createStore(
        surveyReducer,
);

ReactDOM.render( 
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
