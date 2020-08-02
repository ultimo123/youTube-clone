import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideo from "./components/RecommendedVideo/RecommendedVideo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              {/* Searchpage */}
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              {/* RecommendedVideo */}
              <RecommendedVideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
