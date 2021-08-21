import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

//DON'T FORGET TO IMPORT COMPONENTS HERE and Route them to work 
//properly with history.push
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

function App() {

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

      <Route path='/support' exact>
        <Support />
      </Route>

      <Route path='/comments' exact>
        <Comments />
      </Route>

      <Route path='/review' exact>
        <Review />
      </Route>

      </Router>
    </div>
  );
}

export default App;
