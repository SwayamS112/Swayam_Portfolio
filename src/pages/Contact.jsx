import { ArrowUpRight, Mail, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import Reveal from '../components/Reveal';
import Section from '../components/Section';

// Replace these placeholders before publishing.
const EMAIL = 'soodswayam41@gmail.com';
const WHATSAPP = '919418473400';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('_subject', 'New Portfolio Contact — Swayam Sood');
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!response.ok) throw new Error('Unable to send message');

      form.reset();
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const isSending = status === 'sending';

  return (
    <Section
      eyebrow="08 / CONTACT"
      title={
        <>
          Let's build something <em>reliable.</em>
        </>
      }
      description="Have an opportunity, freelance requirement or just want to talk about QA and automation? Reach out directly."
    >
      <div className="contact-grid">
        <Reveal>
          <a
            className="contact-card whatsapp"
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle />
            <div>
              <small>QUICK CHAT</small>
              <h3>WhatsApp</h3>
              <p>Start a direct conversation.</p>
            </div>
            <span className="contact-arrow"><ArrowUpRight /></span>
          </a>

          <a className="contact-card email" href={`mailto:${EMAIL}`} aria-label="Send email">
            <Mail />
            <div>
              <small>EMAIL</small>
              <h3>{EMAIL}</h3>
              <p>Send me an opportunity or message.</p>
            </div>
            <span className="contact-arrow"><ArrowUpRight /></span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-top">
              <span>$ contact --init</span>
              <i>secure</i>
            </div>

            <label>
              Name
              <input required name="name" placeholder="Your name" />
            </label>

            <label>
              Email
              <input required name="email" type="email" placeholder="you@example.com" />
            </label>

            <label>
              Message
              <textarea
                required
                name="message"
                rows="5"
                placeholder="Tell me about the opportunity..."
              />
            </label>

            <button className="btn primary" type="submit">
              {isSending ? 'Sending...' : 'Send Message'} <Send size={16} />
            </button>

            {status === 'success' && (
              <p className="form-success">✓ Message sent successfully. I’ll get back to you soon.</p>
            )}

            {status === 'error' && (
              <p className="form-error">✕ Couldn’t send the message. Please try again or email me directly.</p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
