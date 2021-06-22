import React, { useState, useEffect } from 'react';
import axios from 'axios';
import async from 'async';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import Home from './components/Home.jsx';
import Repos from './components/Repos.jsx';

const App = () => {
  const history = useHistory();
  const [user, setUser] = useState('');

  useEffect(() => {
    axios.get(`/api/user`)
    .then(({ data } = res) => {
      console.log(data);
      setUser(data)
    })
    .catch(err => {
      console.log(err);
    });
  }, [])
  console.log(user);
  return (
    <div>
      <h1 className="title">Github Fetcher</h1>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="appnav">
            <Link to="/" className="app-link">Home</Link>
          </li>
          <li className="appnav">
            <Link to="/repos" className="app-link">Repos</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/repos"><Repos /></Route>
        <Route path="/:id">
          <p>This text will render for any route other than those defined above</p>
        </Route>
      </Switch>
    </div>
  )
}

export default App;