import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

// Section Components
import LandingPage from './components/sections/LandingPage';
import AboutSection from './components/sections/AboutSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ResumeSection from './components/sections/ResumeSection';
import ProjectsSection from './components/sections/ProjectsSection';
import FeedbackSection from './components/sections/FeedbackSection';
import ContactSection from './components/sections/ContactSection';

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <LandingPage />
              <AboutSection />
              <PortfolioSection />
              <ResumeSection />
              <ProjectsSection />
              <FeedbackSection />
              <ContactSection />
            </>
          } />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/portfolio" element={<PortfolioSection />} />
          <Route path="/resume" element={<ResumeSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/feedback" element={<FeedbackSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
        
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
};

export default App;
