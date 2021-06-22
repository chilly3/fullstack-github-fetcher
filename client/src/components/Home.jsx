import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import async from 'async';

const Home = () => {


  return (
    <div className="content">
      <div>
        <div>
          <hr></hr>
          <h2 className="content-title">Home</h2>
          <p>Welcome to <em>Github Fetcher</em>, a web app built with react, express, and mongoose for storing requests from github api in a mongo atlas database.</p>
          <ul className="counts">
            <li><strong>Repos in database: </strong><i className="alert-info"></i></li>
          </ul>
        </div>
      </div>
    </div>
  );

}

export default Home;