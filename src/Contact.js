import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

function Contact({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the form data to your server or API.
    setSubmitted(true);
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="contact-container">
      <header className="header">
        <Link to="/" className="home-icon">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Link>
      </header>
      <div className="content">
        <h1>{language === 'EN' ? 'Contact Me' : 'Contactez-moi'}</h1>

        <div className="contact-info">
          <div className="contact-section">
            <span className="label">MAIL</span>
            <span className="info">
              <a href="mailto:mohamedzahrouni2000@gmail.com">mohamedzahrouni2000@gmail.com</a>
            </span>
          </div>
          <div className="contact-section">
            <span className="label">{language === 'EN' ? 'SOCIAL MEDIA' : 'RÉSEAUX SOCIAUX'}</span>
            <span className="info">
              <a href="https://github.com/zah80" target="_blank" rel="noopener noreferrer">GitHub</a> <br />
              <a href="https://www.linkedin.com/in/mohamed-zahrouni-773204117/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>{language === 'EN' ? 'Name' : 'Nom'}:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={language === 'EN' ? 'Enter your name' : 'Entrez votre nom'}
              required
            />
            
            <label>{language === 'EN' ? 'Email' : 'Email'}:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={language === 'EN' ? 'Enter your email' : 'Entrez votre email'}
              required
            />
            
            <label>{language === 'EN' ? 'Message' : 'Message'}:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={language === 'EN' ? 'Enter your message' : 'Entrez votre message'}
              required
            ></textarea>
            
            <button type="submit">{language === 'EN' ? 'Send Message' : 'Envoyer le message'}</button>
          </form>
        </div>

        {/* Submission confirmation message */}
        {submitted && (
          <p className="confirmation-message">
            {language === 'EN'
              ? 'Your message has been sent successfully!'
              : 'Votre message a été envoyé avec succès !'}
          </p>
        )}
      </div>
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
    </div>
  );
}

export default Contact;
