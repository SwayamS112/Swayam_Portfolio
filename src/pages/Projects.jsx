import { ArrowUpRight, Check } from 'lucide-react';
import Reveal from '../components/Reveal';
import Section from '../components/Section';

const projects = [
  {
    number: '01',
    type: 'PROFESSIONAL QA / AUTOMATION WORK',
    title: 'Formetrics Dashboard Automation',
    stack: ['Playwright', 'JavaScript', 'POM', 'E2E Testing'],
    description:
      'Professional QA automation work involving dashboard workflows, UI validation, regression scenarios, test execution and automated reporting.',
    points: [
      'Playwright automation',
      'Page Object Model implementation',
      'Dashboard workflow validation',
      'Regression and UI testing',
      'Bug identification and reporting',
    ],
  },
  {
    number: '02',
    type: 'DEVELOPMENT + QA WORK',
    title: 'Popular Footwear',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    description:
      'Full-stack ecommerce application developed for a real-world footwear business, with QA coverage across product, cart, authentication and checkout workflows.',
    points: [
      'React + Node full-stack development',
      'Product and inventory workflows',
      'Authentication and cart flows',
      'Functional and regression testing',
      'Boundary and edge-case validation',
    ],
  },
];

export default function Projects() {
  return (
    <Section
      eyebrow="04 / SELECTED WORK"
      title="I don't just test products. I understand them."
      description="Professional QA automation and development work presented with the engineering context behind each project."
    >
      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.1}>
            <article className="project-card">
              <div className="project-num">{project.number}</div>

              <div className="project-content">
                <div className="project-type">{project.type}</div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="tags">
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <ul>
                  {project.points.map((point) => (
                    <li key={point}>
                      <Check size={15} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-visual">
                <div className="mini-window">
                  <div className="mini-bar">
                    <i />
                    <i />
                    <i />
                  </div>

                  {index === 0 ? (
                    <>
                      <div className="chart-lines">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="dash-cards">
                        <b>Active Deals</b>
                        <b>Regression</b>
                        <b>Tests</b>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="shoe">◢</div>
                      <div className="product-line">POPULAR FOOTWEAR</div>
                      <div className="product-line short" />
                    </>
                  )}
                </div>
                <ArrowUpRight className="project-arrow" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
