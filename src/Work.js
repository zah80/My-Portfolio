import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Work.css';

function Work({ language }) {
  const projects = [
    {
      id: 1,
      title: language === 'EN' ? 'Kadamni' : 'Kadamni',
      category: language === 'EN' ? 'Mobile Application' : 'Application mobile',
      description: language === 'EN' ? 'A mobile app for managing deliveries.' : 'Une application mobile pour gérer les livraisons.',
    },
    {
      id: 2,
      title: language === 'EN' ? 'Real-State' : 'Immobilier',
      category: language === 'EN' ? 'Web Application' : 'Application Web',
      description: language === 'EN' ? 'A platform for buying, selling, and renting properties.' : 'Une plateforme pour acheter, vendre et louer des biens immobiliers.',
    },
    {
      id: 3,
      title: language === 'EN' ? 'Best Shoes' : 'Meilleures chaussures',
      category: language === 'EN' ? 'E-commerce Platform' : 'Plateforme de commerce électronique',
      description: language === 'EN' ? 'An online store for buying and selling shoes.' : 'Une boutique en ligne pour acheter et vendre des chaussures.',
    },
  ];

  return (
    <div className="work-container">
      <header className="header">
        <Link to="/" className="home-icon">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Link>
        
      </header>
      <div className="content">
        <h1>{language === 'EN' ? 'Work' : 'Travaux'}</h1>
        <ul className="projects-list">
          {projects.map((project) => (
            <li key={project.id} className="project-item">
              <Link to={`/project/${project.id}`} className="project-link">
                <span className="project-title">{project.title}</span>
                <span className="project-category">{project.category}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
    </div>
  );
}

export default Work;
