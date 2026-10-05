import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact - ${formData.name}`;

    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:mohamed.rady@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">

        <motion.div
          className="contact-intro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label contact-label">
            <span>04</span>
            Contact
          </div>

          <div className="contact-headline">
            <span>Have a project in mind?</span>

            <h2>
              Let's turn it into
              <strong> a strategy.</strong>
            </h2>

            <p>
              Whether you have a campaign in mind or simply want to discuss
              your next digital move, let's start a conversation.
            </p>
          </div>
        </motion.div>

        <div className="contact-main">

          {/* Contact Details */}
          <motion.div
            className="contact-details"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-details-intro">
              <span>GET IN TOUCH</span>

              <p>
                Tell me what you're working on and let's explore
                how digital marketing can move it forward.
              </p>
            </div>

            <div className="contact-info-list">

              <a
                href="mailto:mohamed.rady@example.com"
                className="contact-info-item"
              >
                <div className="contact-icon">
                  <Mail size={16} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>mohamed.rady@example.com</strong>
                </div>
              </a>

              <a
                href="tel:+201012345678"
                className="contact-info-item"
              >
                <div className="contact-icon">
                  <Phone size={16} />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>+20 101 234 5678</strong>
                </div>
              </a>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <MapPin size={16} />
                </div>

                <div>
                  <span>Location</span>
                  <strong>Cairo, Egypt</strong>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="form-heading">
              <span>START A CONVERSATION</span>
              <p>Fill in the details below.</p>
            </div>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="7"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a little about your project..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Send message
              <ArrowUpRight size={18} />
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;