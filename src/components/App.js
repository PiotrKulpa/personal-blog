import React, { Component } from 'react';
//import './App.css';
import Menu from './Menu';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import Contact from './Contact';
import NotFound from './NotFound';
import Footer from './Footer';
import { Route, Switch, } from 'react-router-dom';
import Preloader from './Preloader';


class App extends Component {

  render() {
    return (
        
      <div id="wrapper" className="wrapper">

      {/* PRELOADER */}
      <Preloader />

      {/* LOGO */}
      <div>LOGO</div>
      
      {/* NAVIGATION */}

      <Menu />

        {/* MAIN CONTENT */}
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/blog" component={Blog} />
           <Route exact path="/blog/:id" component={Post} />
           <Route exact path="/kontakt" component={Contact} />
           <Route component={NotFound} />
         </Switch>

         {/* FOOTER */}
         <Footer />

      </div>
      
    );
  }
}

export default App;
