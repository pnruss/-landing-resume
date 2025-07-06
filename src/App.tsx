import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Intro from "./components/pages/Intro";
import AboutMe from "./components/pages/AboutMe";
import Project from "./components/pages/Project";
import Manuspect from "./components/pages/Manuspect";
import Rsxb from "./components/pages/Rsxb";
import ScrollToTop from "./components/scrollToTop";

const App = () => {
  const refs = {
    projects: useRef(null),
    about: useRef(null),
    back: useRef(null),
  };

  const scrollTo = (ref) => {
    refs[ref]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header
        scrollToAboutMe={() => scrollTo("about")}
        scrollToProjects={() => scrollTo("projects")}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro scrollToProjects={() => scrollTo("projects")} />
              <AboutMe aboutRef={refs.about} />
              <Project projectsRef={refs.projects} />
            </>
          }
        />
        <Route path="/Manuspect" element={<Manuspect />} />
        <Route path="/RSXB" element={<Rsxb />} />
      </Routes>

      <Footer scrollToBack={() => scrollTo("back")} />
    </BrowserRouter>
  );
};

export default App;
