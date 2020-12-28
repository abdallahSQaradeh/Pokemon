import { useState } from "react";
import "./App.css";
// import cloneDeep from "lodash.clonedeep";
import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
// import Content from "./pages/home/home.page";
// import ErrorPage from "./pages/E404/e404.components";
// import Pokedex from "./pages/pkedex/pokedex.component";
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
      <NavBar />
      <Legendaries setPage={setPage} setColor={setColor} />
      {/*  <Pokedex setPage={setPage}/> */}
      {/* <Content setPage={setPage}/>
      <ErrorPage setPage={setPage}/> */}
      {page && <Footer color={color} />}
    </div>
  );
}

export default App;
