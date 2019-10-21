import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
// import { Browser } from 'react-route-dom';

const client = new ApolloClient({
  uri: ''
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>React Apollo Boilerpate</h2>
    </div>
  </ApolloProvider>
)

export default App;
