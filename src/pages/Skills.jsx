import Section from '../components/Section';
import Reveal from '../components/Reveal';

const groups = [
  [
    'Testing',
    [
      'Manual Testing',
      'Exploratory Testing',
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'UI Testing',
      'Usability Testing',
      'Cross-Browser Testing',
      'Bug Report Writing',
      'Test Plan / Test Strategy',
      'Boundary Value Analysis',
    ],
  ],
  ['Automation', ['Playwright (JavaScript)', 'Page Object Model (POM)', 'Fixtures', 'End-to-End Testing', 'Assertions', 'Locators']],
  ['Tools', ['Jira (Basics)', 'GitHub', 'GitHub Actions', 'VS Code']],
  ['Concepts', ['SDLC', 'STLC', 'Agile', 'Scrum', 'Test Case Design', 'Defect Lifecycle']],
  ['Development', ['React.js', 'Node.js', 'Express.js', 'MongoDB']],
];

export default function Skills() {
  return (
    <Section
      eyebrow="03 / SKILLS"
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
            <span className="orbit-node n4">Concepts</span>
            <span className="orbit-node n5">Development</span>
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
