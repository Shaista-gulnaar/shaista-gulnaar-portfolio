import { useRef, useEffect } from 'react';

const steps = [
  {
    number: '01',
    title: 'System Context Analysis',
    description:
      'Understand existing enterprise systems, dependencies, and integration touchpoints before defining requirements.',
  },
  {
    number: '02',
    title: 'Requirement Structuring',
    description:
      'Convert ambiguous inputs into structured, prioritized, and testable system requirements.',
  },
  {
    number: '03',
    title: 'Engineering Alignment',
    description:
      'Collaborate with developers and architects to ensure feasibility and implementation clarity.',
  },
  {
    number: '04',
    title: 'Acceptance Criteria Definition',
    description:
      'Define precise, testable acceptance criteria aligned with QA and UAT validation.',
  },
  {
    number: '05',
    title: 'SDLC Lifecycle Ownership',
    description:
      'Support requirements through design, development, testing, and release phases ensuring full traceability.',
  },
];

export default function ExecutionLogic() {
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
            el.querySelectorAll('.exec-reveal').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 150);
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
      id="execution-approach"
      ref={sectionRef}
      style={{ background: 'var(--bg-primary)', padding: '120px 0' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: 72 }}>
          <div ref={lineRef} className="section-line" style={{ marginBottom: 20 }} />
          <div
            className="reveal exec-reveal font-dm-mono"
            style={{ fontSize: 11, color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}
          >
            Execution Approach
          </div>
          <h2
            className="reveal exec-reveal font-cormorant"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}
          >
            How I Operate Inside Delivery Teams
          </h2>
        </div>

        <div
          className="exec-steps"
          style={{
            display: 'flex',
            gap: 0,
            alignItems: 'flex-start',
          }}
        >
          {steps.map((step, i) => (
            <div key={step.number} style={{ display: 'flex', alignItems: 'flex-start', flex: 1 }}>
              <div
                className="reveal exec-reveal"
                style={{ flex: 1, textAlign: 'center', padding: '0 16px' }}
              >
                <div
                  className="font-cormorant"
                  style={{
                    fontSize: 48,
                    color: 'var(--accent-gold)',
                    fontWeight: 300,
                    lineHeight: 1,
                    marginBottom: 12,
                    opacity: 0.7,
                  }}
                >
                  {step.number}
                </div>
                <div
                  className="font-dm-sans"
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    marginBottom: 10,
                    lineHeight: 1.4,
                  }}
                >
                  {step.title}
                </div>
                <p
                  className="font-dm-sans"
                  style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}
                >
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="process-connector" />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exec-steps {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .exec-steps > div {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
