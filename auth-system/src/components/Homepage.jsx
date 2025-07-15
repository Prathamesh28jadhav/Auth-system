import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import StarIcon from '@mui/icons-material/Star';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';
import './Homepage.css';

function Homepage() {
  return (
    <Container maxWidth="lg" className="homepage-container">
      {/* Background Pattern and Icons */}
      <div className="pattern-background" />
      <div className="icon"><AccountBalanceIcon style={{ fontSize: '100px', color: '#3498db' }} /></div>
      <div className="icon"><GavelIcon style={{ fontSize: '100px', color: '#3498db' }} /></div>
      <div className="icon"><SecurityIcon style={{ fontSize: '100px', color: '#3498db' }} /></div>
      <div className="icon"><GroupIcon style={{ fontSize: '100px', color: '#3498db' }} /></div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <Typography variant="h2" className="hero-title">
            Your Trusted Legal AI Advisor
          </Typography>
          <Typography variant="h5" className="hero-subtitle">
            Empowering You with Intelligent Legal Solutions
          </Typography>
          <Button variant="contained" color="primary" className="cta-button">
            Get Started
          </Button>
        </div>
        <div className="hero-image">
          <img src="path/to/your/hero-image.jpg" alt="Legal Advisor" />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="choose-us-section">
        <div className="choose-us-content">
          <Typography variant="h4" className="choose-us-title">Why Choose Us?</Typography>
          <Typography variant="body1" className="choose-us-text">
            We provide expert legal guidance tailored to your needs. Our AI-driven analysis leverages the latest technology to deliver precise recommendations.
            <br /><br />
            Enjoy 24/7 support and have access to seasoned professionals like Sujal Shah and Soham Bhaye. Our commitment to excellence and customer satisfaction sets us apart.
          </Typography>
        </div>
        <div className="choose-us-image">
          <img src="path/to/your/choose-us-image.jpg" alt="Why Choose Us" />
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <Typography variant="h4" className="services-title">Our Services</Typography>
        <Typography variant="body1" className="services-text">
          We offer a variety of services tailored to meet your legal needs:
        </Typography>
        <ul className="services-list">
          <li>Legal Consultation</li>
          <li>Contract Review and Drafting</li>
          <li>Litigation Support</li>
          <li>Intellectual Property Protection</li>
          <li>Corporate Law Advisory</li>
        </ul>
      </div>

      {/* Lawyers Section */}
      <div className="lawyers-section">
        <div className="lawyer-card">
          <div className="lawyer-card-content">
            <Typography variant="h4" className="lawyer-title">Sujal Shah</Typography>
            <Typography variant="body1" className="lawyer-text">
              Specializing in AI Law, Sujal has a proven track record in providing exceptional legal guidance.
              <StarIcon /> 4.5/5
            </Typography>
          </div>
          <div className="lawyer-card-image">
            <img src="path/to/your/sujal-image.jpg" alt="Sujal Shah" />
          </div>
        </div>

        <div className="lawyer-card reverse">
          <div className="lawyer-card-image">
            <img src="path/to/your/soham-image.jpg" alt="Soham Bhaye" />
          </div>
          <div className="lawyer-card-content">
            <Typography variant="h4" className="lawyer-title">Soham Bhaye</Typography>
            <Typography variant="body1" className="lawyer-text">
              A dedicated lawyer with expertise in legal consulting and analysis.
              <StarIcon /> 4.5/5
            </Typography>
          </div>
        </div>
      </div>
      <div className="lawyer-card">
          <div className="lawyer-card-content">
            <Typography variant="h4" className="lawyer-title">Prathamesh</Typography>
            <Typography variant="body1" className="lawyer-text">
            "With expertise in AI Law, Prathamesh consistently delivers outstanding legal counsel, demonstrating a solid history of success in guiding clients through complex legal challenges."
              <StarIcon /> 4.5/5
            </Typography>
          </div>
          <div className="lawyer-card-image">
            <img src="path/to/your/prathamesh-image.jpg" alt="Prathamesh Jadhav" />
          </div>
        </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <Typography variant="h4" className="testimonials-title">What Our Clients Say</Typography>
        <div className="testimonial">
          <Typography variant="body1" className="testimonial-text">
            "The service was outstanding! I received valuable legal advice that helped me navigate my situation seamlessly."
          </Typography>
          <Typography variant="body2" className="testimonial-author">— Client A</Typography>
        </div>
        <div className="testimonial">
          <Typography variant="body1" className="testimonial-text">
            "I can't thank Sujal and Soham and Prathamesh enough for their professionalism and expertise. Highly recommended!"
          </Typography>
          <Typography variant="body2" className="testimonial-author">— Client B</Typography>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <Typography variant="h4" className="contact-title">Contact Us</Typography>
        <div className="contact-info">
          <div className="contact-item">
            <PhoneIcon className="contact-icon" />
            <Typography variant="body1">+1 (123) 456-7890</Typography>
          </div>
          <div className="contact-item">
            <EmailIcon className="contact-icon" />
            <Typography variant="body1">info@legalaiadvisor.com</Typography>
          </div>
        </div>
        <Button variant="contained" color="primary" className="cta-button">
          Get in Touch
        </Button>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <Typography variant="body2">© 2024 Legal AI Advisor. All rights reserved.</Typography>
      </footer>
    </Container>
  );
}

export default Homepage;
