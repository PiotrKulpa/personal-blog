import React, { memo } from 'react';
import Menu from './Menu';
import Home from './Home';
import Post from './Post';
import PostsDefault from './PostsDefault';
import Contact from './Contact';
import NotFound from './NotFound';
import Footer from './Footer';
import { Route, Switch, } from 'react-router-dom';
import SearchResult from './SearchResult';

const App = () => {

    return (
        
      <div id="wrapper" className="wrapper">

      {/* LOGO */}
      <div>LOGO</div>
      
      {/* NAVIGATION */}

      <Menu />

        {/* MAIN CONTENT */}
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/blog/strona/:id" component={PostsDefault} /> 
           <Route exact path="/blog/:id" component={Post} /> 
           <Route exact path="/blog" component={PostsDefault} /> 
           <Route exact path="/szukaj/:search" component={SearchResult} />
           <Route exact path="/szukaj/:search/:id" component={SearchResult} />
           <Route exact path="/kontakt" component={Contact} />
           <Route component={NotFound} />
         </Switch>

         {/* FOOTER */}
         <Footer />

      </div>
      
    );
}

export default memo(App);
