import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import { BrowserRouter as Router, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
        {/* <Router>
          <Navbar />
          <Switch>
            <Route path="/">
              <News />
            </Route>
            <Route path="/">
              <NewsItem />
            </Route>
          </Switch>
        </Router> */}
        <Navbar />
        <News pageSize="6" />
      </>
    );
  }
}

export default App;
