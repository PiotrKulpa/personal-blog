import React, { memo } from 'react';
import Menu from './Menu';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import Posts from './Posts';
import PostsDefault from './PostsDefault';
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
           {/* zmien na osobne komponenty dla szukaj blog oraz blog/strona */}
           <Route exact path="/blog/strona/:id" component={PostsDefault} /> 
           <Route exact path="/blog/:id" component={Post} /> 
           <Route exact path="/blog" component={PostsDefault} /> 
           <Route exact path="/szukaj/:id" component={Blog} />
           {/* <Route exact path="/blog/:id" component={Post} /> */}
           {/* <Route exact path="/blog/strona" component={Posts} /> */}
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
