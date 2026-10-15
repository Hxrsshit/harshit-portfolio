/**
 * Single source of truth for everything personal on the site.
 * Edit this file to change copy, links, projects or experience.
 * Components read from here, so nothing else needs to change.
 */

export type Link = { label: string; href: string };

export type Project = {
  id: string;
  name: string;
  category: string;
  status: string;
  tagline: string;
  description: string;
  detail: string;
  focus: string[];
  stack: string[];
  note?: string;
  /** Only add links that are public. Leave empty to show the project as a case study. */
  links: Link[];
};

export type Experience = {
  company: string;
  role: string;
  context: string;
  /** Optional. Leave empty ("") to hide. */
  period: string;
  markets?: string;
  points: string[];
  /** Optional aside, kept visually separate from the role itself. */
  aside?: { label: string; text: string };
  tags: string[];
};

export const site = {
  name: "Harshit Vautre",
  initials: "HV",
  headline: "GTM × AI Engineer",
  location: "Bengaluru, India",

  /**
   * Public URL once deployed (used for SEO / Open Graph).
   * On Vercel this falls back to the production domain automatically.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),

  seo: {
    title: "Harshit Vautre — GTM × AI Engineer",
    description:
      "Harshit Vautre builds AI-powered products and agentic systems, and connects them to real customers, sales and go-to-market.",
  },

  contact: {
    email: "harshit.vautrework@gmail.com",
    linkedin: "https://www.linkedin.com/in/harshit-vautre",
    github: "https://github.com/Hxrsshit",
  },

  hero: {
    eyebrow: "AI engineering × go-to-market",
    supporting:
      "I build AI-powered products at the intersection of technology, business, and growth.",
    intro:
      "I'm a computer engineering graduate, AI product builder, and GTM enthusiast exploring how intelligent systems can solve real-world business problems.",
    commands: ["./build", "./ship", "./sell"],
    facts: [
      { value: "B.Tech", label: "VIT · Class of 2025" },
      { value: "2", label: "AI products built" },
      { value: "US · UK · CA", label: "Markets sold into" },
    ],
  },

  about: {
    paragraphs: [
      "I studied computer engineering, but a lot of what I know came from building and selling. On one side I'm building Mai, a personal AI assistant with memory, tools and a permission system that I keep breaking and fixing. On the other, I've spent my days on sales calls with e-commerce brands and healthcare customers, learning what actually makes someone say yes.",
      "That mix shapes how I work. Calling a model is the easy part. Figuring out which problem it should solve, who cares enough to pay for it, and how it reaches them is harder, and far more interesting. I'm working on getting good at both.",
    ],
    pillars: [
      {
        title: "Build",
        text: "I like building AI systems end to end: models, memory, retrieval, tools, and the unglamorous reliability work that makes them usable.",
      },
      {
        title: "Solve",
        text: "Good technology starts with a real problem. I'd rather ship something small that people need than something impressive nobody uses.",
      },
      {
        title: "Sell",
        text: "Sales taught me to think about adoption: who the buyer is, what worries them, and why they'd switch. That feeds straight back into what I build.",
      },
    ],
  },

  projects: [
    {
      id: "mai",
      name: "Mai",
      category: "Personal AI assistant · Agentic AI",
      status: "Ongoing · personal prototype",
      tagline:
        "Exploring what AI assistants can become when they have memory, tools, and context.",
      description:
        "Mai is a personal AI environment designed to explore how AI assistants can move beyond conversations through persistent memory, contextual retrieval, tool usage, and orchestration.",
      detail:
        "It's local-first and single-user, built in staged iterations. Most of the work lives in the parts nobody sees: what to remember, what to retrieve, and what the assistant is allowed to do.",
      focus: [
        "LLM provider integration, with Groq for inference",
        "Persistent memory of entities and relationships in PostgreSQL",
        "Contextual retrieval with bounded context assembly",
        "Tool orchestration behind approvals, scoped permissions and an audit log",
        "API development and Docker-based local deployment",
        "Security, privacy and automated tests for reliability",
      ],
      stack: ["Python", "FastAPI", "PostgreSQL", "Groq", "Docker Compose"],
      note: "Built with AI-assisted development. The real work is reading, testing and fixing what gets generated until I understand how the system behaves.",
      links: [{ label: "View on GitHub", href: "https://github.com/Hxrsshit/Mai-san" }],
    },
    {
      id: "recomiq",
      name: "RecomIQ",
      category: "AI product · E-commerce recommendations",
      status: "Product experiment · 2026",
      tagline: "Making product discovery smarter for e-commerce brands.",
      description:
        "RecomIQ is an AI-powered product recommendation concept focused on helping e-commerce brands deliver more relevant shopping experiences.",
      detail:
        "I built it for Shopify and DTC brands in the US, UK and Canada. Half the work was product. The other half was finding out whether stores wanted it: prospect lists, cold email, store audits and demos.",
      focus: [
        "Smarter product discovery and personalised recommendations",
        "Cross-sell and upsell moments across the customer journey",
        "RecomIQ Recover: a cart-abandonment recovery concept",
        "Event tracking and analytics to understand shopper behaviour",
        "Positioning, pricing and outbound to test real demand",
      ],
      stack: ["Node.js", "PostgreSQL", "Prisma", "Redis", "React", "Tailwind"],
      // Add a public link here when one exists, e.g.
      // { label: "Visit Downtable", href: "https://www.downtable.com/" }
      links: [],
    },
  ] satisfies Project[],

  experienceIntro:
    "Alongside building, I've worked on the commercial side: prospecting, qualifying, pitching and closing. It's where I learned what customers actually care about.",

  progression: ["Engineering", "Customers", "Revenue", "AI products"],

  experience: [
    {
      company: "Upsurge Labs",
      role: "Sales / Business Development",
      context: "Healthcare & weight-management startup",
      period: "2026 — Present",
      points: [
        "Engage and convert inbound leads through qualification, calls and follow-ups",
        "Understand customer needs and manage sales conversations end to end",
        "Support customer acquisition in a startup where customer experience matters",
        "Explore early partnership opportunities",
      ],
      aside: {
        label: "Where my head goes",
        text: "Seeing the workflows up close makes me curious how AI could improve lead handling, customer conversations and day-to-day operations.",
      },
      tags: ["Inbound sales", "Customer acquisition", "Partnerships"],
    },
    {
      company: "AsteroidX",
      role: "Sales Development Representative",
      context: "Amazon marketing services",
      period: "2025 — 2026",
      markets: "US · UK · Canada",
      points: [
        "Built sales pipeline through outbound outreach and cold calls",
        "Engaged e-commerce brands and pitched Amazon storefront audits",
        "Identified opportunities to improve clients' Amazon presence",
        "Connected customer problems with the right marketing solutions",
      ],
      tags: ["Outbound", "Pipeline", "E-commerce"],
    },
  ] satisfies Experience[],

  education: {
    degree: "B.Tech, Computer & Electrical Engineering",
    school: "VIT",
    period: "Graduated 2025",
  },

  interests: [
    "Agentic AI",
    "AI Engineering",
    "AI Product Development",
    "GTM Engineering",
    "AI Automation",
    "Product Strategy",
    "Revenue Systems",
    "E-commerce AI",
    "Startup Building",
  ],

  contactCopy: {
    heading: "Building something",
    emphasis: "interesting?",
    text: "I'm always interested in connecting with people building at the intersection of AI, products, and growth.",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};
