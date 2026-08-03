import { useRef, useEffect } from 'react';
import { useCountUp } from '../hooks/useCountUp';

const stats = [
  { key: 'count', label: 'Enterprise Engagements' },
  { value: 'Banking & FinServ', label: 'Domain Expertise', large: true },
  { value: 'APIs · Batch · Cloud', label: 'Technical Coverage', mono: true },
  { value: 'SDLC Embedded', label: 'Delivery Model', large: true },
];

function CountStat({ label }: { label: string }) {
  const { count, ref } = useCountUp(7, 1500);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="glass-card"
      style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
    >
      <div
        className="font-cormorant"
        style={{ fontSize: 52, color: 'var(--accent-gold)', fontWeight: 400, lineHeight: 1, marginBottom: 8 }}
      >
        {count}
      </div>
      <div
        className="font-dm-mono"
        style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
      >
        {label}
      </div>
    </div>
  );
}

export default function About() {
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
            el.querySelectorAll('.about-reveal').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 100);
            });
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ background: 'var(--bg-secondary)', padding: '120px 0' }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '0 32px',
          textAlign: 'center',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div ref={lineRef} className="section-line" style={{ margin: '0 auto 20px' }} />
          <div
            className="reveal about-reveal font-dm-mono"
            style={{ fontSize: 11, color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}
          >
            About
          </div>
          <h2
            className="reveal about-reveal font-cormorant"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}
          >
            The Professional Behind the Work
          </h2>
        </div>

        {/* Paragraphs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 64 }}>
          <p
            className="reveal about-reveal font-dm-sans"
            style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.85, margin: 0 }}
          >
            Senior Technical Business Analyst specializing in enterprise banking SDLC environments, focused on bridging business requirements with engineering implementation across distributed financial systems.
          </p>
          <p
            className="reveal about-reveal font-dm-sans"
            style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.85, margin: 0 }}
          >
            Operating across requirements engineering, system-level technical specification design, SDLC collaboration with engineering teams, and data and integration-driven enterprise platforms.
          </p>
          <p
            className="reveal about-reveal font-dm-sans"
            style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.85, margin: 0 }}
          >
            Core strength lies in translating complex business problems into structured, implementable system requirements aligned with banking architecture and delivery constraints.
          </p>
          <p
            className="reveal about-reveal font-dm-sans"
            style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, margin: 0, transitionDelay: '120ms' }}
          >
            Grounded in hands-on software engineering across Java, Spring Boot, Spring Batch, Drools, and enterprise backend systems, bringing firsthand understanding of technical constraints, code architecture, and engineering delivery realities to every BA engagement.
          </p>
        </div>

        {/* Stats */}
        <div
          className="reveal about-reveal stats-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}
        >
          <CountStat label="Enterprise Engagements" />
          {[
            { value: 'Enterprise & Regulated Industries', label: 'Domain Expertise', large: true },
          { value: '·\u00A0APIs ·\u00A0Batch ·\u00A0Cloud ·\u00A0Data', label: 'Technical Coverage', mono: true },
            { value: 'SDLC Embedded', label: 'Delivery Model', large: true },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card"
              style={{ padding: '28px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
            >
              <div
                className="font-cormorant"
                style={{
                  fontSize: 'clamp(14px, 2.2vw, 22px)',
                  color: 'var(--accent-gold)',
                  fontWeight: 400,
                  lineHeight: 1.25,
                  marginBottom: 8,
                  wordBreak: 'break-word',
                }}
              >
                {stat.value}
              </div>
              <div
                className="font-dm-mono"
                style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
