import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, CheckCircle2, Github, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const testSteps = ['Launch browser', 'Authenticate session', 'Run test scenario', 'Validate UI state', 'Capture result'];

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="pulse-dot" />
            OPEN TO QA / SDET & FREELANCE WORK
          </motion.div>

          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            SOFTWARE QUALITY <span>×</span> AUTOMATION <span>×</span> ENGINEERING
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            I build software.<br />
            <span className="gradient-text">I test it.</span><br />
            I automate it.
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            SDET / QA Engineer with hands-on experience in manual testing, Playwright automation and web development — focused on finding risk before it reaches the user.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Link className="btn primary magnetic" to="/about">About Me <ArrowUpRight size={16} /></Link>
            <Link className="btn ghost magnetic" to="/resume">View Resume <ArrowUpRight size={16} /></Link>
          </motion.div>

          <div className="hero-meta">
            <span><i /> Based in India</span>
            <span>Playwright · JavaScript</span>
            <span>React · Node · MongoDB</span>
          </div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="visual-ring ring-one" />
          <div className="visual-ring ring-two" />
          <div className="floating-chip chip-a"><CheckCircle2 size={14} /> TEST PASSED</div>
          <div className="floating-chip chip-b"><span /> PLAYWRIGHT</div>

          <div className="terminal-card">
            <div className="terminal-top">
              <div className="window-dots"><b /><b /><b /></div>
              <span>qa-runner / latest-suite</span>
              <span className="terminal-live"><i /> LIVE</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-command"><span>$</span> npx playwright test <b>--project=chromium</b></div>
              <div className="terminal-title"><span>TEST EXECUTION</span><strong>00:18.42</strong></div>
              <div className="test-list">
                {testSteps.map((step, index) => (
                  <motion.div
                    className="check"
                    key={step}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.16 }}
                  >
                    <CheckCircle2 size={14} />
                    <span>{step}</span>
                    <small>PASS</small>
                  </motion.div>
                ))}
              </div>
              <div className="terminal-divider" />
              <div className="metrics">
                <div><small>TESTS</small><strong>24</strong></div>
                <div><small>PASSED</small><strong className="good">23</strong></div>
                <div><small>FAILED</small><strong className="warn">01</strong></div>
                <div><small>COVERAGE</small><strong>95%</strong></div>
              </div>
              <div className="progress-track"><motion.span initial={{ width: 0 }} animate={{ width: '95%' }} transition={{ delay: 1.2, duration: 1.2 }} /></div>
              <div className="terminal-footer"><span>suite completed</span><span>report generated ✓</span></div>
            </div>
          </div>
        </motion.div>

        <div className="hero-scroll"><ArrowDownRight size={14} /> Scroll to inspect the work</div>
      </section>

      <section className="signal-strip">
        <div className="container signal-grid">
          <div><span>01</span><strong>MANUAL QA</strong><small>Functional · Regression · Exploratory</small></div>
          <div><span>02</span><strong>AUTOMATION</strong><small>Playwright · JavaScript · POM</small></div>
          <div><span>03</span><strong>ENGINEERING</strong><small>React · Node · MongoDB</small></div>
          <div><span>04</span><strong>DELIVERY</strong><small>Agile · Scrum · Defect Lifecycle</small></div>
        </div>
      </section>

      <section className="home-feature container">
        <Reveal className="feature-heading">
          <div className="eyebrow">THE QA MINDSET</div>
          <h2>More than finding bugs.<br /><em>I understand how products break.</em></h2>
          <p>I approach quality through requirements, risk, execution, evidence and verification — while using development knowledge to understand what is happening underneath the UI.</p>
        </Reveal>

        <div className="feature-grid">
          <Reveal className="feature-card feature-large glass-card">
            <div className="feature-number">01</div>
            <Sparkles size={22} />
            <h3>Think in scenarios</h3>
            <p>Happy paths are only the beginning. I look for boundary conditions, unexpected inputs, broken states and regression risk.</p>
            <div className="scenario-map"><span>Requirement</span><i>→</i><span>Scenario</span><i>→</i><span>Evidence</span><i>→</i><span>Confidence</span></div>
          </Reveal>

          <Reveal delay={0.08} className="feature-card glass-card">
            <div className="feature-number">02</div>
            <Play size={22} />
            <h3>Automate repetition</h3>
            <p>Playwright automation turns repeatable regression flows into fast, reliable feedback.</p>
            <div className="code-pill">page.locator().click()</div>
          </Reveal>

          <Reveal delay={0.16} className="feature-card glass-card">
            <div className="feature-number">03</div>
            <Github size={22} />
            <h3>Understand the build</h3>
            <p>Development knowledge helps me communicate clearly with developers and debug issues faster.</p>
            <div className="stack-mini"><b>React</b><b>Node</b><b>MongoDB</b></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
