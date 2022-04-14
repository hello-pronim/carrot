const completionStatus = [
  { id: 0, slug: "just_an_idea", status: "Just an Idea" },
  { id: 1, slug: "design_idea", status: "Design + Idea" },
  { id: 2, slug: "code_design", status: "Code + Design" },
  { id: 3, slug: "some_sketches", status: "Some Sketches" },
  { id: 4, slug: "some_code", status: "Some Code" },
  { id: 5, slug: "existing_live_app", status: "Existing/Live App" },
];

const platforms = [
  {
    id: 0,
    slug: "shopify",
    projectType: "website",
    platform: "Shopify",
  },
  {
    id: 1,
    slug: "wordpress",
    projectType: "website",
    platform: "WordPress",
  },
  {
    id: 2,
    slug: "wix_other",
    projectType: "website",
    platform: "Wix/Other",
  },
  {
    id: 3,
    slug: "ios",
    projectType: "mobile_app",
    platform: "iOS",
  },
  {
    id: 4,
    slug: "android",
    projectType: "mobile_app",
    platform: "Android",
  },
  {
    id: 5,
    slug: "native",
    projectType: "mobile_app",
    platform: "Native (both)",
  },
];

const projectTypeData = [
  {
    id: 0,
    slug: "website",
    type: "Website",
  },
  {
    id: 1,
    slug: "mobile_app",
    type: "Mobile App",
  },
  {
    id: 2,
    slug: "logo_design",
    type: "Logo Design",
  },
  {
    id: 3,
    slug: "web_app",
    type: "Web App",
  },
  {
    id: 4,
    slug: "database",
    type: "Database",
  },
  {
    id: 5,
    slug: "architecture",
    type: "Architecture",
  },
];

export { completionStatus, platforms, projectTypeData };
