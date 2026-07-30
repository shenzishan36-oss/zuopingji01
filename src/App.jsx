import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ExperimentsPage from "./pages/ExperimentsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AIWorkflowPage from "./pages/AIWorkflowPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/experiments" element={<ExperimentsPage />} />
          <Route path="/ai-workflow" element={<AIWorkflowPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
