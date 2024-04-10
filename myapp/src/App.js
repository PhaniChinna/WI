import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import TopRatedMovies from "./components/TopRatedM";
import UpComingMovies from "./components/UpcommingM";
import MovieDetail from "./components/MovieDetail";
import MovieSearch from "./components/searchIndex"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/toprated" component={TopRatedMovies} />
        <Route path="/upcoming" component={UpComingMovies} />
        <Route path="/movie-details/:id" component={MovieDetail} />
        <Route path = "/searchI" component ={MovieSearch}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
