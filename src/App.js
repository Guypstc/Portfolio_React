import logo from "./logo.svg";
import "./App.css";
import { MyNavbar }from "./components/Navbar";
import { Banner }  from "./components/Banner";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
