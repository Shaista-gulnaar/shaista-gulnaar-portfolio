import { useRef, useEffect } from 'react';

interface ExperienceEntry {
  company: string;
  role: string;
  techTags: string[];
  businessProblem: string;
  responsibilities: string[];
  outcome: string;
}

const entries: ExperienceEntry[] = [
  {
    company: 'Fidelity Investments',
    role: 'Senior Technical Business Analyst',
    techTags: ['Java', 'Spring Boot', 'Azure', 'Jenkins', 'Git', 'Batch Processing'],
    businessProblem:
      'Legacy health and welfare benefits platform required cloud modernization for scalability, observability, and vendor integration while maintaining uninterrupted benefits processing.',
    responsibilities: [
      'Defined migration strategy with cloud engineers and translated legacy workflows into cloud-compatible specifications',
      'Documented eligibility, enrollment, and benefits processing workflows aligned with new architecture',
      'Defined integration requirements between internal systems and external vendors and carriers',
      'Collaborated with development teams on API behavior, batch processing transitions, and system refactoring requirements',
      'Supported CI/CD pipeline alignment discussions with DevOps and engineering teams',
      'Worked with QA teams on regression testing strategy and cloud migration validation scenarios',
      'Ensured continuity requirements between legacy and modernized systems were captured and validated',
    ],
    outcome:
      'Supported migration toward cloud-enabled benefits administration platform with improved scalability, operational monitoring, and modernized integration architecture.',
  },
  {
    company: 'BNY Mellon',
    role: 'Senior Technical Business Analyst',
    techTags: ['Java', 'Spring Boot', 'Oracle', 'APIs', 'Data Aggregation Pipelines'],
    businessProblem:
      'Financial data fragmented across multiple systems resulted in inconsistent reporting outputs, duplicated logic, and inefficiencies in generating standardized financial statements for enterprise reporting and compliance.',
    responsibilities: [
      'Collaborated with backend developers to define data ingestion flows and transformation logic for financial reporting pipelines',
      'Translated business reporting requirements into structured system-level specifications including data mappings and integration rules',
      'Defined API-level data contracts between source systems and centralized reporting layer',
      'Conducted gap analysis between legacy reporting systems and target consolidated architecture',
      'Created detailed functional specifications covering reporting rules, aggregation logic, and reconciliation scenarios',
      'Coordinated with QA teams to define test scenarios for data accuracy, completeness, and consistency validation',
      'Supported UAT cycles with finance and reporting stakeholders to validate output accuracy and system behavior',
    ],
    outcome:
      'Enabled unified financial reporting architecture improving data consistency, reducing duplication, and standardizing reporting outputs across enterprise financial systems.',
  },
  {
    company: 'M&T Bank',
    role: 'Senior Technical Business Analyst',
    techTags: ['Java', 'Spring Boot', 'Spring Batch', 'Oracle', 'Drools', 'Enterprise Messaging'],
    businessProblem:
      'Bank required a unified enterprise messaging system for real-time and scheduled customer notifications across email, SMS, alerts, and voice channels handling high-volume transactional banking events reliably.',
    responsibilities: [
      'Translated business messaging requirements into technical system behavior and integration specifications',
      'Defined API contracts and message payload structures for event-driven notification flows',
      'Modeled end-to-end workflows including event ingestion, rule evaluation, batch scheduling, and multi-channel delivery',
      'Prepared BRD/FRD and detailed functional specifications aligned with system architecture',
      'Collaborated with development teams on Spring Batch processing design and Drools-based rule execution logic',
      'Worked with QA teams to design integration test scenarios covering event routing, message transformation, and delivery validation',
      'Ensured requirement traceability across APIs, batch jobs, and rule engine implementations',
    ],
    outcome:
      'Enabled scalable enterprise messaging platform with reliable multi-channel notification delivery and consistent integration across banking event systems.',
  },
  {
    company: 'Equifax',
    role: 'Senior Technical Business Analyst',
    techTags: ['GCP', 'Cloud Functions', 'Firestore', 'Redis', 'KMS', 'Microservices', 'Event-Driven'],
    businessProblem:
      'Verification ecosystem required secure, controlled payroll and employment data access without full data replication due to security, compliance, and partner trust constraints.',
    responsibilities: [
      'Worked with cloud engineers, security teams, and backend developers to define secure verification workflows and API behavior',
      'Translated compliance and security requirements into system-level access control and data handling specifications',
      'Defined API contracts, request/response structures, and routing logic for verification flows',
      'Defined event-driven and batch-based processing scenarios for partner data exchange',
      'Collaborated with QA teams on validation scenarios covering security, access control, and system routing',
      'Participated in Paychex partner onboarding requirement alignment and integration flow design',
      'Ensured traceability between business verification requirements and implemented system services',
    ],
    outcome:
      'Enabled secure verification platform reducing dependency on full data sharing while improving scalability, security posture, and partner integration flexibility.',
  },
  {
    company: 'Data Comparison Portal',
    role: 'Senior Technical Business Analyst',
    techTags: ['Java', 'Spring Boot', 'Oracle', 'ETL Workflows', 'Batch Jobs', 'Test Automation'],
    businessProblem:
      'ETL testing and validation processes required a structured mechanism to compare large datasets across multiple systems to ensure data integrity and accuracy during system testing cycles.',
    responsibilities: [
      'Collaborated with developers to define API behavior and backend logic for data comparison workflows',
      'Gathered and translated ETL validation requirements into structured functional specifications',
      'Defined data comparison rules, validation logic, and exception handling scenarios',
      'Worked with QA teams to design test cases for ETL validation and data reconciliation',
      'Defined logging and audit requirements for data comparison and traceability',
      'Participated in requirement walkthroughs and defect analysis discussions with development teams',
    ],
    outcome:
      'Improved ETL validation efficiency and accuracy by enabling structured, repeatable data comparison processes across enterprise systems.',
  },
];

function ExperienceCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), index * 120);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="reveal glass-card"
      style={{ padding: '32px 36px', position: 'relative', marginLeft: 32 }}
    >
      {/* Timeline dot */}
      <div className="timeline-dot" style={{ left: -40 }} />

      {/* Top row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <span
          className="font-cormorant"
          style={{ fontSize: 28, color: 'var(--accent-gold)', fontWeight: 400 }}
        >
          {entry.company}
        </span>
        <span
          className="font-dm-mono"
          style={{
            fontSize: 10,
            color: 'var(--text-muted)',
            background: 'rgba(201,169,110,0.08)',
            border: '1px solid var(--border-default)',
            borderRadius: 4,
            padding: '3px 9px',
            letterSpacing: '0.08em',
          }}
        >
          {entry.role}
        </span>
      </div>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
        {entry.techTags.map((tag) => (
          <span key={tag} className="tech-pill">{tag}</span>
        ))}
      </div>

      {/* Business problem */}
      <p
        className="font-dm-sans"
        style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}
      >
        {entry.businessProblem}
      </p>

      {/* Responsibilities */}
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {entry.responsibilities.map((r, i) => (
          <li
            key={i}
            className="font-dm-sans"
            style={{ fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.65, display: 'flex', gap: 10 }}
          >
            <span style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: 1 }}>›</span>
            {r}
          </li>
        ))}
      </ul>

      {/* Outcome */}
      <div className="outcome-block">
        <p
          className="font-dm-sans"
          style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}
        >
          {entry.outcome}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      style={{
        background: 'var(--bg-secondary)',
        padding: '120px 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        {/* Section header */}
        <div style={{ marginBottom: 72 }}>
          <div ref={lineRef} className="section-line" style={{ marginBottom: 20 }} />
          <div
            className="reveal section-reveal font-dm-mono"
            style={{
              fontSize: 11,
              color: 'var(--accent-gold)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Enterprise Experience
          </div>
          <h2
            className="reveal section-reveal font-cormorant"
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 300,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              maxWidth: 700,
            }}
          >
            Delivered solutions across high-scale enterprise environments, including financial services, retail, and regulated industries.
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 20 }}>
          <div className="timeline-line" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {entries.map((entry, i) => (
              <ExperienceCard key={entry.company} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
