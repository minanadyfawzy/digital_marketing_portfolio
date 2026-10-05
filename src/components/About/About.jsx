import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about section-container" id="about">
      <motion.div
        className="about-intro"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="section-label">
          <span>01</span>
          About me
        </div>

        <div className="about-heading">
          <h2>
            Marketing with a focus on
            <span> clarity, strategy, and growth.</span>
          </h2>
        </div>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="about-lead">
            I’m Mohamed, a Digital Marketing Specialist focused on helping
            businesses grow through effective digital strategies, engaging
            content, and data-driven campaigns.
          </p>

          <p>
            I enjoy turning marketing ideas into practical results. From
            building social media strategies to improving search visibility
            and analyzing campaign performance, I focus on creating work that
            has a clear purpose behind it.
          </p>

          <a href="#contact" className="about-link">
            Let's work together
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="about-stat">
            <strong>03</strong>
            <span>Years of experience</span>
          </div>

          <div className="about-stat">
            <strong>06</strong>
            <span>Core marketing skills</span>
          </div>

          <div className="about-stat">
            <strong>360°</strong>
            <span>Digital marketing mindset</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;