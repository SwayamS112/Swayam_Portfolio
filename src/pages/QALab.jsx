import { AlertTriangle, CheckCircle2, Play, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import Reveal from '../components/Reveal';
import Section from '../components/Section';

const steps = [
  'Launch browser',
  'Navigate to application',
  'Locate elements',
  'Execute test scenario',
  'Validate response',
  'Run regression',
  'Generate report',
];

export default function QALab() {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);

  const run = () => {
    setRunning(true);
    setDone(false);

    window.setTimeout(() => {
      setRunning(false);
      setDone(true);
    }, 2800);
  };

  return (
    <Section
      eyebrow="05 / QA LAB"
      title="See automation thinking in action."
      description="A small interactive demo inspired by a Playwright test runner. No fake claims — just a visual representation of how an automation suite runs."
    >
      <Reveal>
        <div className="lab">
          <div className="lab-top">
            <div>
              <i />
              <i />
              <i />
            </div>
            <span>playwright-test-runner</span>
            <button onClick={run} disabled={running}>
              {running ? (
                <>
                  <RotateCcw size={15} className="spin" /> Running
                </>
              ) : (
                <>
                  <Play size={15} /> Run Test Suite
                </>
              )}
            </button>
          </div>

          <div className="lab-body">
            <div className="lab-code">
              <div className="code-title">$ npx playwright test</div>
              {steps.map((step, index) => (
                <div
                  className={`lab-step ${running ? 'active' : ''} ${done ? 'done' : ''}`}
                  key={step}
                >
                  <CheckCircle2 size={15} />
                  <span>{step}</span>
                  <small>
                    {done || (index < 2 && !running)
                      ? 'passed'
                      : running
                        ? 'running'
                        : 'queued'}
                  </small>
                </div>
              ))}
            </div>

            <div className="lab-result">
              <div className="result-title">TEST RESULTS</div>

              <div className="result-grid">
                <div>
                  <strong>24</strong>
                  <span>Tests</span>
                </div>
                <div>
                  <strong>23</strong>
                  <span>Passed</span>
                </div>
                <div className="danger">
                  <strong>1</strong>
                  <span>Failed</span>
                </div>
                <div>
                  <strong>18.42s</strong>
                  <span>Duration</span>
                </div>
              </div>

              <div className="progress">
                <span style={{ width: done ? '96%' : running ? '62%' : '15%' }} />
              </div>

              {done ? (
                <p className="success">
                  <CheckCircle2 size={16} /> Test run completed
                </p>
              ) : (
                <p className="muted">
                  <AlertTriangle size={16} /> Demo environment
                </p>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
