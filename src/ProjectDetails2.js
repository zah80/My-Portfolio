import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetails2.css';

const projectDetails = {
  1: {
    title: 'Kadamni - Mobile Application',
    role: 'SCRUM MASTER | July 2024',
    description: 'Led a team in developing a mobile app to streamline delivery operations, enhancing efficiency and ensuring seamless customer interactions.',
    features: [
      'Implemented secure authentication',
      'Worker search',
      'Admin interface',
      'Scrum methodology for efficient development',
    ],
    technologies: [
      'ReactJS', 'TailwindCSS', 'MySQL', 'ExpressJS', 'Firebase', 'Cloudinary', 'EmailJS'
    ]
  },
  2: {
    title: 'Real-State - Web Application',
    role: 'DEVELOPER | July 2024',
    description: 'Developed a platform for buying, selling, and renting properties, integrating external APIs for enhanced user experience.',
    features: [
      'Designed a user-friendly interface for property browsing',
      'Customizable profiles',
      'Implemented CRUD operations',
      'Responsive design and animated transitions',
    ],
    technologies: [
      'NextJS', 'NodeJS', 'MongoDB', 'ExpressJS', 'Firebase', 'Cloudinary', 'RapidAPI', 'Redux'
    ]
  }
};

function ProjectDetails2() {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details-container">
      <header className="header">
        <Link to="/work" className="back-button">Back to Work</Link>
      </header>
      <div className="project-content">
        <h1>{project.title}</h1>
        <h3>{project.role}</h3>
        <p>{project.description}</p>
        <h4>Key Features</h4>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h4>Technologies Used</h4>
        <p>{project.technologies.join(', ')}</p>
      </div>
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
    </div>
  );
}

export default ProjectDetails2;