import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
    </>
  );
}

export default App;
