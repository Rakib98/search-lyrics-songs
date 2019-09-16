import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      {/* The provider allows to fetch the data from axios. */}
      <Router>
        {/* Router allows to crate a single page application. */}
        <React.Fragment>
          {/* Loads the navbara */}
          <Navbar />
          <div className="container">
            <Switch>
              {/* Create a switch, that will contain the various route */}
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
