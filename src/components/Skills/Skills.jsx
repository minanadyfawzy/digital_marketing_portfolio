import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  {
    number: '01',
    title: 'Digital Marketing',
    description:
      'Building focused digital strategies that connect business goals with the right audience.',
  },
  {
    number: '02',
    title: 'Social Media Marketing',
    description:
      'Creating social strategies that improve brand presence, engagement, and audience connection.',
  },
  {
    number: '03',
    title: 'SEO',
    description:
      'Improving organic visibility through keyword research, on-page optimization, and content structure.',
  },
  {
    number: '04',
    title: 'Google Ads',
    description:
      'Planning and optimizing paid campaigns with attention to targeting, performance, and conversion.',
  },
  {
    number: '05',
    title: 'Content Strategy',
    description:
      'Turning ideas into structured content plans designed around audience needs and business objectives.',
  },
  {
    number: '06',
    title: 'Analytics & Reporting',
    description:
      'Using campaign data and performance insights to understand what works and guide better decisions.',
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section-container">

        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label skills-label">
            <span>02</span>
            Expertise
          </div>

          <div className="skills-heading">
            <h2>
              What I bring
              <span> to the table.</span>
            </h2>

            <p>
              A practical approach to digital marketing, combining strategy,
              creativity, and performance analysis.
            </p>
          </div>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.article
              className="skill-card"
              key={skill.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
            >
              <div className="skill-card-top">
                <span>{skill.number}</span>

                <div className="skill-card-arrow">
                  <ArrowUpRight size={17} />
                </div>
              </div>

              <div className="skill-card-content">
                <h3>{skill.title}</h3>

                <p>{skill.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;