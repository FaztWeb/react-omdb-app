import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import List from "./containers/List";

import "bootswatch/dist/lux/bootstrap.min.css";
import "./index.css";

const App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark border-bottom border-white">
        <a className="navbar-brand" href="/">
          MovieApp
        </a>
      </nav>
      <main className="bg-dark">
        <div className="container">
          <List />
        </div>
      </main>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
