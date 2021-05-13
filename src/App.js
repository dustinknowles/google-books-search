import React from "react";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import {Route, BrowserRouter as Router} from "react-router-dom"


function App() {
  return (
    <>
    <Router>
      <Route exact path="/">
      <Search />
      </Route>
      <Route path="/Saved">
        <Saved />
      </Route>
      
    </Router>
    </>
  );
}

export default App;
