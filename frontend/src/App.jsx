import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import BraceletList from "./page/BraceletList";


function App() {
  return (
    <>
      {/* <HomePage/> */}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/bracelets" element={<BraceletList/>}/>
      </Routes>

    </>
  );
}

export default App;
