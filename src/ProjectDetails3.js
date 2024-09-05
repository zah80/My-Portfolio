import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetails3.css'; // Make sure to update the CSS file name if you change it

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
  3: {
    title: 'Best Shoes - Web Application',
    role: 'DEVELOPER | June 2024',
    description: 'Created an e-commerce platform for buying and selling shoes, enhancing product browsing with external APIs.',
    features: [
      'Developed an intuitive UI',
      'Customizable profiles',
      'Managed CRUD operations',
      'Ensured smooth E-Commerce experience by fixing bugs and integrating the contact form',
    ],
    technologies: [
      'React', 'Next JS', 'Pure CSS', 'Tailwind CSS', 'Firebase', 'Cloudinary', 'JWT', 'Rest API'
    ]
  },
  // Add more projects as needed
};

function ProjectDetails3() {
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

export default ProjectDetails3;
