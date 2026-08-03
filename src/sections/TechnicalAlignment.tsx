import { useRef, useEffect } from 'react';

const techCards = [
  {
    category: 'Backend & Integration Systems',
    pills: ['Java', 'Spring Boot', 'Spring Batch', 'REST APIs', 'Drools', 'Rule-Based Engines', 'Distributed Systems'],
  },
  {
    category: 'Data & Enterprise Platforms',
    pills: ['Oracle', 'Batch Processing Frameworks', 'ETL Validation', 'Reconciliation Systems', 'Data Aggregation Pipelines'],
  },
  {
    category: 'Cloud & Modernization',
    pills: ['GCP', 'Azure', 'Cloud Functions', 'Firestore', 'Redis', 'KMS', 'Microservices', 'Event-Driven Architecture'],
  },
  {
    category: 'SDLC Tooling',
    pills: ['Git', 'Jenkins', 'CI/CD Pipelines', 'Splunk', 'Kibana', 'GitLab', 'Sprint Ceremonies', 'UAT Coordination'],
  },
];

export default function TechnicalAlignment() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            lineRef.current?.classList.add('visible');
            el.querySelectorAll('.tech-reveal').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 80);
            });
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="technical-environment"
      ref={sectionRef}
      style={{ background: 'var(--bg-secondary)', padding: '120px 0' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: 64 }}>
          <div ref={lineRef} className="section-line" style={{ marginBottom: 20 }} />
          <div
            className="reveal tech-reveal font-dm-mono"
            style={{ fontSize: 11, color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}
          >
            Technical Environment
          </div>
          <h2
            className="reveal tech-reveal font-cormorant"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}
          >
            Technical Environments I Navigate
          </h2>
        </div>

        <div className="tech-grid" style={{ display: 'grid', gap: 20 }}>
          {techCards.map((card, i) => (
            <TechCard key={card.category} card={card} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .tech-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1024px) {
          .tech-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .tech-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function TechCard({ card, index }: { card: typeof techCards[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), 200 + index * 120);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="reveal glass-card tech-reveal"
      style={{ padding: '28px 24px' }}
    >
      <div
        className="font-dm-mono"
        style={{
          fontSize: 10,
          color: 'var(--accent-gold)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: 20,
        }}
      >
        {card.category}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {card.pills.map((pill) => (
          <span key={pill} className="tech-pill">{pill}</span>
        ))}
      </div>
    </div>
  );
}
