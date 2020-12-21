import "./App.css";
// import cloneDeep from "lodash.clonedeep";
import NavBar from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Content from "./pages/home/home.page";

function App() {
  // const example = cloneDeep({ ex: "ex" });
  // console.log(example);
  return (
    <div className="App">
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
