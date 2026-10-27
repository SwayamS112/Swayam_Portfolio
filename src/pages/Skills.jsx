import Section from '../components/Section';
import Reveal from '../components/Reveal';

const groups = [
  [
    'Testing',
    [
      'Manual Testing',
      'Automation Testing',
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'Sanity Testing',
      'UI Testing',
      'Cross-Browser Testing',
      'Responsive Testing',
      'Test Plan',
      'Test Case Design',
      'Test Execution',
      'Defect Tracking',
      'Boundary Value Analysis',
      'Equivalence Partitioning',
      'Bug Reporting',
    ],
  ],
  [
    'Automation',
    [
      'Playwright',
      'JavaScript (ES6+)',
      'Page Object Model (POM)',
      'Fixtures',
      'Locators',
      'Assertions',
      'Waits',
      'End-to-End Testing',
      'Test Debugging',
    ],
  ],
  ['Tools', ['Jira', 'Postman (Basics)', 'Git', 'GitHub', 'VS Code']],
  ['Additional Technical Skills', ['React.js', 'Node.js', 'Express.js', 'MongoDB']],
  ['Methodologies', ['SDLC', 'STLC', 'Agile', 'Scrum', 'Defect Lifecycle', 'Version Control']],
];

export default function Skills() {
  return (
    <Section
      eyebrow="02 / SKILLS"
      title="A QA-first engineering toolkit."
      description="The skills I use to test, automate, understand and improve web applications."
    >
      <div className="skill-layout">
        <Reveal>
          <div className="skill-orbit">
            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />
            <div className="orbit orbit-3" />
            <div className="orbit-core">
              <span>QA</span>
              <b>SDET</b>
            </div>
            <span className="orbit-node n1">Testing</span>
            <span className="orbit-node n2">Automation</span>
            <span className="orbit-node n3">Tools</span>
            <span className="orbit-node n4">Methods</span>
            <span className="orbit-node n5">Tech</span>
          </div>
        </Reveal>

        <div className="skill-groups">
          {groups.map(([name, items], index) => (
            <Reveal key={name} delay={index * 0.05}>
              <div className="skill-group">
                <h3>{name}</h3>
                <div>
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
