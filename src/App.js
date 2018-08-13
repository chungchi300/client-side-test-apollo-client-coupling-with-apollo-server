import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ApolloClient from "apollo-boost";

import gql from "graphql-tag";
// const client = new ApolloClient({
//   uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
// });

// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

const client2 = new ApolloClient({
  uri: "http://localhost:3001/graphql-apollo"
});

client2
  .query({
    query: gql`
      {
        allBooks(filter: { id: 17 }) {
          isbn
        }
      }
    `
  })
  .then(result => console.log(result));

const client3 = new ApolloClient({
  uri: "http://localhost:3001/graphql-express"
});

client3
  .query({
    query: gql`
      {
        allBooks(filter: { id: 17 }) {
          isbn
        }
      }
    `
  })
  .then(result => console.log(result));
// client2
//   .query({
//     query: gql`
//       mutation {
//         createBook(title: "dd", author: "jeff") {
//           id
//         }
//       }
//     `,
//     data: {
//       title: "dd",
//       author: "jeff"
//     }
//   })
//   .then(result => console.log(result));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
