import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './component/Post/Post';
import { Button } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './component/Details/Details';
import NotFound from './component/NotFound/NotFound';

function App() {
    

  


  
  
  return (
    <div >
      
      <Router>
        <Switch>
          
          <Route path="/detail/:id">
            <Details></Details>
          </Route>
          <Route exact path="/">
            <Post></Post>
          </Route>
          {/* <Route path="/">
            <App></App>
          </Route> */}
          {/* <Route exact path = "*">
          <NotFound></NotFound>
          </Route> */}
        </Switch>
      </Router>


      {/* <h2>Post: {post.length}</h2>
      <ul>
        {
          post.map(pst => <Post pst = {pst}></Post> )
        }
      </ul> */}
      
      
      
    </div>
  );
}

export default App;
