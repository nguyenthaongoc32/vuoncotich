import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import BraceletList from "./page/BraceletList";
import BraceletDetail from "./page/BraceletDetail";

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
