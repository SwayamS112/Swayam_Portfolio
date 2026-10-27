import { motion } from 'framer-motion';
import { ArrowDownRight, BriefcaseBusiness, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const experience = [
  {
    period: 'JUN 2026 — PRESENT',
    role: 'Quality Analyst',
    company: 'Primotech',
    tone: 'cyan',
    points: [
      'Manual, functional, regression, smoke and exploratory testing for web applications.',
      'Cross-browser validation, bug reporting, retesting and client-feedback verification.',
      'Collaborating with developers to validate fixes and improve release quality.',
    ],
  },
  {
    period: 'JAN 2026 — JUN 2026',
    role: 'Software Development Engineer in Test',
    company: 'BEBO Technologies',
    tone: 'purple',
    points: [
      'Built and executed end-to-end UI automation using Playwright with JavaScript.',
      'Worked with Page Object Model, fixtures, assertions, locators and reusable test flows.',
      'Supported regression coverage and automation framework improvements.',
    ],
  },
];

export default function ProfessionalSummary() {
  return (
    <Section
      eyebrow="01 / PROFESSIONAL SUMMARY"
      title={<>The path behind <em>the tester.</em></>}
      description="A combined view of my education, professional experience and the engineering mindset I bring into QA."
    >
      <div className="summary-hero">
        <motion.div className="summary-orbit" animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}>
          <span className="orbit-dot dot-one" />
          <span className="orbit-dot dot-two" />
          <span className="orbit-dot dot-three" />
        </motion.div>
        <div className="summary-core">
          <Sparkles size={20} />
          <strong>QA</strong>
          <span>ENGINEERING MINDSET</span>
        </div>
        <div className="summary-intro-card glass-card">
          <span className="mini-label">PROFILE SIGNAL</span>
          <h2>Quality-first. Automation-ready. Developer-aware.</h2>
          <p>
            I combine structured testing with development knowledge so I can understand the product from both sides of the release cycle.
          </p>
          <div className="signal-row">
            <span><i /> Manual QA</span>
            <span><i /> Automation</span>
            <span><i /> Web Development</span>
          </div>
        </div>
      </div>

      <div className="summary-grid">
        <Reveal className="education-card glass-card">
          <div className="card-kicker"><GraduationCap size={16} /> EDUCATION</div>
          <div className="edu-year">2022 — 2026</div>
          <h2>Chitkara University</h2>
          <p>Academic journey in a technology-focused university environment, building the foundation for software engineering and quality assurance.</p>
          <div className="location"><MapPin size={14} /> Punjab, India</div>
        </Reveal>

        <Reveal delay={0.08} className="journey-card glass-card">
          <div className="card-kicker"><ArrowDownRight size={16} /> CAREER JOURNEY</div>
          <div className="journey-line">
            <span className="journey-node active" />
            <span className="journey-node" />
            <span className="journey-connector" />
          </div>
          <div className="journey-copy">
            <strong>Education → SDET → QA</strong>
            <p>Moving from engineering fundamentals into automation and then professional quality assurance.</p>
          </div>
        </Reveal>
      </div>

      <div className="experience-stack">
        <Reveal className="subsection-heading">
          <div className="eyebrow">02 / EXPERIENCE</div>
          <h2>Where I apply it.</h2>
        </Reveal>

        {experience.map((item, index) => (
          <Reveal key={item.company} delay={index * 0.08}>
            <article className={`experience-card glass-card ${item.tone}`}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-main">
                <div className="experience-meta">
                  <span>{item.period}</span>
                  <span className="live-dot"><i /> Professional Experience</span>
                </div>
                <h3>{item.role}</h3>
                <div className="company-line"><BriefcaseBusiness size={15} /> {item.company}</div>
                <ul>
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
              <div className="experience-side">
                <span>FOCUS</span>
                <div className="focus-tags">
                  {(index === 0
                    ? ['Manual QA', 'Regression', 'Bug Reporting', 'Cross-Browser']
                    : ['Playwright', 'JavaScript', 'POM', 'E2E'])
                    .map((tag) => <b key={tag}>{tag}</b>)}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
