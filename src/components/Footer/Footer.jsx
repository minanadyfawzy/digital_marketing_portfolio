import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section-container">

        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-mark">M</span>

              <span>Mohamed Rady</span>
            </a>

            <p>
              Digital Marketing Specialist focused on strategy,
              content, and measurable growth.
            </p>

            <a href="#contact" className="footer-cta">
              Start a conversation
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <span className="footer-column-title">
              Explore
            </span>

            <nav className="footer-nav">
              <a href="#about">About</a>
              <a href="#skills">Expertise</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <span className="footer-column-title">
              Contact
            </span>

            <div className="footer-contact">

              <a href="mailto:mohamed.rady@example.com">
                <Mail size={15} />
                <span>mohamed.rady@example.com</span>
              </a>

              <a href="tel:+201012345678">
                <Phone size={15} />
                <span>+20 101 234 5678</span>
              </a>

              <div>
                <MapPin size={15} />
                <span>Cairo, Egypt</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <span>
            © {currentYear} Mohamed Rady. All rights reserved.
          </span>

          <span className="footer-bottom-right">
            Digital Marketing Specialist
            <span className="footer-dot"></span>
            Cairo, Egypt
          </span>

        </div>

      </div>
    </footer>
  );
};

export default Footer;