import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import ProjectDetails from './ProjectDetails';
import ProjectDetails2 from './ProjectDetails2';
import ProjectDetails3 from './ProjectDetails3';

function ProjectDetailsWrapper() {
  const { projectId } = useParams();

  // Conditionally render the appropriate component based on projectId
  if (projectId === '1') {
    return <ProjectDetails />;
  } else if (projectId === '2') {
    return <ProjectDetails2 />;
  } else if (projectId === '3') {
    return <ProjectDetails3 />;
  } else {
    return <div>Project not found</div>;
  }
}

function App() {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'FR' : 'EN');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home language={language} toggleLanguage={toggleLanguage} />} />
        <Route path="/work" element={<Work language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="/project/:projectId" element={<ProjectDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
