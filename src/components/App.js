import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import Contact from './Contact';
import Page404 from './Page404';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
      {/* LOGO */}
      <div>LOGO</div>
      
      {/* NAVIGATION */}
        <nav>
          <NavLink exact activeClassName="active-menu" to="/">Home</NavLink>
          <NavLink exact activeClassName="active-menu" to="/blog">Blog</NavLink>
          <a href="http://prodentica.info/">Prodentica</a>
          <a href="https://prestigelublin.eu/">Prestige</a>
          <NavLink exact activeClassName="active-menu" to="/kontakt">Kontakt</NavLink>
        </nav>

        {/* MAIN CONTENT */}
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/blog" component={Blog} />
           <Route exact path="/post/:id" component={Post} />
           <Route exact path="/kontakt" component={Contact} />
           <Route component={Page404} />
         </Switch>

         {/* FOOTER */}
         <div className="footer">Stopka</div>

      </div>
    );
  }
}

export default App;
