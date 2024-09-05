import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './About.css'; // Custom styles

function About({ language }) {
  const [cvDownloaded, setCvDownloaded] = useState(false);

  const handleCvDownload = () => {
    setCvDownloaded(true);
  };

  return (
    <div className="about-container">
      {/* Header */}
      <header className="header">
        <Link to="/" className="home-icon">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Link>
        
      </header>

      {/* Content */}
      <div className="content">
        <h1>{language === 'EN' ? 'About' : 'À propos'}</h1>
        <div className="about-section">
          <img src="/Med.jpg" alt="Mohamed Zahrouni" className="profile-picture" />
          <p>
            {language === 'EN'
              ? "Hey, my name is Mohamed Zahrouni, I am a Full Stack JavaScript Developer. I am passionate about solving complex problems and delivering scalable, high-quality software solutions."
              : "Salut, je m'appelle Mohamed Zahrouni, je suis développeur Full Stack JavaScript. Je suis passionné par la résolution de problèmes complexes et la livraison de solutions logicielles évolutives et de haute qualité."}
          </p>
          <a href="/MOHAMED ZAHROUNI.doc" download="MOHAMED ZAHROUNI.doc" onClick={handleCvDownload}>
            {language === 'EN' ? 'Download my resume' : 'Télécharger mon CV'}
          </a>
          {cvDownloaded && (
            <p>{language === 'EN' ? 'My CV attached: MOHAMED ZAHROUNI.doc' : 'Mon CV attaché: MOHAMED ZAHROUNI.doc'}</p>
          )}
        </div>
      </div>

      {/* Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
    </div>
  );
}

export default About;
