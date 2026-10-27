import { motion } from 'framer-motion';
import { ArrowDownRight, BriefcaseBusiness, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const cards = [
  ['01', 'TEST', 'Manual & Functional Testing', 'I approach features from requirements to real user behaviour.'],
  ['02', 'AUTOMATE', 'Playwright + JavaScript', 'I turn repeatable scenarios into maintainable end-to-end automation.'],
  ['03', 'ANALYZE', 'Debugging & Root Cause', 'I investigate failures, isolate issues and communicate defects clearly.'],
  ['04', 'BUILD', 'React + Node + MongoDB', 'Development knowledge helps me understand what is happening behind the UI.'],
];

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

export default function About() {
  return (
    <Section
      eyebrow="01 / ABOUT"
      title={
        <>
          I’m Swayam Sood.
          <br />
          <em>QA engineer with a builder’s mindset.</em>
        </>
      }
      description="I bring together quality assurance, automation thinking, and full-stack product understanding to build confidence into software from requirements to release."
    >
      <div className="about-hero">
        <div className="about-hero-copy">
          <div className="mini-tag">QUALITY ANALYST • SDET • FULL-STACK THINKER</div>
          <h2>Building confidence into every release.</h2>
          <p>
            I’m Swayam Sood, a QA Engineer and software-minded problem solver with a strong foundation in manual testing, Playwright automation,
            and modern web development. I enjoy validating product quality from the user experience side while understanding the engineering decisions
            behind the build, which helps me catch issues earlier and communicate more clearly with teams.
          </p>
          <div className="about-highlights">
            <span>Manual QA</span>
            <span>Automation</span>
            <span>Web Development</span>
            <span>Bug Analysis</span>
            <span>Release Quality</span>
          </div>
          <div className="about-stats">
            <div>
              <strong>B.E. CSE</strong>
              <small>Chitkara University</small>
            </div>
            <div>
              <strong>7.1 CGPA</strong>
              <small>Graduation result</small>
            </div>
            <div>
              <strong>QA + DEV</strong>
              <small>Dual perspective</small>
            </div>
          </div>
        </div>

        <div className="about-hero-visual">
          <div className="profile-frame">
            <img src="/swayam.jpeg" alt="Swayam Sood portrait" />
          </div>
          <div className="profile-card glass-card">
            <span className="mini-label">PROFILE</span>
            <strong>Swayam Sood</strong>
            <p>QA Engineer • Automation Specialist • Product Thinker</p>
          </div>
        </div>
      </div>

      <div className="summary-hero">
        <div className="summary-visual">
          <motion.div className="summary-orbit-wrap" animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}>
            <div className="summary-orbit">
              <span className="orbit-dot dot-one" />
              <span className="orbit-dot dot-two" />
              <span className="orbit-dot dot-three" />
            </div>
          </motion.div>

          <div className="summary-core">
            <Sparkles size={20} />
            <strong>QA</strong>
            <span>ENGINEERING MINDSET</span>
          </div>
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

      <div className="approach-grid">
        {cards.map(([number, label, heading, description], index) => (
          <Reveal key={number} delay={index * 0.08}>
            <article className="feature-card">
              <span>{number}</span>
              <label>{label}</label>
              <h3>{heading}</h3>
              <p>{description}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="quality-flow">
          <span>Understand Requirements</span>
          <i>→</i>
          <span>Design Test Cases</span>
          <i>→</i>
          <span>Execute & Analyse</span>
          <i>→</i>
          <span>Report Bugs</span>
          <i>→</i>
          <span>Verify Fixes</span>
        </div>
      </Reveal>

      <div className="summary-grid">
        <Reveal className="education-card glass-card">
          <div className="card-kicker"><GraduationCap size={16} /> EDUCATION</div>

          <div className="edu-block">
            <div className="edu-year">2022 — 2026</div>
            <h2>Chitkara University</h2>
            <p className="edu-subtitle">B.E. Computer Science & Engineering</p>
            <p className="edu-location">Baddi, Himachal Pradesh</p>
            <div className="grade-line"><strong>CGPA:</strong> 7.1</div>
          </div>

          <div className="edu-divider" />

          <div className="edu-block">
            <div className="edu-year">2019 — 2020 / 2021 — 2022</div>
            <h2>Academic Foundation</h2>
            <p className="edu-subtitle">Him Academy Public School, Vikasnagar, Hamirpur</p>
            <p className="edu-location">Himachal Pradesh, India</p>
            <div className="grade-line"><strong>10th:</strong> 72% &nbsp; <strong>12th:</strong> 68%  </div>
          </div>

          <div className="location"><MapPin size={14} /> Himachal Pradesh, India</div>
        </Reveal>

        <Reveal delay={0.08} className="journey-card glass-card">
          <div className="card-kicker"><ArrowDownRight size={16} /> CAREER JOURNEY</div>
          <h2 className="journey-heading">From Campus Placement to Quality Engineering</h2>
          <div className="journey-line">
            <span className="journey-node active" />
            <span className="journey-node" />
            <span className="journey-connector" />
          </div>
          <div className="journey-copy">
            <strong>Campus Placement → SDET → QA</strong>
            <p>I began my professional journey through campus placement at BEBO Technologies, where I started as a trainee and built a strong foundation in software fundamentals, test processes, and automation concepts. As my exposure grew, I developed a deeper interest in quality engineering, where I could combine technical understanding with structured validation and reliability-focused thinking.</p>
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
