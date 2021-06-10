import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';

const App=()=> {
  return(
  <Router>
    <Route exact path='/' component={Home}/>
    <Route path ='/chatroom' component={Chat}/>
  </Router>
  );
}

export default App;
