import {
  ArrowUpRight,
  BarChart3,
  Search,
  Share2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    number: '01',
    category: 'DIGITAL CAMPAIGN',
    title: 'Growth Campaign',
    description:
      'A digital campaign created for a small e-commerce brand to increase online reach and strengthen customer engagement.',
    objective: 'Increase reach & engagement',
    approach: 'Campaign planning + audience targeting',
    focus: 'Digital growth',
    icon: BarChart3,
    type: 'growth',
    results: [
      {
        value: '+42%',
        label: 'Sales Growth',
      },
      {
        value: '120K',
        label: 'Impressions',
      },
    ],
  },
  {
    number: '02',
    category: 'SOCIAL MEDIA',
    title: 'Social Media Strategy',
    description:
      'A monthly content and advertising strategy designed for a lifestyle brand with a focus on consistency and audience connection.',
    objective: 'Build a stronger social presence',
    approach: 'Content planning + paid media',
    focus: 'Brand engagement',
    icon: Share2,
    type: 'social',
    results: [
      {
        value: '+38%',
        label: 'Engagement',
      },
      {
        value: '85K',
        label: 'Monthly Reach',
      },
    ],
  },
  {
    number: '03',
    category: 'SEO',
    title: 'SEO Improvement',
    description:
      'An SEO-focused project aimed at improving website visibility through keyword research and on-page optimization.',
    objective: 'Improve organic visibility',
    approach: 'Keyword research + on-page SEO',
    focus: 'Search visibility',
    icon: Search,
    type: 'seo',
    results: [
      {
        value: '+56%',
        label: 'Organic Traffic',
      },
      {
        value: '+31%',
        label: 'Search Visibility',
      },
    ],
  },
];

const GrowthVisual = () => {
  const bars = [35, 52, 66, 82, 95];

  return (
    <div className="project-visual growth-visual">
      <div className="visual-top">
        <span>CAMPAIGN PERFORMANCE</span>
        <span>Growth</span>
      </div>

      <div className="growth-chart">
        {bars.map((height, index) => (
          <div
            key={index}
            className="growth-bar"
            style={{ height: `${height}%` }}
          ></div>
        ))}
      </div>

      <div className="visual-labels">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
      </div>
    </div>
  );
};

const SocialVisual = () => {
  return (
    <div className="project-visual social-visual">
      <div className="social-sidebar">
        <span className="social-active"></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="social-content">
        <div className="social-header">
          <span>CONTENT STRATEGY</span>
          <Share2 size={14} />
        </div>

        <div className="social-blocks">
          <div className="social-block main"></div>

          <div className="social-block small">
            <span>Engagement</span>
          </div>

          <div className="social-block white">
            <strong>38%</strong>
            <span>Monthly growth</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SeoVisual = () => {
  return (
    <div className="project-visual seo-visual">
      <div className="seo-header">
        <span>SEARCH VISIBILITY</span>
        <Search size={14} />
      </div>

      <div className="seo-search">
        <Search size={13} />
        <span>digital marketing</span>
      </div>

      <div className="seo-results">
        <div>
          <span>01</span>
          <strong>Keyword research</strong>
        </div>

        <div className="active">
          <span>02</span>
          <strong>On-page SEO</strong>
        </div>

        <div>
          <span>03</span>
          <strong>Content optimization</strong>
        </div>

        <div>
          <span>04</span>
          <strong>Technical improvements</strong>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const renderVisual = (type) => {
    if (type === 'growth') return <GrowthVisual />;
    if (type === 'social') return <SocialVisual />;
    return <SeoVisual />;
  };

  return (
    <section className="projects" id="projects">
      <div className="section-container">

        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">
            <span>03</span>
            Selected work
          </div>

          <div className="projects-heading">
            <h2>
              Strategy built around
              <span> real business goals.</span>
            </h2>

            <p>
              A selection of marketing projects focused on growth,
              visibility, and stronger audience engagement.
            </p>
          </div>
        </motion.div>

        <div className="projects-list">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className={`project-case ${index % 2 !== 0 ? 'reverse' : ''}`}
                key={project.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.7 }}
              >

                <div className="project-info">

                  <div className="project-number">
                    <span>{project.number}</span>
                    <span>{project.category}</span>
                  </div>

                  <div className="project-title-row">
                    <h3>{project.title}</h3>

                    <div className="project-icon">
                      <Icon size={18} />
                    </div>
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-details">
                    <div>
                      <span>Objective</span>
                      <strong>{project.objective}</strong>
                    </div>

                    <div>
                      <span>Approach</span>
                      <strong>{project.approach}</strong>
                    </div>

                    <div>
                      <span>Focus</span>
                      <strong>{project.focus}</strong>
                    </div>
                  </div>

                  <div className="project-results">
                    {project.results.map((result) => (
                      <div
                        className="project-result"
                        key={result.label}
                      >
                        <strong>{result.value}</strong>
                        <span>{result.label}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#contact" className="project-link">
                    Discuss a similar project
                    <ArrowUpRight size={16} />
                  </a>

                </div>

                <div className="project-visual-wrapper">
                  {renderVisual(project.type)}
                </div>

              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Projects;