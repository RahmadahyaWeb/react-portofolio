import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scroll/Scroll";
import Preloader from "./components/preloader/Preloader";
import Work from "./components/work/Work";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Header />
          <main className="main">
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Work />
            <Testimonials />
          </main>
          <Footer />
          <Scroll />
        </div>
      )}
    </>
  );
};

export default App;
