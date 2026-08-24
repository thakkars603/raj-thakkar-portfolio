export const SITE = {
  name: "Raj Thakkar",
  monogram: "RT",
  role: "Cybersecurity Governance, Risk & Compliance",
  title: "Assistant Vice President, Cybersecurity Compliance",
  org: "Truist Financial Corporation",
  location: "Atlanta, GA",
  email: "thakkars603@gmail.com",
  phone: "678-488-7270",
  linkedin: "https://linkedin.com/in/rajthakkar603",
  resume: "/raj-thakkar-resume.pdf",
  lede: "Ten years securing regulated financial systems through control implementation, assessment, and risk-driven engineering — now extending that architecture to enterprise AI.",
};

export const CERTIFICATIONS = [
  "Certified Information Systems Auditor (CISA)",
  "CompTIA Security+",
];

export const EDUCATION = [
  {
    degree: "Master of Science, Information Systems Audit & Control",
    school: "Georgia State University",
  },
  {
    degree: "Bachelor of Business Administration, Accounting",
    school: "Georgia Institute of Technology",
  },
];

export type Job = {
  role: string;
  org: string;
  dates: string;
  place: string;
  bullets: string[];
};

export const EXPERIENCE: Job[] = [
  {
    role: "AVP, Cybersecurity Compliance Senior Consultant",
    org: "Truist Financial Corporation",
    dates: "2022 — Present",
    place: "Atlanta, GA",
    bullets: [
      "Embed security controls into system design, operations, and change-management with platform, infrastructure, cloud, and engineering teams.",
      "Own the enterprise Cyber Maturity Assessment: methodology, regulatory mapping, SME coordination, and execution across 277+ diagnostic statements.",
      "Lead wires and funds-movement risk assessments on high-impact, time-critical payment paths; drive technically grounded remediation.",
      "Build Power Platform workflows for evidence collection, assessments, and security reporting — the same pattern now used for Copilot attestations.",
      "Evaluate Microsoft 365 Copilot and adjacent AI use cases for security, data-protection, and governance risk; shape responsible-use controls.",
    ],
  },
  {
    role: "Senior Information Security Program Strategist",
    org: "Truist Financial Corporation",
    dates: "2020 — 2022",
    place: "Atlanta, GA",
    bullets: [
      "Built cyber risk and compliance metrics that gave leadership visibility into control effectiveness, risk posture, and program maturity.",
      "Drove security-by-design across technology initiatives so engineering delivery stayed aligned to risk and compliance requirements.",
      "Produced executive risk, audit, and compliance reporting for First and Second Lines of Defense during regulatory and audit engagements.",
    ],
  },
  {
    role: "Cybersecurity & Privacy Consultant",
    org: "PwC",
    dates: "2018 — 2020",
    place: "Atlanta, GA",
    bullets: [
      "Led cybersecurity and privacy assessments for Fortune 500 financial-services clients: gap analyses, remediation roadmaps, audit-ready packs.",
      "Implemented and assessed controls mapped to NIST, ISO 27001, GDPR, CCPA, GLBA, and HIPAA.",
      "Coordinated third-party vulnerability assessments and penetration tests in high-risk environments.",
    ],
  },
  {
    role: "Information Security Analyst",
    org: "Aprio",
    dates: "2016 — 2018",
    place: "Atlanta, GA",
    bullets: [
      "Led PCI DSS assessments end to end — planning, testing, Report on Compliance, and Attestation of Compliance.",
      "Assessed access control, incident response, SDLC, and change management in regulated environments.",
      "Delivered recurring risk reporting that named gaps and the order of remediation.",
    ],
  },
  {
    role: "Internal Auditor",
    org: "Sherwin-Williams",
    dates: "2014 — 2015",
    place: "Cleveland, OH",
    bullets: [
      "Conducted financial and operational audits across 60+ retail and distribution locations.",
      "Evaluated controls over financial processes, inventory, cash handling, and operations; tracked remediation with senior management.",
    ],
  },
];

export const METHOD = [
  {
    index: "01",
    title: "Same control plane",
    body: "Generative AI is not a greenfield. Copilot, agents, and LLMs inherit the bank’s data classification, access control, change management, and vendor-risk architecture. New policy is only written where the existing control set actually has a gap.",
  },
  {
    index: "02",
    title: "Evidence at scale",
    body: "Examiners will ask who used which model, on which data, with which exception. Power Platform collection already used for CMA evidence is the same pattern for AI-use attestations — structured intake, named owners, residual-risk language.",
  },
  {
    index: "03",
    title: "Inside engineering",
    body: "Controls are embedded in system design and change-management with platform and infrastructure partners, not laminated after go-live. Residual risk is reported in language an executive can act on the same day.",
  },
] as const;

export const CATEGORIES = [
  "All",
  "AI Governance",
  "Risk & Compliance",
  "Automation",
  "Assurance",
] as const;

export type Category = (typeof CATEGORIES)[number];
export type ProjectCategory = Exclude<Category, "All">;
export type ProjectMark = "nodes" | "radar" | "flow" | "ledger" | "grid" | "shield";

export type Project = {
  id: string;
  index: string;
  title: string;
  org: string;
  dates: string;
  category: ProjectCategory;
  mark: ProjectMark;
  summary: string;
  description: string;
  outcomes: string[];
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "copilot-ai-governance",
    index: "01",
    title: "Copilot & AI Governance",
    org: "Truist",
    dates: "2024 — Present",
    category: "AI Governance",
    mark: "nodes",
    summary:
      "Put enterprise Copilot on the same control plane as the rest of the bank — before it scaled.",
    description:
      "Brought Microsoft 365 Copilot under existing financial-services controls instead of a side policy. Use cases are scored for data-protection and governance risk; responsible-use rules are written so engineering and the business can operate them, not laminate them.",
    outcomes: [
      "Evaluate Copilot and adjacent generative-AI use cases against the existing control architecture rather than a parallel AI policy.",
      "Name data-protection, access, and governance risk before adoption — including Graph connectors and over-privileged scopes.",
      "Write responsible-use constraints the business can operate: permitted data classes, human-in-the-loop where output is a control, named owners.",
      "Extend CMA-style evidence collection so Copilot attestations are auditable at enterprise scale.",
    ],
    tags: ["M365 Copilot", "LLM risk", "Data protection"],
  },
  {
    id: "cyber-maturity-assessment",
    index: "02",
    title: "Enterprise Cyber Maturity Assessment",
    org: "Truist",
    dates: "2022 — Present",
    category: "Risk & Compliance",
    mark: "radar",
    summary:
      "Own the enterprise CMA: 277+ diagnostic statements, mapped and evidenced for executives and examiners.",
    description:
      "Designed the methodology, regulatory map, SME cadence, and vendor execution for the Cyber Maturity Assessment. 277+ statements aligned to NIST CSF, ISO 27001, FFIEC, GLBA, and internal standards — narratives that hold in the room, not just in the workbook.",
    outcomes: [
      "Own methodology design, regulatory mapping, SME coordination, vendor management, and execution.",
      "Manage control evidence and narratives across 277+ diagnostic statements aligned to NIST CSF, ISO 27001, FFIEC, GLBA, and internal standards.",
      "Produce executive- and regulator-facing reporting on risk posture, control maturity, and remediation priorities.",
      "Use the same assurance pattern as the template for AI-system evidence, not a one-off workbook.",
    ],
    tags: ["NIST CSF", "ISO 27001", "FFIEC"],
  },
  {
    id: "wires-funds-risk",
    index: "03",
    title: "Wires & Funds-Movement Risk",
    org: "Truist",
    dates: "2022 — Present",
    category: "Risk & Compliance",
    mark: "flow",
    summary:
      "Risk on time-critical payment rails — wires and funds-movement where a control miss is a business event.",
    description:
      "Lead enterprise assessments across technology, operations, and security on high-impact payment paths. Gaps go to engineering with a technically grounded fix; residual risk goes to executives in language they can act on the same day.",
    outcomes: [
      "Lead enterprise wires and funds-movement risk assessments covering high-impact, time-critical transaction flows and their supporting technology and security controls.",
      "Identify security and operational risk gaps across complex technology environments.",
      "Drive pragmatic, technically grounded remediation plans with engineering and cyber teams.",
      "Report residual risk in operational language — the same discipline now applied when LLM output is allowed to act in a workflow.",
    ],
    tags: ["Payments", "Operational risk", "Control design"],
  },
  {
    id: "grc-automation",
    index: "04",
    title: "GRC Workflow Automation",
    org: "Truist",
    dates: "2022 — Present",
    category: "Automation",
    mark: "grid",
    summary:
      "Power Platform pipelines that retired spreadsheet evidence hunts for assessments and security reporting.",
    description:
      "Built Power Apps and Power Automate workflows so control evidence, assessments, and reporting run as a process, not a fire drill. The same collection pattern is what makes Copilot and AI-use attestations auditable at enterprise scale.",
    outcomes: [
      "Develop Power Apps and Power Automate solutions that streamline control evidence collection, assessment processes, and security reporting.",
      "Replace manual evidence hunts with structured intake, named owners, and repeatable reporting.",
      "Reuse the collection pattern for Copilot and AI-use attestations instead of standing up a second system of record.",
      "Keep GRC operations on the same platforms already in the environment: Power Platform, ServiceNow GRC, Archer, Microsoft 365 Security & Compliance.",
    ],
    tags: ["Power Apps", "Power Automate", "Evidence"],
  },
  {
    id: "pci-dss-program",
    index: "05",
    title: "PCI DSS Assessment Program",
    org: "Aprio",
    dates: "2016 — 2018",
    category: "Assurance",
    mark: "ledger",
    summary:
      "PCI DSS end to end — scoping through ROC and AOC, with gaps ordered by exposure.",
    description:
      "Led assessments from planning and testing through Report on Compliance and Attestation of Compliance. Access control, incident response, SDLC, and change management were in scope; recurring risk reporting named what to fix first, not what was easiest to close.",
    outcomes: [
      "Led PCI DSS assessments from scoping through ROC and AOC.",
      "Tested access control, incident response, SDLC, and change management in regulated environments.",
      "Delivered recurring risk and control reporting that ordered gaps by exposure.",
    ],
    tags: ["PCI DSS", "ROC / AOC", "Change management"],
  },
  {
    id: "fortune-500-assessments",
    index: "06",
    title: "Fortune 500 Cyber Assessments",
    org: "PwC",
    dates: "2018 — 2020",
    category: "Assurance",
    mark: "shield",
    summary:
      "Cyber and privacy assessments for Fortune 500 financial-services clients — exam packs, not slideware.",
    description:
      "Delivered gap analyses and remediation roadmaps mapped to NIST, ISO 27001, GDPR, CCPA, GLBA, and HIPAA. Coordinated third-party vulnerability testing and penetration tests, then wrote the governance documentation exams, certifications, and transformations actually used.",
    outcomes: [
      "Led assessments for Fortune 500 financial-services clients: gap analyses, remediation roadmaps, audit-ready documentation.",
      "Mapped controls to NIST, ISO 27001, GDPR, CCPA, GLBA, and HIPAA.",
      "Coordinated third-party vulnerability assessments and penetration tests.",
      "Wrote client-facing governance packs for regulatory exams, certifications, and large transformation programs.",
    ],
    tags: ["NIST", "GDPR", "Third-party testing"],
  },
];

export type Note = {
  slug: string;
  index: string;
  title: string;
  dek: string;
  topic: string;
  related: string;
  paragraphs: string[];
};

export const NOTES: Note[] = [
  {
    slug: "copilot-inherits-the-control-plane",
    index: "01",
    title: "Copilot inherits the control plane",
    dek: "Generative AI is not a greenfield. The bank already has the architecture; the work is naming what is actually new.",
    topic: "AI governance",
    related: "copilot-ai-governance",
    paragraphs: [
      "Most Copilot programs fail the first exam for a process reason, not a model reason. A parallel “AI policy” is written, the existing control environment is treated as someone else’s, and examiners are handed a training deck where they expected evidence.",
      "A regulated financial institution already operates data classification, access control, change management, third-party risk, and logging. Microsoft 365 Copilot is a new interface on those same assets. The control question is not “do we allow AI.” It is which data classes the model may see, which Graph connectors it may call, who owns residual risk, and what happens when output is allowed to act in a workflow.",
      "Map use cases to the functions already in NIST CSF and FFIEC guidance. Then name the gaps that are genuinely new: prompt injection as a data-exfiltration path, over-privileged connectors, training-data leakage, and the absence of a human-in-the-loop where the output is itself a control. Responsible-use is a control set. If it cannot be attested, it is not a control.",
      "That is the same discipline used on wires and funds-movement: time-critical paths, named owners, residual risk in language an executive can act on the same day. Copilot does not get a waiver from it.",
    ],
  },
  {
    slug: "evidence-is-what-makes-ai-auditable",
    index: "02",
    title: "Evidence is what makes AI auditable",
    dek: "Examiners will ask who used which model, on which data, with which exception. A spreadsheet will not survive that question.",
    topic: "Assurance",
    related: "grc-automation",
    paragraphs: [
      "Control narratives that hold in front of executives and examiners are not written in the week of the exam. They are collected as a process: structured intake, named owners, versioned evidence, residual-risk language. That is how a Cyber Maturity Assessment covering 277+ diagnostic statements stays defensible.",
      "AI-use programs are being stood up without that process. The typical artifact is a use-case inventory in a workbook, a responsible-use slide, and an exception log that lives in someone’s mailbox. That package will not answer the questions a regulator actually asks: which identities called which model, against which data class, under which approved use, and what was logged when it failed.",
      "The collection pattern already exists. Power Apps and Power Automate pipelines that replaced spreadsheet evidence hunts for assessments and security reporting are the same pipelines for Copilot attestations. Do not stand up a second system of record for AI. Put AI-use evidence on the GRC workflow that already produces CMA narratives.",
      "If the evidence hunt is still a spreadsheet, the AI program will fail its first exam for operations, not for the model. That is a solvable problem. It is also the one most Copilot rollouts have not solved.",
    ],
  },
  {
    slug: "residual-risk-same-day",
    index: "03",
    title: "Residual risk, same day",
    dek: "A control miss on a time-critical path is a business event. LLM output in a regulated workflow is the same class of problem.",
    topic: "Risk",
    related: "wires-funds-risk",
    paragraphs: [
      "Wires and funds-movement assessments are unforgiving because delay is itself a loss event. Technology, operations, and security controls sit on the same path. Gaps go to engineering with a technically grounded fix. Residual risk goes to executives in operational language, not a quarterly heat map.",
      "That reporting cadence is what GRC has to bring to generative AI. When Copilot or an agent is allowed to retrieve, summarize, or initiate action inside a regulated workflow, a control miss is not an IT incident with a 30-day due date. It is a business event on the day it happens: data in the wrong context, a payment instruction drafted from the wrong source, a customer communication that cannot be reconstructed.",
      "The method transfers. Identify the path. Name the control that fails closed. Put a human-in-the-loop where the output is itself a control. Report residual risk in a sentence an executive can act on before the committee cycle. That is how a compliance function earns a seat in the Copilot rollout rather than a veto after go-live.",
      "None of this requires a new framework. It requires applying the one already in use — NIST CSF, FFIEC, GLBA, internal standards — to a new interface. The architecture was never the shortage. The willingness to treat AI as in-scope was.",
    ],
  },
];

export type SkillGroup = {
  heading: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    heading: "Security & Technical",
    items: [
      "Security architecture & control implementation",
      "Cloud & infrastructure security governance",
      "Threat & vulnerability management",
      "Operational resilience",
      "Change & configuration security",
    ],
  },
  {
    heading: "AI & Automation",
    items: [
      "AI governance & responsible-use controls",
      "Microsoft 365 Copilot security & adoption",
      "Generative AI & AI agent development",
      "Copilot prompting & prompt engineering",
      "Microsoft Power Platform (Apps, Automate)",
    ],
  },
  {
    heading: "Frameworks",
    items: [
      "NIST CSF & NIST 800-53",
      "ISO 27001 · SOC 2",
      "FFIEC · GLBA",
      "GDPR · CCPA · HIPAA",
      "PCI DSS",
    ],
  },
  {
    heading: "Risk & Assurance",
    items: [
      "Cyber maturity assessments",
      "Control evidence & assurance",
      "Third-party risk",
      "Regulatory exam readiness",
      "ServiceNow GRC · Archer · M365 Security",
    ],
  },
];

export const NAV = [
  { href: "#work", label: "Work" },
  { href: "#notes", label: "Notes" },
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice" },
  { href: "#contact", label: "Contact" },
] as const;

export function getProject(id: string) {
  return PROJECTS.find((p) => p.id === id);
}

export function getNote(slug: string) {
  return NOTES.find((n) => n.slug === slug);
}

export function adjacentProject(id: string) {
  const i = PROJECTS.findIndex((p) => p.id === id);
  if (i < 0) return { prev: undefined, next: undefined };
  return {
    prev: PROJECTS[i - 1],
    next: PROJECTS[i + 1],
  };
}

export function adjacentNote(slug: string) {
  const i = NOTES.findIndex((n) => n.slug === slug);
  if (i < 0) return { prev: undefined, next: undefined };
  return {
    prev: NOTES[i - 1],
    next: NOTES[i + 1],
  };
}
