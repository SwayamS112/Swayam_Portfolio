import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function Section({ eyebrow, title, description, action, children }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="eyebrow">{eyebrow}</div>
              <h1>{title}</h1>
              {description && <p>{description}</p>}
            </div>
            {action && (
              <Link className="text-link" to={action.to}>
                {action.label} <ArrowUpRight size={15} />
              </Link>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
