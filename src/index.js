import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { ApolloProvider } from "react-apollo-hooks";
import { Provider } from "react-redux";
import Client from "./Apollo/Client";
import store from "./store";

ReactDOM.render(
  <ApolloProvider client={Client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
