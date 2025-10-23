import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
// import Marketplace from "./components/pages/Marketplace";
// import Rankings from "./components/pages/Ranking";
// import Create_Acc from "./components/pages/Create_user";
// import Wallet from "./components/pages/Connect";

import "./styles/index.min.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/marketplace" element={<Marketplace />} /> */}
        {/* <Route path="/rankings" element={<Rankings />} /> */}
        {/* <Route path="/wallet" element={<Wallet />} /> */}
        {/* <Route path="/create" element={<Create_Acc />} /> */}
      </Routes>
    </>
  );
}

export default App;
