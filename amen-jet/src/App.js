import logo from "./logo.svg";
import Home from "./components/Home";
import "./App.css";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
