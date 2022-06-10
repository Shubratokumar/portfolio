import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blogs from './components/Blogs';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="portfolio" element={<Portfolio/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="blogs" element={<Blogs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
