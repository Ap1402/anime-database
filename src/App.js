import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Animes from "./components/Animes";
import AnimeDescription from "./components/AnimeDescription";
import MainPage from "./components/Containers/MainPage";
import TrendingUpcoming from "./components/Containers/TrendingUpcoming";
import  { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Styling/Themes";
import { GlobalStyles } from "./components/Styling/GlobalStyles";
import { useDarkMode } from "./components/Styling/useDarkmode";
import Toggle from "./components/Toggler";
import Footer from "./components/Footer";


function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  if(!mountedComponent) return <div/>
  return (
      <Router>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles/>
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
        <Toggle toggleTheme={themeToggler} />


    </ThemeProvider>
      </Router>

  );
}

export default App;
