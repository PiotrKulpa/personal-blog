import React, { memo } from 'react';
import Menu from './Menu';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import Contact from './Contact';
import NotFound from './NotFound';
import Footer from './Footer';
import TestPosts from './TestPosts';
import { Route, Switch, } from 'react-router-dom';

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
           <Route exact path="/blog" component={Blog} />
           <Route exact path="/blog/strona/:id" component={Blog} />
           <Route exact path="/szukaj/:id" component={Blog} />
           <Route exact path="/blog/:id" component={Post} />
           <Route exact path="/kontakt" component={Contact} />
           <Route path="/test" component={TestPosts} />
           <Route component={NotFound} />
         </Switch>

         {/* FOOTER */}
         <Footer />

      </div>
      
    );
}

export default memo(App);
