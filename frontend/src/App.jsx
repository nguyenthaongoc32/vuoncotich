import { Routes, Route } from "react-router-dom";
import Banner from "./component/homepage/Banner";

import JewelryList from "./component/homepage/jewelryList";


function App() {
  return (
    <div>
      <Banner/>
      <JewelryList/>
    </div>
  );
}

export default App;
    