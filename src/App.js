import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SLinks from "./components/SLinks";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <SLinks/>
      <Portfolio/>
      <Experience/>
      <Contacts/>
    </div>
  );
}

export default App;
