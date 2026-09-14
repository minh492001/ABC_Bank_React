import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Profile from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>


        {/* 404 Not Found error */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
