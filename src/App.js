import logo from "./logo.svg";
import "./App.css";
import MyNavbar from "./components/Navbar";
import { Banner } from "./components/Banner";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner />
    </div>
  );
}

export default App;
