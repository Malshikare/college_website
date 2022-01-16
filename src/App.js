import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Section from "./Section";
import Gallery from "./Gallery";
import Alumni from "./Alumni";
import Placement from "./Placement";
function App(){
  return(
    <>
      
      {/* <BrowserRouter> */}
        <Routes>
          <Route exact path = "/" element={<Section/>}></Route>
          <Route exact path="/gallery" element={<Gallery/>}></Route>
          <Route exact path="/placement" element={<Placement/>}></Route>
          <Route exact path="/alumni" element={<Alumni/>}></Route>
        </Routes>
      {/* </BrowserRouter> */}
      <Footer/>
    </>
  )
}
export default App;
