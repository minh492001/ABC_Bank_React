import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
