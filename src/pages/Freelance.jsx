import { ArrowRight, ArrowUpRight, Check, CheckCheck, Code2, FlaskConical, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    name: 'QA & Manual Testing',
    icon: FlaskConical,
    items: ['Functional & exploratory testing', 'Regression & smoke testing', 'Cross-browser testing'],
    outcome: 'Detailed test reports & bug logs.',
  },
  {
    name: 'Test Automation',
    icon: Code2,
    items: ['Playwright with JavaScript', 'End-to-end test automation', 'Page Object Model', 'Assertions & locators'],
    outcome: 'Maintainable automation framework.',
  },
  {
    name: 'Web Development',
    icon: Globe2,
    items: ['React.js interfaces', 'Node.js APIs', 'Express.js apps', 'MongoDB integration'],
    outcome: 'Scalable and performant solutions.',
  },
];

export default function Freelance() {
  return (
    <div className="freelance-page">
      <section className="freelance-hero">
        <div className="freelance-copy">
          <div className="eyebrow">06 / FREELANCE SERVICES</div>
          <h1>
            Reliable testing.<br />
            Better products.<br />
            <span className="gradient-text">Confident launches.</span>
          </h1>
          <p>
            I help businesses improve software quality through manual testing,
            Playwright automation and web development.
          </p>

          <div className="hero-actions">
            <Link className="btn primary" to="/contact">
              Discuss Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="freelance-visual">
          <div className="visual-ring ring-one" />
          <div className="visual-ring ring-two" />

          <div className="laptop-panel">
            <div className="laptop-screen">
              <div className="screen-checks">
                {['Test', 'Automate', 'Develop'].map((item) => (
                  <div key={item} className="check-pill">
                    <CheckCheck size={14} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="project-bar">
        <div className="project-topline">
          <span className="status-dot" />
          <small>OPEN TO NEW PROJECTS</small>
        </div>

        <div className="project-row">
          <h2>
            Have a project in mind?<br />
            <em>We can build it, test it, and improve what you already have.</em>
          </h2>
          <Link className="btn primary compact" to="/contact">
            Start a Conversation <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <div className="service-grid">
        {services.map(({ name, icon: Icon, items, outcome }, index) => (
          <article className="service-card" key={name}>
            <div className="service-head">
              <div className="service-icon">
                <Icon size={18} />
              </div>
              <h3>{name}</h3>
            </div>

            <ul className="service-list">
              {items.map((item) => (
                <li key={item}>
                  <Check size={14} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="service-outcome">
              <span>WHAT YOU GET</span>
              <strong>{outcome}</strong>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
