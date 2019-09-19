import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import UserDetails from './components/UserDetails';


//Functional Component
const App = () => {
    console.log('inside render');
    const aboutUrlDetails = {
      pathname: '/about',
      search: '?name=Jinto'
    };
    return (
      <div id="my-app">
        <Link to="/">Home</Link>
        <Link to={aboutUrlDetails}>About</Link>
        <Link to="/contact">Contact</Link>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/userdetails/:userId" component={UserDetails} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
      </div>
    );
};
  
//Compose


export default App;
