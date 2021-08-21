import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
function App() {

  let [survey, setSurvey] = useState('');

  //Don't forget useEffect here
  useEffect(() => {
    fetchSurvey();
  }, []);
  //Axios GET data from database
  const fetchSurvey = () => {
    axios({
      method: 'GET',
      url: '/api/survey'
    }).then((response) => {
      console.log('our response data', response.data)
      setSurvey(response.data)

    }).catch((error) => {
      console.log('GET app', error)
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
      <Route path='/' exact>
        <Feeling />
      </Route>

      <Route path='/understanding' exact>
        <Understanding />
      </Route>
        

      </Router>
    </div>
  );
}

export default App;
