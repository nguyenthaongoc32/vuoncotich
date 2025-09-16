import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import BraceletList from "./page/BraceletList.jsx";
import BraceletDetail from "./page/BraceletDetail.jsx";

function App() {
  return (
    <>
      {/* <HomePage/> */}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/bracelets" element={<BraceletList/>}/>
        <Route path="/bracelet/:id" element={<BraceletDetail />} />
      </Routes>

    </>
  );
}

export default App;
