import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Packs from "./pages/Packs";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packs" element={<Packs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
