import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mission from "./Mission";
import Vision from "./Vision";
function App(){
  return(
    <>
      
      {/* <BrowserRouter> */}
        <Routes>
          <Route exact path ="/mission" element ={<Mission/>}></Route>
          <Route exact path = "/vision" element ={<Vision/>}></Route>
        </Routes>
      {/* </BrowserRouter> */}
     
    </>
  )
}
export default App;
