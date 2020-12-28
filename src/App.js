import { useState } from "react";
import "./App.css";
// import cloneDeep from "lodash.clonedeep";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import Home from "./pages/home/home.page";
import ErrorPage from "./pages/E404/e404.components";
import Pokedex from "./pages/pkedex/pokedex.component";
// import useFetchPokemon from "./hooks/useFetchPokemon";
import Legendaries from "./pages/legendaries/legendaries.component";

function App() {
  const [color, setColor] = useState("black");
  const [page, setPage] = useState(null);
  // const example = cloneDeep({ ex: "ex" });
  // console.log(example);
  // useFetchPokemon();
  return (
    <div className="App">
      {page && <NavBar />}
      <Switch>
        <Route path="/legendaries">
          <Legendaries setPage={setPage} setColor={setColor} />
        </Route>
        <Route path="/pokedex">
          <Pokedex setPage={setPage} setColor={setColor} />
        </Route>
        <Route exact path="/">
          <Home setPage={setPage} setColor={setColor} />
        </Route>
        <Route>
          <ErrorPage setPage={setPage} setColor={setColor} />
        </Route>
      </Switch>

      {page && <Footer color={color} />}
    </div>
  );
}

export default App;
