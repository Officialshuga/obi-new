import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
//import Navbar from "./Pages/Navbar/navbar";
import Navbarmenu from "./Pages/Navbar/navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import DPaintings from "./Pages/3D Painting/DPainting";
import ExoticFurnitures from "./Pages/Exotic Furnitures/Exoticfurnitures";
import Furnitures from "./Pages/Furnitures/Furnitures.jsx";
import Turkishpaintings from "./Pages/Turkish Paintings/Turkishpaintings";
import Residential from "./Pages/Residential/Residential";
import Footer from './Pages/Footer/footer';
import Notfound from './Pages/not-found/not-found.jsx';
import Projects from "./Pages/Projects/Projects.jsx"






function App() {
  return (
    <>
    <BrowserRouter>
      <Navbarmenu />
      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/turkishpaintings" Component={Turkishpaintings}></Route>
        <Route path="/residential" Component={Residential}></Route>
        <Route path="/furnitures" Component={Furnitures}></Route>
        <Route path="/exoticfurnitures" Component={ExoticFurnitures}></Route>
        <Route path="/dpaintings" Component={DPaintings}></Route>
        <Route path="/projects" Component={Projects}></Route> 
        <Route path="*" Component={Notfound}></Route> 
      </Routes>
      <Footer />
    </BrowserRouter>

  </>





    



    
  );
}

export default App;
