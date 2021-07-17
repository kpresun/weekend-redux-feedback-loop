import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Header from '../Header/Header';
import Feeling from '../../Feeling/Feeling';
import Understanding from '../../Understanding/Understanding';
import Support from '../../Support/Support';
import Comments from '../../Comments/Comments';

function App() {

  return (
    <div className='App'>
      <Header />
      <Feeling />
      <Router>
        <Route exact path='/formPt2' component={Understanding} />
      </Router>
      {/* <Understanding /> */}
      <Support />
      <Comments />
    </div>
  );
}

export default App;
