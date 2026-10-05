import { ArrowUpRight, BarChart3, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-grid">

        {/* Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-eyebrow">
            <span className="hero-status-dot"></span>
            Digital Marketing Specialist
          </div>

          <h1>
            I turn digital
            <span> strategies </span>
            into measurable growth.
          </h1>

          <p className="hero-description">
            I help businesses grow through effective digital strategies,
            engaging content, and data-driven campaigns.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-primary-btn">
              View my work
              <ArrowUpRight size={17} />
            </a>

            <a href="#contact" className="hero-secondary-btn">
              Let's talk
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <strong>3+</strong>
              <span>Years Experience</span>
            </div>

            <div className="hero-meta-line"></div>

            <div>
              <strong>Cairo</strong>
              <span>Egypt</span>
            </div>
          </div>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="dashboard-card">

            <div className="dashboard-top">
              <div>
                <span>CAMPAIGN OVERVIEW</span>
                <h3>Performance</h3>
              </div>

              <div className="dashboard-icon">
                <BarChart3 size={18} />
              </div>
            </div>

            <div className="dashboard-main">
              <div className="dashboard-number">
                <strong>+42.8%</strong>

                <span>
                  <TrendingUp size={13} />
                  Growth
                </span>
              </div>

              <span className="dashboard-period">
                Last 5 months
              </span>
            </div>

            <div className="chart-wrapper">
              <div className="chart-grid-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <svg
                viewBox="0 0 520 190"
                preserveAspectRatio="none"
                className="chart-line"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" />
                    <stop offset="100%" />
                  </linearGradient>
                </defs>

                <path
                  d="M0,160
                  C35,158 50,140 78,145
                  C108,150 125,125 155,130
                  C185,135 205,105 238,112
                  C270,120 285,88 320,94
                  C350,100 370,70 402,75
                  C435,80 450,42 478,48
                  C495,52 505,25 520,18"
                />
              </svg>
            </div>

            <div className="dashboard-labels">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
            </div>

            <div className="dashboard-bottom">
              <div>
                <span>Reach</span>
                <strong>120K</strong>
              </div>

              <div>
                <span>Engagement</span>
                <strong>8.6K</strong>
              </div>

              <div>
                <span>Conversion</span>
                <strong>6.4%</strong>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;