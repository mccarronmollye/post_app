import React, { Component } from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../components/Home'
import Posts from '../components/Posts'
import NavBar from '../components/NavBar'
import NewPost from '../components/NewPost'

const App = (props) => {
  return(
    <Router>
      <div>
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/new_post" component={NewPost}/>
      </div>
    </Router>
  )
}


export default App;
