import { BrowserRouter, Routes, Route } from "react-router-dom";
import Producto from "./components/Producto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Producto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
