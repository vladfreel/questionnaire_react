import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.css';

const client = new ApolloClient({
    uri: "/graphql"
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

// How apollo can help us query data from the server
client
    .query({
        query: gql `
      {
        authors {
          name
          books {
            title
          }
        }
      }
    `
    })
    .then(result => console.log(result));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
