
import NavbarComponent from "./Components/NavbarComponent";

import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import GaleriPage from "./Pages/GaleriPage";
import BlogPage from "./Pages/BlogPage";

import FooterComponent from "./Components/FooterComponent";


function App() {
  return (
    <div>
      <NavbarComponent/>

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/galeri" Component={GaleriPage} />
        <Route path="/blog" Component={BlogPage} />
        
      
      </Routes>
    
    <FooterComponent/>
    </div>
  );
}

export default App;
