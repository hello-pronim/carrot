const appCategories = [
  {
    id: 0,
    value: "educational",
    title: "Educational",
  },
  {
    id: 1,
    value: "lifestyle",
    title: "Lifestyle",
  },
  {
    id: 2,
    value: "social_media",
    title: "Social Media",
  },
  {
    id: 3,
    value: "productivity  ",
    title: "Productivity",
  },
  {
    id: 4,
    value: "entertainment",
    title: "Entertainment",
  },
  {
    id: 5,
    value: "gaming",
    title: "Gaming",
  },
];
const budgets = [
  {
    id: 0,
    value: "0-500",
    title: "$0 - $500",
  },
  {
    id: 1,
    value: "500-2500",
    title: "$500 - $2.5k",
  },
  {
    id: 2,
    value: "2500-5000",
    title: "$2.5k - $5k",
  },
  {
    id: 3,
    value: "5000-10000",
    title: "$5k - $10k",
  },
  {
    id: 4,
    value: "10000",
    title: "$10k+",
  },
  {
    id: 5,
    value: "undefined",
    title: "Not Sure",
  },
];

const completionStatus = {
  website: [
    { id: 0, value: "just_an_idea", title: "Just an Idea" },
    { id: 1, value: "design_idea", title: "Design + Idea" },
    { id: 2, value: "code_design", title: "Code + Design" },
    { id: 3, value: "some_sketches", title: "Some Sketches" },
    { id: 4, value: "some_code", title: "Some Code" },
    { id: 5, value: "existing_live_app", title: "Existing/Live App" },
  ],
  mobileApp: [
    { id: 0, value: "just_an_idea", title: "Just an Idea" },
    { id: 1, value: "design_idea", title: "Design + Idea" },
    { id: 2, value: "code_design", title: "Code + Design" },
    { id: 3, value: "some_sketches", title: "Some Sketches" },
    { id: 4, value: "some_code", title: "Some Code" },
    { id: 5, value: "existing_live_app", title: "Existing/Live App" },
  ],
  logoDesign: [
    { id: 0, value: "just_an_idea", title: "Just an Idea" },
    { id: 1, value: "existing_logo", title: "Existing Logo" },
  ],
  webApp: [
    { id: 0, value: "just_an_idea", title: "Just an Idea" },
    { id: 1, value: "design_idea", title: "Design + Idea" },
    { id: 2, value: "code_design", title: "Code + Design" },
    { id: 3, value: "some_sketches", title: "Some Sketches" },
    { id: 4, value: "some_code", title: "Some Code" },
    { id: 5, value: "existing_live_app", title: "Existing/Live App" },
  ],
  database: [
    { id: 0, value: "just_an_idea", title: "Just an Idea" },
    { id: 1, value: "live_database", title: "Live Database" },
  ],
};

const features = {
  website: [
    { id: 0, value: "news_feeds", title: "News Feeds" },
    { id: 1, value: "google_maps", title: "Google Maps" },
    { id: 2, value: "pay_portals", title: "Pay Portals" },
    { id: 3, value: "order_online", title: "Order Online" },
    { id: 4, value: "user_logins", title: "User Logins" },
    { id: 5, value: "api_integrations", title: "API Integrations" },
    { id: 6, value: "blog_posts", title: "Blog Posts" },
    { id: 7, value: "nft_crypto", title: "NFT's & Crypto" },
    { id: 8, value: "landing_pages", title: "Landing Pages" },
    { id: 9, value: "contact_forms", title: "Contact Forms" },
    { id: 10, value: "databases", title: "Databases" },
    { id: 11, value: "video_stream", title: "Video & Stream" },
    { id: 12, value: "cms", title: "CMS" },
    { id: 13, value: "breadcrumbs", title: "Breadcrumbs" },
    { id: 14, value: "top_navigation", title: "Top Navigation" },
    { id: 15, value: "seo_keywords", title: "SEO/Keywords" },
    { id: 16, value: "content_writing", title: "Content Writing" },
    { id: 17, value: "search_bars", title: "Search Bars" },
    { id: 18, value: "website_building", title: "Website Building" },
    { id: 19, value: "shopping_carts", title: "Shopping Carts" },
    { id: 20, value: "wp_plugins", title: "WP Plugins" },
    { id: 21, value: "cta", title: "Call to Action" },
    { id: 22, value: "other_platform", title: "Other Platform" },
    { id: 23, value: "slideshows", title: "Slideshows" },
    { id: 24, value: "ui_ux_design", title: "UI/UX Design" },
    { id: 25, value: "online_chat", title: "Online Chat" },
    { id: 26, value: "site_redesign", title: "Site Redesign" },
  ],
  webApp: [
    { id: 0, value: "agile_environment", title: "Agile Environment" },
    { id: 1, value: "inventory_mgmt", title: "Inventory Mgmt" },
    { id: 2, value: "pay_portals", title: "Pay Portals" },
    { id: 3, value: "scheduling", title: "Scheduling" },
    { id: 4, value: "user_logins", title: "User Logins" },
    { id: 5, value: "api_integrations", title: "API Integrations" },
    { id: 6, value: "blog_management", title: "Blog Management" },
    { id: 7, value: "member_stats", title: "Member Stats" },
    { id: 8, value: "sales_statistics", title: "Sales Statistics" },
    { id: 9, value: "sales_projections", title: "Sales/Projections" },
    { id: 10, value: "data_facilitation", title: "Data Facilitation" },
    { id: 11, value: "video_stream", title: "Video & Stream" },
    { id: 12, value: "cms", title: "CMS" },
    { id: 13, value: "market_share", title: "Market Share" },
    { id: 14, value: "calendars_events", title: "Calendars/Events" },
    { id: 15, value: "ui_elements", title: "UI Elements" },
    { id: 16, value: "user_services", title: "User Services" },
    { id: 17, value: "file_sharing", title: "File Sharing" },
    { id: 18, value: "media_storage", title: "Media Storage" },
    { id: 19, value: "transactions_payroll", title: "Transactions/Payroll" },
    { id: 20, value: "activity_bar", title: "Activity Bar" },
    { id: 21, value: "cta", title: "Call to Action" },
    { id: 22, value: "operational_stats", title: "Operational Stats" },
    { id: 23, value: "forms_tables", title: "Forms/Tables" },
    { id: 24, value: "ui_ux_design", title: "UI/UX Design" },
    { id: 25, value: "online_chat", title: "Online Chat" },
    { id: 26, value: "notifications", title: "Notifications" },
    { id: 27, value: "contact_forms", title: "Contact Forms" },
    { id: 28, value: "databases", title: "Databases" },
    { id: 29, value: "projections", title: "Projections" },
  ],
};

const platforms = [
  {
    id: 0,
    value: "shopify",
    projectType: "website",
    title: "Shopify",
  },
  {
    id: 1,
    value: "wordpress",
    projectType: "website",
    title: "WordPress",
  },
  {
    id: 2,
    value: "wix_other",
    projectType: "website",
    title: "Wix/Other",
  },
  {
    id: 3,
    value: "ios",
    projectType: "mobile_app",
    title: "iOS",
  },
  {
    id: 4,
    value: "android",
    projectType: "mobile_app",
    title: "Android",
  },
  {
    id: 5,
    value: "native",
    projectType: "mobile_app",
    title: "Native (both)",
  },
];

const projectTypes = [
  {
    id: 0,
    value: "website",
    title: "Website",
  },
  {
    id: 1,
    value: "mobileApp",
    title: "Mobile App",
  },
  {
    id: 2,
    value: "logoDesign",
    title: "Logo Design",
  },
  {
    id: 3,
    value: "webApp",
    title: "Web App",
  },
  {
    id: 4,
    value: "database",
    title: "Database",
  },
  {
    id: 5,
    value: "architecture",
    title: "Architecture",
  },
];

const quantities = [
  { id: 0, value: "1_logo", title: "1 Logo" },
  { id: 1, value: "2_logos", title: "2 Logos" },
  { id: 1, value: "3+_logos", title: "3+ Logos" },
];

const useLicensing = [
  { id: 0, value: "business", title: "Business" },
  { id: 1, value: "personal_use", title: "Personal Use" },
];

const technologies = {
  webApp: [
    { id: 0, value: "javascript", title: "JavaScript" },
    { id: 1, value: "php", title: "PHP" },
    { id: 2, value: ".net", title: ".NET" },
    { id: 3, value: "typescript", title: "TypeScript" },
    { id: 4, value: "mysql", title: "MySQL" },
    { id: 5, value: "other/idk", title: "Other/Idk" },
  ],
  database: [
    { id: 0, value: "node.js", title: "Node.js" },
    { id: 1, value: "mysql", title: "MySQL" },
    { id: 2, value: "socket.io", title: "Socket.io" },
    { id: 3, value: "mongodb", title: "MongoDB" },
    { id: 4, value: "postre", title: "Postre" },
    { id: 5, value: "other", title: "Other" },
  ],
};

export {
  appCategories,
  budgets,
  completionStatus,
  features,
  platforms,
  projectTypes,
  quantities,
  useLicensing,
  technologies,
};
