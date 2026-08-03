import { useState, useRef, useEffect } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';

interface CaseStudy {
  id: string;
  number: string;
  institution: string;
  initial: string;
  title: string;
  categoryTags: string[];
  microSummary: string;
  transformation: string;
  highlights: string[];
  fullContent: { heading: string; body: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'cs-01',
    number: '01',
    institution: 'M&T Bank',
    initial: 'M',
    title: 'Enterprise Messaging Hub',
    categoryTags: ['Batch Processing', 'Notification Systems', 'Rules Engine Architecture'],
    microSummary:
      'Designed and translated requirements for a high-volume enterprise messaging platform supporting multi-channel banking notifications across email, SMS, text, and voice-enabled channels.',
    transformation:
      'Modernized distributed customer communication workflows through scalable batch-processing orchestration, rule-based notification routing, and operational monitoring capabilities across banking systems.',
    highlights: ['Spring Batch Orchestration', 'Multi-Channel Notifications', 'Rule-Engine Processing', 'Exception Handling', 'Enterprise Communication Pipelines'],
    fullContent: [
      {
        heading: 'BUSINESS CONTEXT',
        body: 'M&T Bank required a centralized enterprise messaging platform for high-volume customer communication. Legacy approach lacked unified system causing fragmented messaging, inconsistent delivery, limited scalability, and operational inefficiencies in batch-driven workflows.',
      },
      {
        heading: 'PROGRAM OBJECTIVE',
        body: 'Centralize customer communication across banking systems; support multi-channel delivery (Email, SMS, notifications, Alexa); handle high-volume alerts through batch-driven workflows; improve reliability and consistency.',
      },
      {
        heading: 'SYSTEM OVERVIEW',
        body: 'Platform processed banking events through: batch processing pipelines, rule-based decisioning via Drools, scheduled jobs (Atomic Scheduler, Transmission Jobs), and Spring Batch orchestration. System flow: Banking Events → Rule Evaluation → Batch Processing → Channel Selection → Notification Delivery → Logging & Audit',
      },
      {
        heading: 'ENTERPRISE INTEGRATION',
        body: 'Oracle enterprise data systems; internal banking transaction systems; downstream communication channels; Kibana logging and monitoring; external email/SMS gateways.',
      },
      {
        heading: 'RULE ENGINE & BATCH PROCESSING',
        body: 'Drools enabled dynamic notification rule evaluation, conditional routing, and message prioritization. Spring Batch handled high-volume alert processing, scheduled message generation, and retry/exception handling mechanisms.',
      },
      {
        heading: 'BA RESPONSIBILITIES',
        body: 'Facilitated requirements workshops across business, developers, QA, and operations; translated notification requirements into functional and system specifications; defined alert processing rules with Drools teams; supported Spring Batch workflow design; defined multi-channel routing logic; collaborated with QA on test scenarios; ensured requirement traceability; participated in production validation.',
      },
      {
        heading: 'KEY CHALLENGES',
        body: 'High-volume processing across multiple banking channels; consistent delivery across asynchronous systems; batch scheduling dependencies and job failures; message integrity across distributed components; coordinating rule-based logic with batch execution.',
      },
      {
        heading: 'BUSINESS OUTCOMES',
        body: 'Centralized customer communication into unified platform; improved notification consistency and reliability; enabled scalable batch-driven alert processing; supported multi-channel communication strategy; reduced legacy system fragmentation.',
      },
      {
        heading: 'VALUE POSITIONING',
        body: 'Requirements analysis for high-volume enterprise messaging systems; collaboration with Java development teams on batch processing design; Drools-based system behavior definition; SDLC alignment across Dev, QA, and Operations; structured multi-channel notification system design in banking.',
      },
    ],
  },
  {
    id: 'cs-02',
    number: '02',
    institution: 'BNY Mellon',
    initial: 'B',
    title: 'Financial Reporting Data Platform',
    categoryTags: ['Financial Data Consolidation', 'Reporting Infrastructure', 'Data Integration'],
    microSummary:
      'Supported design and analysis of a centralized financial reporting platform consolidating distributed reporting datasets into a unified reporting database architecture.',
    transformation:
      'Improved reporting consistency and enterprise data alignment through standardized financial data aggregation, structured reporting workflows, and centralized reporting infrastructure.',
    highlights: ['Financial Reporting Architecture', 'FRDB Model', 'Cross-System Integration', 'Structured Reporting Workflows', 'Regulatory Reporting'],
    fullContent: [
      {
        heading: 'BUSINESS CONTEXT',
        body: 'BNY Mellon required unified financial reporting across multiple financial applications. Challenges included fragmented data sources, inconsistent reporting structures, difficulty generating unified statements, and duplication of reporting logic across systems.',
      },
      {
        heading: 'PROGRAM OBJECTIVE',
        body: 'Introduced centralized Financial Reporting Database (FRDB) to aggregate data from multiple source systems, standardize reporting outputs, enable consistent financial statement generation, and reduce reporting logic redundancy.',
      },
      {
        heading: 'SYSTEM OVERVIEW',
        body: 'FRDB acted as centralized repository layer: data ingestion from multiple financial systems, transformation into standardized reporting structure, API-driven and batch-based data consumption, reporting layer for financial statements and analysis.',
      },
      {
        heading: 'DATA & SYSTEM INTEGRATION',
        body: 'Multiple internal banking financial systems; Oracle database layer for structured financial storage; reporting tools consuming standardized datasets; batch-driven data synchronization processes.',
      },
      {
        heading: 'REPORTING MODEL TRANSFORMATION',
        body: 'Shift from distributed reporting logic across applications → to centralized financial data model (FRDB). Enabled consistent reporting definitions, reduced duplication, standardized financial data usage across the enterprise.',
      },
      {
        heading: 'BA RESPONSIBILITIES',
        body: 'Facilitated requirements sessions with finance, reporting, and technical teams; defined functional requirements for FRDB consolidation; translated reporting needs into system specifications; supported data modeling discussions for financial aggregation layer; identified gaps between source systems and reporting requirements; ensured alignment between business reporting rules and technical implementation; collaborated with QA for financial report accuracy validation.',
      },
      {
        heading: 'KEY CHALLENGES',
        body: 'Consolidation of heterogeneous financial data sources; ensuring accuracy and consistency of reporting outputs; managing dependencies across multiple source systems; maintaining data integrity across transformation layers; aligning reporting logic with business finance requirements.',
      },
      {
        heading: 'BUSINESS OUTCOMES',
        body: 'Enabled centralized financial reporting across enterprise systems; improved consistency in financial statement generation; reduced duplication of reporting logic; strengthened financial data governance through FRDB model; improved efficiency of reporting workflows.',
      },
      {
        heading: 'VALUE POSITIONING',
        body: 'Financial system requirements analysis in banking environments; data consolidation and reporting system definition; SDLC collaboration across development and QA teams; structured financial reporting model design (FRDB); bridging business finance requirements with technical implementation; enterprise data standardization initiatives.',
      },
    ],
  },
  {
    id: 'cs-03',
    number: '03',
    institution: 'Fidelity Investments',
    initial: 'F',
    title: 'Health & Welfare Cloud Modernization',
    categoryTags: ['Cloud Migration', 'Distributed Systems', 'Modernization'],
    microSummary:
      'Contributed to modernization of distributed banking and benefits administration services migrating from on-premise infrastructure to Azure cloud-based environments.',
    transformation:
      'Enabled scalable cloud-native operational workflows by supporting migration of APIs, batch-processing systems, ETL pipelines, and distributed services into modernized Azure infrastructure.',
    highlights: ['Azure Cloud Modernization', 'Distributed Microservices', 'Batch Application Migration', 'ETL Modernization', 'Integration Optimization'],
    fullContent: [
      {
        heading: 'BUSINESS CONTEXT',
        body: 'Fidelity required modernization of Health & Welfare Benefits administration for scalability, reliability, and cloud readiness. Legacy environment faced on-prem dependency constraints, limited scalability, fragmented system integrations, and operational complexity in batch-based processing.',
      },
      {
        heading: 'PROGRAM OBJECTIVE',
        body: 'Migrate on-prem applications to Azure cloud; modernize batch processing workflows; improve system scalability and performance; enhance observability and operational monitoring; support next-generation benefits administration capabilities.',
      },
      {
        heading: 'SYSTEM OVERVIEW',
        body: 'FHB platform included: participant record keeping, eligibility determination, enrollment processing, decision support systems, carrier and vendor integrations. Modernization scope: batch applications, REST APIs, data processing services, integration components.',
      },
      {
        heading: 'CLOUD MIGRATION STRATEGY',
        body: 'Migration of Java/Spring Boot applications to Azure; modernization of batch processing workflows; CI/CD pipeline integration (Jenkins, Git); monitoring implementation via Splunk; performance optimization of existing services.',
      },
      {
        heading: 'BA RESPONSIBILITIES',
        body: 'Facilitated requirements sessions for cloud migration initiatives; translated on-prem system behavior into cloud migration requirements; defined functional and non-functional requirements for migrated applications; supported decomposition of legacy batch workflows for modernization; collaborated with DevOps and engineering teams on deployment requirements; validated system behavior post-migration with QA teams; ensured traceability of requirements across migration lifecycle.',
      },
      {
        heading: 'KEY CHALLENGES',
        body: 'Migrating complex batch processing logic to cloud environment; ensuring functional parity between on-prem and cloud systems; maintaining data consistency during migration phases; supporting hybrid system operation during transition period; ensuring observability and monitoring in distributed cloud setup.',
      },
      {
        heading: 'BUSINESS OUTCOMES',
        body: 'Successfully migrated legacy applications to Azure cloud; improved system scalability and performance; enhanced observability through Splunk integration; modernized batch processing architecture; improved CI/CD and deployment efficiency.',
      },
      {
        heading: 'VALUE POSITIONING',
        body: 'Cloud migration requirements analysis in banking environments; modernization of enterprise batch processing systems; SDLC coordination across Dev, QA, and DevOps teams; structured migration planning for legacy-to-cloud transitions; functional and non-functional requirement definition for distributed systems; collaboration across engineering and infrastructure teams.',
      },
    ],
  },
  {
    id: 'cs-04',
    number: '04',
    institution: 'Equifax / Paychex',
    initial: 'E',
    title: 'Secure Verification Exchange Platform',
    categoryTags: ['Secure Data Exchange', 'Cloud Integrations', 'Verification APIs'],
    microSummary:
      'Supported analysis and transformation of secure payroll verification workflows through a cloud-native non-reposed data exchange model integrating partner systems and verification services.',
    transformation:
      'Helped enable secure API-driven verification capabilities while reducing sensitive payroll data exposure through controlled cloud-based integration architecture and distributed verification workflows.',
    highlights: ['GCP Cloud-Native', 'Secure Verification Routing', 'Non-Reposed Data Model', 'API + Batch Hybrid', 'PII-Conscious Architecture'],
    fullContent: [
      {
        heading: 'BUSINESS CONTEXT & ENTERPRISE DRIVERS',
        body: 'Following industry-wide compliance pressure around sensitive data handling, Equifax redesigned its payroll verification ecosystem. Legacy model required full payroll dataset sharing, resulting in elevated PII exposure, reduced partner willingness to participate, and rigid tightly coupled verification workflows.',
      },
      {
        heading: 'PROGRAM OBJECTIVE',
        body: 'Non-Reposed Verification Model introduced to: support attribute-level data exposure instead of full datasets; enable onboarding of partners unwilling to share raw payroll data; modernize legacy workflows into API-driven services; integrate Paychex as first contractual non-reposed payroll partner.',
      },
      {
        heading: 'TARGET SYSTEM ARCHITECTURE (GCP)',
        body: 'Java 11/Spring Boot for API-based verification services; Cloud Functions for event-driven processing layer; Cloud Storage for secure batch file ingestion and staging; Firestore for verification metadata and transaction state management; Redis Cache for low-latency response optimization; KMS Encryption for secure handling of sensitive PII data. Architecture shift: from batch-centric verification workflows → to hybrid API + event-driven verification model.',
      },
      {
        heading: 'ENTERPRISE INTEGRATION LANDSCAPE',
        body: 'OFX/VSDH verification routing layer; TUBA batch processing framework; EDR systems; Billing Adapter services; legacy verification orchestration components. Key capability: centralized verification routing and decisioning layer responsible for evaluating incoming verification requests, determining fulfillment path (API vs batch), coordinating cross-system data flow across legacy and cloud services.',
      },
      {
        heading: 'NON-REPOSED DATA MODEL',
        body: 'Instead of full payroll dataset transfer between organizations, system supports: attribute-level verification responses; controlled API-based data exposure; partner-specific data boundaries and contracts. Shift from data-sharing model → to controlled verification execution model based on business rules and partner constraints.',
      },
      {
        heading: 'SECURITY & COMPLIANCE LAYER',
        body: 'GCP KMS encryption for data at rest and in transit; controlled API access and authorization policies; audit logging for all verification transactions; secure partner onboarding workflows; compliance-aligned data handling mechanisms.',
      },
      {
        heading: 'PARTNER ONBOARDING (PAYCHEX)',
        body: 'Mapped partner data availability to verification requirements; defined API contracts aligned with enterprise verification rules; ensured integration compatibility with OFX/VSDH routing layer; validated hybrid batch and API-based execution paths.',
      },
      {
        heading: 'BA RESPONSIBILITIES',
        body: 'Facilitated requirements elicitation across security, cloud, and integration stakeholders; translated business verification requirements into functional and non-functional system specifications; defined API behaviors, routing rules, and verification decision logic; modeled end-to-end system interactions across legacy and cloud components; identified gaps between existing verification workflows and target architecture; supported integration contract definition for Paychex onboarding; ensured traceability between business requirements and technical implementation.',
      },
      {
        heading: 'KEY CHALLENGES',
        body: 'Secure handling of sensitive PII data across distributed systems; supporting hybrid execution models (real-time API + batch processing); maintaining backward compatibility with legacy verification infrastructure; ensuring performance and low-latency response requirements; coordinating cross-system routing across heterogeneous enterprise platforms.',
      },
      {
        heading: 'BUSINESS OUTCOMES',
        body: 'Enabled secure onboarding of Paychex under Non-Reposed model; reduced dependency on full dataset sharing for verification workflows; improved enterprise trust and compliance posture; modernized legacy verification ecosystem into cloud-enabled architecture; established scalable API-based verification routing framework.',
      },
      {
        heading: 'VALUE POSITIONING',
        body: 'Enterprise system transformation within regulated financial environments; GCP cloud-native platform requirements definition; secure data exchange modeling between external partners and internal systems; API lifecycle definition and integration behavior alignment; hybrid batch and event-driven system coordination; cross-system integration analysis across legacy and modern platforms.',
      },
    ],
  },
  {
    id: 'cs-05',
    number: '05',
    institution: 'Data Comparison Portal',
    initial: 'D',
    title: 'ETL Validation & Data Comparison Platform',
    categoryTags: ['Data Validation', 'QA Enablement', 'ETL Workflow Support'],
    microSummary:
      'Supported development and workflow analysis for a centralized data comparison portal designed to validate ETL processing accuracy across distributed testing environments.',
    transformation:
      'Improved testing efficiency and operational validation workflows through structured data comparison capabilities, backend result management, and automated validation support processes.',
    highlights: ['ETL Validation Workflows', 'Backend Comparison Logic', 'QA Workflow Acceleration', 'Structured Testing Support', 'Validation Traceability'],
    fullContent: [
      {
        heading: 'BUSINESS CONTEXT',
        body: 'Enterprise data pipelines required reliable validation and comparison across multiple database tables during ETL processing cycles. Existing approaches were manual and inconsistent, dependent on SQL-level validation by engineers, time-consuming for regression testing, and not standardized across environments.',
      },
      {
        heading: 'PROGRAM OBJECTIVE',
        body: 'Standardize ETL data validation across environments; enable structured comparison of datasets across multiple tables; support QA and engineering teams during testing cycles; reduce dependency on manual validation logic; improve reliability of data quality checks in ETL workflows.',
      },
      {
        heading: 'SYSTEM OVERVIEW',
        body: 'UI/API-driven mechanism to: input dataset parameters for comparison; fetch data from multiple database tables; execute comparison logic across datasets; generate validation results for QA analysis. Core execution flow: Data Input → Table Selection → Data Extraction → Comparison Engine → Validation Output → Reporting.',
      },
      {
        heading: 'TECHNICAL INTEGRATION',
        body: 'Oracle database systems; ETL batch processing pipelines; Transmission job schedulers; backend services built on Java/Spring Boot; CI/CD pipelines via GitLab; secure configuration using KMS.',
      },
      {
        heading: 'DATA COMPARISON ENGINE',
        body: 'Row-level data validation across tables; structured comparison of ETL output datasets; mismatch identification for QA verification; structured JSON-based comparison outputs; retry and validation handling during batch execution windows. Enabled repeatable and consistent data validation for ETL pipelines across environments.',
      },
      {
        heading: 'BA RESPONSIBILITIES',
        body: 'Facilitated requirements gathering with QA, data engineering, and development teams; translated ETL validation needs into structured functional specifications; defined data comparison rules and validation scenarios; collaborated with developers on API design for comparison engine workflows; supported definition of JSON-based input/output data formats; ensured alignment between ETL pipeline behavior and validation requirements; worked with QA teams to define test scenarios and regression validation approach.',
      },
      {
        heading: 'KEY CHALLENGES',
        body: 'Handling large dataset comparisons efficiently across ETL cycles; ensuring consistency of validation logic across environments; managing dependency on batch execution timing; reducing manual validation overhead without losing accuracy; ensuring reliability of comparison results under different data states.',
      },
      {
        heading: 'BUSINESS OUTCOMES',
        body: 'Standardized ETL data validation across testing environments; reduced manual effort in data comparison and QA validation; improved accuracy and consistency of ETL regression testing; enabled reusable comparison logic across multiple projects; improved efficiency of QA cycles in data-heavy systems.',
      },
      {
        heading: 'VALUE POSITIONING',
        body: 'ETL validation and data quality requirement analysis; SDLC collaboration across QA, development, and data engineering teams; structured definition of data comparison rules and test scenarios; bridging business testing needs with technical implementation in Java-based systems; supporting batch-oriented data processing validation workflows; improving enterprise testing efficiency through structured requirement design.',
      },
    ],
  },
];

function CaseStudyCard({
  cs,
  index,
}: {
  cs: CaseStudy;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const btnRef = useMagnetic(6);

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
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="reveal glass-card"
      style={{ padding: '44px 48px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      {/* Background watermark number */}
      <div
        className="font-cormorant"
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: -10,
          right: 16,
          fontSize: 120,
          color: 'var(--accent-gold)',
          opacity: 0.04,
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        {cs.number}
      </div>

      {/* Category tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
        {cs.categoryTags.map((tag) => (
          <span key={tag} className="tech-pill">{tag}</span>
        ))}
      </div>

      {/* Institution badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
        <div
          className="font-cormorant"
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: '1px solid var(--accent-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20,
            color: 'var(--accent-gold)',
            flexShrink: 0,
          }}
        >
          {cs.initial}
        </div>
        <div>
          <div
            className="font-dm-mono"
            style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}
          >
            {cs.institution}
          </div>
          <div
            className="font-cormorant"
            style={{ fontSize: 24, color: 'var(--text-primary)', fontWeight: 400, lineHeight: 1.2 }}
          >
            {cs.title}
          </div>
        </div>
      </div>

      {/* Micro summary */}
      <p
        className="font-dm-sans"
        style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}
      >
        {cs.microSummary}
      </p>

      {/* Transformation */}
      <div
        style={{
          borderLeft: '2px solid var(--accent-gold)',
          paddingLeft: 14,
          marginBottom: 20,
        }}
      >
        <p
          className="font-dm-sans"
          style={{ fontSize: 13, color: 'var(--accent-gold)', lineHeight: 1.65, fontStyle: 'italic', margin: 0 }}
        >
          {cs.transformation}
        </p>
      </div>

      {/* Highlight chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
        {cs.highlights.map((h) => (
          <span
            key={h}
            className="font-dm-mono"
            style={{
              fontSize: 10,
              color: 'var(--text-muted)',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 4,
              padding: '3px 8px',
            }}
          >
            {h}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div style={{ marginTop: 'auto' }}>
        <button
          ref={btnRef as React.RefObject<HTMLButtonElement>}
          className="btn-primary"
          onClick={() => setExpanded(!expanded)}
          style={{ fontSize: 13, padding: '10px 22px' }}
        >
          {expanded ? 'Collapse' : 'Read Full Case Study'}
        </button>
      </div>

      {/* Expanded content */}
      <div className={`case-study-content ${expanded ? 'expanded' : ''}`}>
        <div style={{ paddingTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
          {cs.fullContent.map((section, i) => (
            <div key={i}>
              <div
                className="font-dm-mono"
                style={{
                  fontSize: 10,
                  color: 'var(--accent-gold)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}
              >
                {i + 1}. {section.heading}
              </div>
              <p
                className="font-dm-sans"
                style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}
              >
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
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
      id="case-studies"
      ref={sectionRef}
      style={{ background: 'var(--bg-primary)', padding: '120px 0' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div ref={lineRef} className="section-line" style={{ marginBottom: 20 }} />
          <div
            className="reveal section-reveal font-dm-mono"
            style={{ fontSize: 11, color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}
          >
            Case Studies
          </div>
          <h2
            className="reveal section-reveal font-cormorant"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15, marginBottom: 16 }}
          >
            Thinking Through Complex Enterprise Systems
          </h2>
          <p
            className="reveal section-reveal font-dm-sans"
            style={{ fontSize: 16, color: 'var(--text-muted)' }}
          >
            Five detailed engagements across banking, financial data, cloud, and verification ecosystems.
          </p>
        </div>

        {/* Vertical stacked layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.id} cs={cs} index={i} />
          ))}
        </div>
      </div>

      <style>{`
      `}</style>
    </section>
  );
}
