import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Register from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/register" element={<Register/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
