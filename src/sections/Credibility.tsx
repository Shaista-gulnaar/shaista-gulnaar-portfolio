import { useRef, useEffect } from 'react';

const institutions = [
  { name: 'M&T Bank', initial: 'M' },
  { name: 'BNY Mellon', initial: 'B' },
  { name: 'Fidelity Investments', initial: 'F' },
  { name: 'Equifax', initial: 'E' },
];

const role = 'Senior Technical Business Analyst';

export default function Credibility() {
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
            el.querySelectorAll('.cred-reveal').forEach((child, i) => {
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
      id="credibility"
      ref={sectionRef}
      style={{ background: 'var(--bg-primary)', padding: '120px 0' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: 64 }}>
          <div ref={lineRef} className="section-line" style={{ marginBottom: 20 }} />
          <div
            className="reveal cred-reveal font-dm-mono"
            style={{ fontSize: 11, color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}
          >
            Credibility
          </div>
          <h2
            className="reveal cred-reveal font-cormorant"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}
          >
            Enterprise Environments. Production Standards.
          </h2>
        </div>

        <div className="cred-grid" style={{ display: 'grid', gap: 20, alignItems: 'stretch' }}>
          {/* Left text block */}
          <div
            className="reveal cred-reveal glass-card"
            style={{ padding: '36px' }}
          >
            <p
              className="font-dm-sans"
              style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}
            >
              Demonstrated experience in enterprise banking SDLC environments requiring cross-functional collaboration across business, engineering, QA, and DevOps teams. Ownership of requirement clarity in regulated financial systems. Participation in production-grade delivery cycles with strict validation standards. Exposure to distributed systems involving APIs, batch, and event-driven architectures. Work within governance-heavy enterprise environments requiring traceability and compliance.
            </p>
          </div>

          {/* Right: 2x2 grid of institution cards */}
          <div className="cred-cards-grid">
            {institutions.map((inst, i) => (
              <InstitutionCard key={inst.name} inst={inst} index={i + 1} role={role} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .cred-grid {
          grid-template-columns: 1fr 1fr;
        }
        .cred-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 900px) {
          .cred-grid { grid-template-columns: 1fr; }
          .cred-cards-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .cred-grid { grid-template-columns: 1fr; }
          .cred-cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function InstitutionCard({ inst, index, role }: { inst: { name: string; initial: string }; index: number; role: string }) {
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
      className="reveal glass-card"
      style={{
        padding: '28px 24px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      {/* Watermark initial */}
      <div
        className="font-cormorant"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 100,
          color: 'var(--accent-gold)',
          opacity: 0.03,
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1,
        }}
      >
        {inst.initial}
      </div>

      <div
        className="font-cormorant"
        style={{ fontSize: 26, color: 'var(--accent-gold)', fontWeight: 400, marginBottom: 6, position: 'relative', zIndex: 1 }}
      >
        {inst.name}
      </div>
      <div
        className="font-dm-mono"
        style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', position: 'relative', zIndex: 1 }}
      >
        {role}
      </div>
    </div>
  );
}
