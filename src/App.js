import "./App.css";
// import cloneDeep from "lodash.clonedeep";
import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
// import Content from "./pages/home/home.page";
// import ErrorPage from "./pages/E404/e404.components";
import Pokedex from "./pages/pkedex/pokedex.component";
// import useFetchPokemon from "./hooks/useFetchPokemon";

function App() {
  // const example = cloneDeep({ ex: "ex" });
  // console.log(example);
  // useFetchPokemon();
  return (
    <div className="App">
      <NavBar />
      <Pokedex />
      {/*  <Content />
      <ErrorPage /> */}
      <Footer />
    </div>
  );
}

export default App;
