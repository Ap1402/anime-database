import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Animes from "./components/Animes";
import AnimeDescription from "./components/AnimeDescription";
import MainPage from "./components/Containers/MainPage";
import TrendingUpcoming from "./components/Containers/TrendingUpcoming";
import styled from "styled-components";

const Theme = styled.div`
  background-color:black;

`;

function App() {
  return (
    <>
      <Router>
        <header className="App-header">
          <Navbar></Navbar>
        </header>
        <div className="jumbotron d-flex align-items-center">
          <div className="container">
            <Switch>
              <Route exact path="/animes/:page?" component={Animes}></Route>
              <Route exact path="/">
                <MainPage></MainPage>
              </Route>
              <Route exact path="/anime/top-upcoming">
                <TrendingUpcoming />
              </Route>

              <Route exact path="/anime/:id">
                <AnimeDescription />
              </Route>
            </Switch>
          </div>
        </div>

      </Router>
    </>
  );
}

export default App;
