import "./App.css";
// import cloneDeep from "lodash.clonedeep";
import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import Content from "./pages/home/home.page";
// import ErrorPage from "./pages/E404/e404.components";

function App() {
  // const example = cloneDeep({ ex: "ex" });
  // console.log(example);
  return (
    <div className="App">
      <NavBar />
      <Content />
      {/* <ErrorPage /> */}
      <Footer />
    </div>
  );
}

export default App;
