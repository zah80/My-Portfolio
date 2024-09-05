import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ language, toggleLanguage }) {
  return (
    <div className="home-container">
      {/* Header with menu and language switch */}
      <header className="header">
        <div className="menu">
          <Link to="/">{language === 'EN' ? 'Home' : 'Accueil'}</Link>
          <Link to="/work">{language === 'EN' ? 'Work' : 'Travaux'}</Link>
          <Link to="/about">{language === 'EN' ? 'About' : 'À propos'}</Link>
          <Link to="/contact">{language === 'EN' ? 'Contact' : 'Contact'}</Link>
        </div>
        <div className="language-switch">
          <button onClick={toggleLanguage}>
            {language === 'EN' ? 'FR' : 'EN'}
          </button>
        </div>
      </header>

      {/* Floating blobs for decoration */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="content">
        <h1>{language === 'EN' ? "Hey, I'm Mohamed Zahrouni" : "Salut, je suis Mohamed Zahrouni"}</h1>
        <p>{language === 'EN' ? "I'm a Full Stack JavaScript Developer" : "Je suis développeur Full Stack JavaScript"}</p>
        <div className="home-buttons">
          <Link to="/work">{language === 'EN' ? '→ See My Projects' : '→ Voir mes projets'}</Link>
          <Link to="/about">{language === 'EN' ? '→ More About Me' : '→ Plus sur moi'}</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
