import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from './pages/PageNotFound';
import About from "./pages/About";
import Contact from './pages/Contact';
import Services from "./pages/Services";


function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
