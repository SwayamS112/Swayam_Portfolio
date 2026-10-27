import { Download, ExternalLink } from 'lucide-react';
import Reveal from '../components/Reveal';
import Section from '../components/Section';

export default function Resume() {
  return (
    <Section
      eyebrow="04 / RESUME"
      title="One page. The complete picture."
      description="Review the complete resume here and open or download the PDF version whenever needed."
    >
      <Reveal>
        <div className="resume-layout">
          <div className="resume-preview-wrap">
            <iframe
              className="resume-preview"
              title="Swayam Sood resume preview"
              src="/Swayam_Sood_QA_Engineer.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
            />
          </div>

          <div className="resume-side">
            <div className="resume-icon">S/</div>
            <h3>Resume PDF</h3>
            <p>Open or download the official resume for a complete overview of my experience and qualifications.</p>

            <div className="resume-actions">
              <a
                className="btn primary"
                href="/Swayam_Sood_QA_Engineer.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={16} /> Open Resume
              </a>
              <a className="btn ghost" href="/Swayam_Sood_QA_Engineer.pdf" download>
                <Download size={16} /> Download
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
