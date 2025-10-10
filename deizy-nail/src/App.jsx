import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ no BrowserRouter here
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Service = lazy(() => import("./pages/Service"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="p-10 text-center text-gray-600">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<div className="p-10 text-center text-red-500">Page Not Found</div>} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
