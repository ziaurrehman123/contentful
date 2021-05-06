import React from 'react';
import './App.css';
import LandingPage from './landingPage';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import createPoll from './createPoll';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/landingpage" exact component={LandingPage} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/createpoll" exact component={createPoll} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
