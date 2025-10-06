export const siteConfig = {
  name: "Lokendra \"Lucky\" Mahale — Full-Stack Developer",
  shortName: "Lucky Mahale",
  url: "https://lucky.dev", // update when deploying on Vercel
  description:
    "Full-Stack Software Developer building scalable, intelligent, and user-focused web applications with Next.js, Node.js, and modern cloud tooling.",
  links: {
    github: "https://github.com/lucky",
    linkedin: "https://www.linkedin.com/in/lokendra-mahale/",
    leetcode: "https://leetcode.com/u/lucky",
    email: "mailto:hello@lucky.dev",
  },
} as const;

export type SiteConfig = typeof siteConfig;
