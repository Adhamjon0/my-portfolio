import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import Intro from "./components/Intro";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import "./i18n";
import "./App.css";

function AppContent() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    // return <Intro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <div className="app-wrapper">
      <Header />

      <main className="app-content">
        <motion.section
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Home />
        </motion.section>

        <section id="about">
          <About />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="skills">
          <Skills />
        </section>



        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}