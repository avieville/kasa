import { Route, Routes } from "react-router-dom";
import "./css/app.scss";
import Home from "./pages/home/Home";
import LocationDetails from "./pages/LocationDetails";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/NotFound";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<LocationDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
