import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
function App() {

  let [survey, setSurvey] = useState('');

  useEffect(() => {
    fetchSurvey();
  }, []);

  const fetchSurvey(() => {
    axios({
      method: 'GET',
      url: '/api/survey'
    }).then((response) => {
      console.log('our response data', response.data)
      setSurvey(response.data)
    }).catch((error) => {
      console.log('GET app', error)
    });
  })

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
