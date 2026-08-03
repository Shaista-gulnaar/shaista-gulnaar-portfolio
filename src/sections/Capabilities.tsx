import { useRef, useEffect } from 'react';

const cards = [
  {
    title: 'Enterprise Requirements Ownership',
    wide: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="3" width="14" height="18" rx="2" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <line x1="7" y1="8" x2="15" y2="8" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7" y1="12" x2="15" y2="12" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7" y1="16" x2="12" y2="16" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="8" r="3" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <line x1="18" y1="8" x2="19.5" y2="8" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <circle cx="22" cy="14" r="3" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <line x1="18" y1="14" x2="19.5" y2="14" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <line x1="22" y1="11" x2="22" y2="11" stroke="var(--accent-gold)" strokeWidth="1.5" />
      </svg>
    ),
    bullets: [
      'Own end-to-end requirement elicitation across business, operations, and engineering stakeholders',
      'Convert ambiguous business needs into structured BRD, FRD, user stories, and system specifications',
      'Define scope, dependencies, edge cases, and prioritization aligned with delivery constraints',
    ],
  },
  {
    title: 'SDLC Execution — Cross-functional Teams',
    wide: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="4" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <circle cx="5" cy="8" r="2.5" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <circle cx="23" cy="8" r="2.5" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <circle cx="5" cy="20" r="2.5" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <circle cx="23" cy="20" r="2.5" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <line x1="7.2" y1="9.5" x2="11" y2="12" stroke="var(--accent-gold)" strokeWidth="1.2" />
        <line x1="20.8" y1="9.5" x2="17" y2="12" stroke="var(--accent-gold)" strokeWidth="1.2" />
        <line x1="7.2" y1="18.5" x2="11" y2="16" stroke="var(--accent-gold)" strokeWidth="1.2" />
        <line x1="20.8" y1="18.5" x2="17" y2="16" stroke="var(--accent-gold)" strokeWidth="1.2" />
      </svg>
    ),
    bullets: [
      'Drive requirement alignment across developers, QA, architects, and DevOps teams',
      'Ensure requirements are testable, implementable, and traceable across SDLC stages',
      'Participate in sprint planning, backlog refinement, and release readiness discussions',
    ],
  },
  {
    title: 'API & Integration Specification',
    wide: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="11" width="8" height="6" rx="1.5" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <rect x="17" y="11" width="8" height="6" rx="1.5" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <line x1="11" y1="14" x2="17" y2="14" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="2 1.5" />
        <polyline points="14.5,11.5 17,14 14.5,16.5" stroke="var(--accent-gold)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="5" y1="7" x2="5" y2="11" stroke="var(--accent-gold)" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="5" y1="17" x2="5" y2="21" stroke="var(--accent-gold)" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="23" y1="7" x2="23" y2="11" stroke="var(--accent-gold)" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="23" y1="17" x2="23" y2="21" stroke="var(--accent-gold)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    bullets: [
      'Define API behavior, request/response structures, and integration rules across systems',
      'Align distributed system interactions between upstream and downstream banking platforms',
      'Ensure consistency between business logic and technical implementation',
    ],
  },
  {
    title: 'Data & Workflow Engineering Alignment',
    wide: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="4" cy="14" r="2.5" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="2.5" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <circle cx="24" cy="14" r="2.5" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <line x1="6.5" y1="14" x2="11.5" y2="14" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <line x1="16.5" y1="14" x2="21.5" y2="14" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <line x1="14" y1="11.5" x2="14" y2="6" stroke="var(--accent-gold)" strokeWidth="1.2" />
        <circle cx="14" cy="4.5" r="2" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <line x1="14" y1="16.5" x2="14" y2="22" stroke="var(--accent-gold)" strokeWidth="1.2" />
        <circle cx="14" cy="23.5" r="2" stroke="var(--accent-gold)" strokeWidth="1.5" />
      </svg>
    ),
    bullets: [
      'Define enterprise data flows across batch, real-time, and hybrid processing systems',
      'Support ETL validation, reconciliation logic, and reporting consistency',
      'Ensure data integrity across distributed financial systems',
    ],
  },
];

export default function Capabilities() {
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
            el.querySelectorAll('.section-reveal').forEach((child, i) => {
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
      id="capabilities"
      ref={sectionRef}
      style={{ background: 'var(--bg-secondary)', padding: '120px 0' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: 64 }}>
          <div ref={lineRef} className="section-line" style={{ marginBottom: 20 }} />
          <div
            className="reveal section-reveal font-dm-mono"
            style={{ fontSize: 11, color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}
          >
            Capabilities
          </div>
          <h2
            className="reveal section-reveal font-cormorant"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}
          >
            What I Own Inside Enterprise SDLC Teams
          </h2>
        </div>

        <div className="capabilities-grid" style={{ display: 'grid', gap: 20 }}>
          {cards.map((card, i) => (
            <CapabilityCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .capabilities-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .capabilities-grid .cap-wide {
          grid-column: span 2;
        }
        @media (max-width: 900px) {
          .capabilities-grid {
            grid-template-columns: 1fr;
          }
          .capabilities-grid .cap-wide {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}

function CapabilityCard({ card, index }: { card: typeof cards[0]; index: number }) {
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
      className={`reveal glass-card ${card.wide ? 'cap-wide' : ''}`}
      style={{ padding: '32px' }}
    >
      <div style={{ marginBottom: 16 }}>{card.icon}</div>
      <h3
        className="font-cormorant"
        style={{ fontSize: 22, color: 'var(--text-primary)', fontWeight: 400, marginBottom: 20 }}
      >
        {card.title}
      </h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {card.bullets.map((b, i) => (
          <li
            key={i}
            className="font-dm-sans"
            style={{ fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.65, display: 'flex', gap: 10 }}
          >
            <span style={{ color: 'var(--accent-gold)', flexShrink: 0 }}>›</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
