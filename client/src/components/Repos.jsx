import React, { useState, useEffect } from 'react';
import axios from 'axios';
import async from 'async';
import { Switch, Route, Link } from 'react-router-dom';

const Repos = () => {

  const [repos, setRepos] = useState({});
  const [handle, setHandle] = useState('');

  const getRepos = (event) => {
    event.preventDefault();
    axios.get(`/api/users/${handle}/repos`)
    .then(({ data } = res) => {
      setRepos(data)
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  const setFormValue = (event) => {
    event.preventDefault();
    console.log('keypress ', event.target.value);
    setHandle(event.target.value)
  }
  return (
    <div className="content">
      <div>
        <div>
          <hr></hr>
          <h2 className="content-title">Repos</h2>

          <form className="handle-form" onSubmit={getRepos}>
            <input className="handle-input"
              type="text"
              name="handle"
              value={handle}
              onChange={setFormValue}
            />
            <br></br>
            <button className="get-repos">Get Repos</button>
          </form>
      </div>
    </div>
  </div>
  );
}

export default Repos;