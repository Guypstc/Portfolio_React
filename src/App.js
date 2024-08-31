import logo from "./logo.svg";
import "./App.css";
import { MyNavbar }from "./components/Navbar";
import { Banner }  from "./components/Banner";
import { Skills } from "./components/Skills";
import { Project } from "./components/Project";


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
