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

export const EXPERIENCE = [
  {
    role: "AVP, Cybersecurity Compliance Senior Consultant",
    org: "Truist Financial Corporation",
    dates: "2022 — Present",
    place: "Atlanta, GA",
  },
  {
    role: "Senior Information Security Program Strategist",
    org: "Truist Financial Corporation",
    dates: "2020 — 2022",
    place: "Atlanta, GA",
  },
  {
    role: "Cybersecurity & Privacy Consultant",
    org: "PwC",
    dates: "2018 — 2020",
    place: "Atlanta, GA",
  },
  {
    role: "Information Security Analyst",
    org: "Aprio",
    dates: "2016 — 2018",
    place: "Atlanta, GA",
  },
  {
    role: "Internal Auditor",
    org: "Sherwin-Williams",
    dates: "2014 — 2015",
    place: "Cleveland, OH",
  },
];

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
    tags: ["NIST", "GDPR", "Third-party testing"],
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
      "Policy & standards development",
    ],
  },
];

export const NAV = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice" },
  { href: "#contact", label: "Contact" },
] as const;
