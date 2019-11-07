import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: 'http://localhost:8100/index.php/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(), 
});

//pass thunk as middleware
const store = createStore(reducers, applyMiddleware(thunk));

const RootApp = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);

render(<RootApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
