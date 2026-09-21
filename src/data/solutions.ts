export interface SolutionData {
  slug: string;
  category: string;
  title: string;
  description: string;
  flowLabel: string;
  flowNodes: string[];
  situations: string[];
  whatWeDo: { title: string; desc: string }[];
  deliverables: string[];
  process: { title: string; desc: string }[];
  measure: string[];
  faqs: { q: string; a: string }[];
}

export const solutions: SolutionData[] = [
  // ─────────────────────────────────────────────────────────────────
  // EARNED MEDIA
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "geo",
    category: "EARNED MEDIA",
    title: "Answer & Generative Engine Optimization",
    description: "Position your brand as the definitive source AI platforms cite when your audience asks questions. We optimize your content so ChatGPT, Google AI Overviews, and Perplexity reference you — not your competitors.",
    flowLabel: "AI VISIBILITY:",
    flowNodes: ["QUERY", "AI ANALYSIS", "CITATION", "AUTHORITY"],
    situations: [
      "Are losing organic traffic to AI-generated summaries",
      "Want to appear as a cited source in ChatGPT, Gemini, or Perplexity answers",
      "Have authoritative content that AI platforms are currently ignoring",
      "Need to future-proof their SEO strategy for the AI search era",
      "Want to own the narrative when AI answers questions about their industry"
    ],
    whatWeDo: [
      { title: "AI SEARCH AUDIT", desc: "We analyze how AI platforms currently perceive, cite, and represent your brand across generative search results." },
      { title: "CONTENT STRUCTURING", desc: "We restructure your content using entity-based frameworks that AI models can easily parse and reference." },
      { title: "SCHEMA & ENTITY MARKUP", desc: "We implement advanced structured data and knowledge graph signals so AI platforms recognize your authority." },
      { title: "CITATION MONITORING", desc: "We track when and how AI platforms cite your content, measuring your share of AI-generated answers." }
    ],
    deliverables: [
      "AI Visibility Audit Report",
      "Content Restructuring Roadmap",
      "Entity & Schema Implementation",
      "AI Citation Tracking Dashboard",
      "Monthly GEO Performance Reports"
    ],
    process: [
      { title: "AUDIT", desc: "We map how AI platforms currently answer questions in your industry and where your brand appears." },
      { title: "STRUCTURE", desc: "We restructure your content architecture around entities, claims, and verifiable facts." },
      { title: "OPTIMIZE", desc: "We implement schema markup, E-E-A-T signals, and citation-friendly formatting." },
      { title: "MONITOR", desc: "We track AI citations across ChatGPT, Gemini, Perplexity, and Google AI Overviews." },
      { title: "REFINE", desc: "We continuously adapt strategies as AI platforms evolve their sourcing algorithms." }
    ],
    measure: [
      "AI platform citation frequency and accuracy",
      "Share of voice in AI-generated answers",
      "Referral traffic from AI search platforms"
    ],
    faqs: [
      { q: "What is Generative Engine Optimization?", a: "GEO is the practice of optimizing your digital content so that AI-powered search platforms (like ChatGPT, Google AI Overviews, and Perplexity) cite your brand when users ask relevant questions." },
      { q: "How is GEO different from traditional SEO?", a: "Traditional SEO focuses on ranking in search result pages. GEO focuses on being the source that AI platforms reference in their generated answers. Both are complementary strategies." },
      { q: "Which AI platforms do you optimize for?", a: "We optimize for Google AI Overviews (SGE), ChatGPT, Perplexity, Gemini, and other emerging generative search platforms." },
      { q: "How long before we see results?", a: "AI citation improvements can begin within 4-8 weeks as platforms re-crawl and re-evaluate your content, though full authority building is an ongoing process." }
    ]
  },
  {
    slug: "search-engine-optimization",
    category: "EARNED MEDIA",
    title: "Search Engine Optimization",
    description: "We engineer sustainable organic visibility by improving your technical health, content relevance, and domain authority — so the right people find your business when they search.",
    flowLabel: "ORGANIC GROWTH:",
    flowNodes: ["CRAWL", "INDEX", "RANK", "CONVERT"],
    situations: [
      "Are not ranking on Google for their core business services",
      "Are losing organic traffic and leads to competitors",
      "Have a website that search engines struggle to crawl and index",
      "Want to reduce dependence on paid advertising for lead generation",
      "Need to dominate local search results in their target market"
    ],
    whatWeDo: [
      { title: "TECHNICAL SEO", desc: "We fix site architecture, core web vitals, crawlability, and indexation issues that prevent search engines from understanding your site." },
      { title: "ON-PAGE OPTIMIZATION", desc: "We align your page titles, meta descriptions, headings, and content with actual search intent and keyword opportunities." },
      { title: "CONTENT STRATEGY", desc: "We build topic clusters and pillar content that establish your authority on subjects your audience actively searches for." },
      { title: "LOCAL SEO", desc: "We optimize your Google Business Profile, local citations, and location-based content for regional market dominance." }
    ],
    deliverables: [
      "Comprehensive Technical SEO Audit",
      "Keyword Strategy & Mapping Document",
      "On-Page Optimization Implementation",
      "Google Business Profile Optimization",
      "Monthly Ranking & Traffic Reports"
    ],
    process: [
      { title: "AUDIT", desc: "We analyze your site's technical health, content gaps, backlink profile, and current search performance." },
      { title: "STRATEGY", desc: "We define keyword priorities, content roadmaps, and technical remediation plans." },
      { title: "OPTIMIZE", desc: "We implement technical fixes, optimize existing pages, and restructure content architecture." },
      { title: "PUBLISH", desc: "We create and deploy search-focused content targeting high-value keyword opportunities." },
      { title: "MEASURE", desc: "We track rankings, impressions, organic traffic, and ultimately, business leads from search." }
    ],
    measure: [
      "Organic search impressions and click-through rates",
      "Keyword ranking improvements across target terms",
      "Qualified organic traffic and lead generation volume"
    ],
    faqs: [
      { q: "Do you guarantee first-page rankings?", a: "No. SEO results depend on competition, search demand, site history, and algorithmic factors. We focus on improving technical health, relevance, and measurable organic performance." },
      { q: "How long does SEO take to show results?", a: "Technical improvements can show impact within weeks. Significant ranking and traffic growth typically takes 3-6 months of consistent work." },
      { q: "Is SEO still relevant with AI search?", a: "Absolutely. Traditional search still drives the majority of web traffic, and strong SEO foundations also improve your visibility in AI-generated search results." },
      { q: "Do you build backlinks?", a: "We focus on earning links through quality content, digital PR, and strategic outreach — never through manipulative link schemes that risk penalties." }
    ]
  },
  {
    slug: "app-store-optimization",
    category: "EARNED MEDIA",
    title: "App Store Optimization",
    description: "We increase your app's discoverability and download rate by optimizing every element of your App Store and Google Play listings — from keywords to creatives.",
    flowLabel: "APP GROWTH:",
    flowNodes: ["DISCOVER", "EVALUATE", "DOWNLOAD", "RETAIN"],
    situations: [
      "Have an app that is not being found in app store search results",
      "Are getting views but not converting them into downloads",
      "Are spending heavily on paid installs and want organic growth",
      "Have poor app store ratings affecting their brand perception",
      "Are launching a new app and need a strong store presence from day one"
    ],
    whatWeDo: [
      { title: "KEYWORD RESEARCH", desc: "We identify the exact search terms your target users type in the App Store and Google Play to find apps like yours." },
      { title: "LISTING OPTIMIZATION", desc: "We optimize your app title, subtitle, description, and keyword fields to maximize search visibility." },
      { title: "CREATIVE ASSETS", desc: "We design compelling screenshots, preview videos, and app icons that convert store visitors into downloads." },
      { title: "REVIEW MANAGEMENT", desc: "We develop strategies to increase positive reviews and manage feedback that impacts your store ranking." }
    ],
    deliverables: [
      "App Store Keyword Research Report",
      "Optimized Store Listing Copy (iOS & Android)",
      "Screenshot & Preview Video Design",
      "Competitor Benchmarking Analysis",
      "Monthly ASO Performance Reports"
    ],
    process: [
      { title: "RESEARCH", desc: "We analyze your current store performance, competitor listings, and keyword opportunities." },
      { title: "OPTIMIZE", desc: "We rewrite and restructure your store listing metadata for maximum discoverability." },
      { title: "DESIGN", desc: "We create conversion-optimized screenshots and visual assets for your listing." },
      { title: "TEST", desc: "We run A/B tests on creatives and copy variations to find the highest-converting combination." },
      { title: "ITERATE", desc: "We continuously refine keywords and creatives based on performance data and seasonal trends." }
    ],
    measure: [
      "App Store search ranking for target keywords",
      "Store listing conversion rate (views to downloads)",
      "Organic install volume and growth trajectory"
    ],
    faqs: [
      { q: "Do you work with both iOS and Android?", a: "Yes. We optimize for both the Apple App Store and Google Play Store, each with their specific algorithms and best practices." },
      { q: "How quickly can ASO impact downloads?", a: "Keyword ranking changes can appear within 1-2 weeks. Sustained growth typically builds over 2-3 months of optimization." },
      { q: "Do you handle app store ad campaigns?", a: "Our ASO service focuses on organic visibility. For paid app install campaigns (Apple Search Ads, Google App campaigns), we offer that through our Paid Media services." },
      { q: "Can you help with app ratings?", a: "We implement strategic in-app review prompts and response frameworks to improve your rating over time." }
    ]
  },
  {
    slug: "content-marketing",
    category: "EARNED MEDIA",
    title: "Content Marketing",
    description: "We create strategic, high-quality content that attracts your ideal audience, establishes your expertise, and drives measurable business outcomes — not just page views.",
    flowLabel: "CONTENT ENGINE:",
    flowNodes: ["STRATEGY", "CREATE", "DISTRIBUTE", "CONVERT"],
    situations: [
      "Are publishing content but seeing no leads or business impact",
      "Lack a documented content strategy tied to business objectives",
      "Need authoritative thought leadership to differentiate from competitors",
      "Want content that ranks in search and drives qualified organic traffic",
      "Need a consistent content engine without hiring a full in-house team"
    ],
    whatWeDo: [
      { title: "CONTENT STRATEGY", desc: "We build documented content strategies mapped to your buyer journey, search demand, and business goals." },
      { title: "LONG-FORM CONTENT", desc: "We produce in-depth articles, guides, whitepapers, and case studies that establish genuine authority." },
      { title: "CONTENT DISTRIBUTION", desc: "We ensure your content reaches the right audiences through search, social, email, and strategic syndication." },
      { title: "CONVERSION OPTIMIZATION", desc: "We embed strategic calls-to-action and lead capture mechanisms within your content ecosystem." }
    ],
    deliverables: [
      "Content Strategy & Editorial Calendar",
      "SEO-Optimized Articles & Guides",
      "Lead Magnet & Gated Content Assets",
      "Distribution & Promotion Plan",
      "Monthly Content Performance Reports"
    ],
    process: [
      { title: "AUDIT", desc: "We evaluate your existing content, competitor landscape, and audience research." },
      { title: "STRATEGY", desc: "We build a content roadmap aligned to your buyer journey and search opportunities." },
      { title: "PRODUCE", desc: "We create high-quality, researched content tailored to your audience and brand voice." },
      { title: "DISTRIBUTE", desc: "We publish and promote content across owned, earned, and shared channels." },
      { title: "OPTIMIZE", desc: "We analyze performance and refine the strategy based on engagement and conversion data." }
    ],
    measure: [
      "Organic traffic generated by content",
      "Content engagement rate (time on page, scroll depth)",
      "Leads and conversions attributed to content"
    ],
    faqs: [
      { q: "How often will you publish content?", a: "Publishing frequency depends on your goals and budget. We typically recommend 4-8 pieces per month for meaningful impact, but quality always takes priority over quantity." },
      { q: "Do you write the content yourselves?", a: "Yes. Our team produces all content in-house. For highly technical industries, we collaborate with subject-matter experts from your team." },
      { q: "Will the content be optimized for SEO?", a: "Every piece is built on keyword research and search intent analysis. We write for humans first, optimized for search engines second." },
      { q: "Can you repurpose existing content?", a: "Absolutely. We often audit and refresh existing high-potential content before creating new assets — it is one of the fastest paths to results." }
    ]
  },
  {
    slug: "influencer-marketing",
    category: "EARNED MEDIA",
    title: "Influencer Marketing",
    description: "We connect your brand with authentic creators and industry voices who can introduce your products and services to engaged, trust-ready audiences at scale.",
    flowLabel: "INFLUENCE:",
    flowNodes: ["IDENTIFY", "PARTNER", "AMPLIFY", "MEASURE"],
    situations: [
      "Want to reach new audiences through trusted third-party voices",
      "Need authentic social proof and user-generated content for their brand",
      "Are launching a product and need rapid awareness among target demographics",
      "Have tried influencer campaigns before but saw no measurable ROI",
      "Want to build long-term brand ambassador relationships, not one-off posts"
    ],
    whatWeDo: [
      { title: "INFLUENCER IDENTIFICATION", desc: "We use data-driven research to find creators whose audience demographics, engagement rates, and values align with your brand." },
      { title: "CAMPAIGN STRATEGY", desc: "We design influencer campaigns with clear objectives, creative briefs, and performance benchmarks." },
      { title: "RELATIONSHIP MANAGEMENT", desc: "We handle all outreach, negotiations, contracts, and ongoing creator relationship management." },
      { title: "PERFORMANCE ANALYSIS", desc: "We track every campaign's reach, engagement, traffic, and conversions to calculate true ROI." }
    ],
    deliverables: [
      "Influencer Shortlist & Audience Analysis",
      "Campaign Strategy & Creative Briefs",
      "Contract & Compliance Management",
      "Content Approval Workflow",
      "Post-Campaign ROI Reports"
    ],
    process: [
      { title: "DEFINE", desc: "We clarify campaign goals, target audience, budget, and success metrics." },
      { title: "DISCOVER", desc: "We research and vet potential influencers using engagement data and audience quality analysis." },
      { title: "BRIEF", desc: "We create detailed creative briefs that guide content while preserving the creator's authentic voice." },
      { title: "EXECUTE", desc: "We manage the campaign timeline, content approvals, and publishing coordination." },
      { title: "ANALYZE", desc: "We measure reach, engagement, referral traffic, and conversions to quantify campaign value." }
    ],
    measure: [
      "Total reach and impression volume",
      "Engagement rate across influencer content",
      "Referral traffic and attributed conversions"
    ],
    faqs: [
      { q: "Do you work with micro-influencers or only big names?", a: "We work across all tiers. Micro and nano-influencers often deliver higher engagement rates and more authentic connections than celebrity endorsements." },
      { q: "Which platforms do you focus on?", a: "Primarily Instagram, YouTube, and LinkedIn. We select platforms based on where your target audience is most active and receptive." },
      { q: "How do you ensure brand safety?", a: "We thoroughly vet every creator's content history, audience quality, and brand alignment before recommending partnerships." },
      { q: "What is the minimum budget for influencer campaigns?", a: "Budgets vary widely based on creator tier and campaign scope. We can design effective campaigns across a range of investment levels." }
    ]
  },
  {
    slug: "organic-social-media",
    category: "EARNED MEDIA",
    title: "Organic Social Media",
    description: "We build your brand's social presence through strategic content, consistent publishing, and genuine community engagement — turning followers into advocates.",
    flowLabel: "COMMUNITY:",
    flowNodes: ["STRATEGY", "CONTENT", "ENGAGE", "GROW"],
    situations: [
      "Are posting on social media but seeing no meaningful engagement",
      "Lack a consistent visual identity and voice across social channels",
      "Do not have the time or expertise to manage social media strategically",
      "Want to build thought leadership and industry authority on LinkedIn",
      "Need high-quality visual content for Instagram, LinkedIn, or X"
    ],
    whatWeDo: [
      { title: "SOCIAL STRATEGY", desc: "We define your content pillars, audience targeting, platform priorities, and publishing cadence." },
      { title: "VISUAL CONTENT", desc: "We design premium static graphics, carousels, reels templates, and branded content assets." },
      { title: "COPYWRITING", desc: "We write engaging, platform-native captions that spark conversation and reflect your brand voice." },
      { title: "COMMUNITY MANAGEMENT", desc: "We manage engagement, respond to comments, and foster genuine relationships with your audience." }
    ],
    deliverables: [
      "Social Media Strategy Document",
      "Monthly Content Calendar & Copy",
      "Custom Designed Social Media Assets",
      "Community Management & Engagement",
      "Monthly Analytics & Performance Reports"
    ],
    process: [
      { title: "AUDIT", desc: "We review your current social presence, competitors, and audience behavior." },
      { title: "STRATEGY", desc: "We establish content pillars, visual direction, and platform-specific game plans." },
      { title: "CREATE", desc: "We design and write a full month of content, submitted for your approval." },
      { title: "PUBLISH", desc: "We handle scheduling, publishing, and real-time community engagement." },
      { title: "ANALYZE", desc: "We review performance metrics and adjust the strategy for continuous growth." }
    ],
    measure: [
      "Follower growth rate and profile visit trends",
      "Engagement rate (likes, comments, shares, saves)",
      "Inbound inquiries and leads from social channels"
    ],
    faqs: [
      { q: "Which social platforms do you manage?", a: "We focus on LinkedIn for B2B and professional services, and Instagram for visual and consumer-facing brands. We also support X (Twitter) and Facebook based on your audience." },
      { q: "Can I approve content before it goes live?", a: "Yes. We provide a full content calendar for your review and approval before anything is published." },
      { q: "Do you create video content?", a: "We create short-form video concepts, motion graphics, and reel templates. For full video production, we coordinate with specialized production partners." },
      { q: "How is this different from paid social?", a: "Organic social builds long-term brand equity and community. Paid social amplifies specific content to targeted audiences for immediate reach. Both are complementary." }
    ]
  },
  {
    slug: "email-marketing",
    category: "EARNED MEDIA",
    title: "Email Marketing",
    description: "We design and execute email campaigns that nurture leads, retain customers, and drive revenue — with strategic automation that works while you sleep.",
    flowLabel: "EMAIL ENGINE:",
    flowNodes: ["LIST", "SEGMENT", "DELIVER", "CONVERT"],
    situations: [
      "Have an email list but are not using it strategically",
      "Need automated nurture sequences to convert leads into customers",
      "Have low open rates and click-through rates on their campaigns",
      "Want to reduce churn and increase customer lifetime value",
      "Need email integrated into their broader marketing funnel"
    ],
    whatWeDo: [
      { title: "EMAIL STRATEGY", desc: "We map your email marketing to the customer journey — from welcome sequences to re-engagement campaigns." },
      { title: "TEMPLATE DESIGN", desc: "We design responsive, on-brand email templates that look flawless across every device and email client." },
      { title: "AUTOMATION FLOWS", desc: "We build automated sequences — welcome series, cart abandonment, post-purchase nurture, and win-back campaigns." },
      { title: "LIST MANAGEMENT", desc: "We implement segmentation strategies and list hygiene practices to maximize deliverability and relevance." }
    ],
    deliverables: [
      "Email Marketing Strategy & Calendar",
      "Branded Email Template Library",
      "Automated Workflow Setup & Configuration",
      "Audience Segmentation Framework",
      "Monthly Campaign Performance Reports"
    ],
    process: [
      { title: "AUDIT", desc: "We evaluate your current email setup, list health, deliverability, and past campaign performance." },
      { title: "STRATEGY", desc: "We map email touchpoints to your customer journey and define segmentation logic." },
      { title: "BUILD", desc: "We design templates, write copy, and configure automation workflows in your platform." },
      { title: "LAUNCH", desc: "We deploy campaigns and automations with proper testing and deliverability checks." },
      { title: "OPTIMIZE", desc: "We A/B test subject lines, content, and send times to continuously improve performance." }
    ],
    measure: [
      "Open rates and click-through rates",
      "Revenue attributed to email campaigns",
      "List growth rate and subscriber engagement"
    ],
    faqs: [
      { q: "Which email platforms do you work with?", a: "We work with Mailchimp, Klaviyo, HubSpot, ConvertKit, and most major email marketing platforms. We recommend the best fit based on your needs." },
      { q: "Can you help grow our email list?", a: "Yes. We design lead magnets, opt-in forms, and landing pages that drive quality subscriber growth." },
      { q: "How often should we send emails?", a: "Frequency depends on your audience and business type. We typically recommend 1-4 emails per week, tested and adjusted based on engagement data." },
      { q: "Do you handle transactional emails?", a: "We focus on marketing emails and automated sequences. Transactional emails (order confirmations, etc.) are typically handled by your e-commerce or CRM platform." }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // PAID MEDIA
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "media-strategy",
    category: "PAID MEDIA",
    title: "Media Strategy & Planning",
    description: "We develop comprehensive media strategies that allocate your budget across the right channels, at the right time, to reach the right audience — maximizing every dollar of your investment.",
    flowLabel: "MEDIA PLAN:",
    flowNodes: ["RESEARCH", "PLAN", "ALLOCATE", "OPTIMIZE"],
    situations: [
      "Are spending on ads across multiple platforms without a unified strategy",
      "Do not know which channels are actually driving their best results",
      "Want to launch into new markets or audience segments strategically",
      "Need a media plan aligned with seasonal trends and business goals",
      "Are scaling their ad spend and need professional budget management"
    ],
    whatWeDo: [
      { title: "AUDIENCE RESEARCH", desc: "We analyze your ideal customer profiles, media consumption habits, and where they can be reached most effectively." },
      { title: "CHANNEL PLANNING", desc: "We evaluate and prioritize media channels based on your goals, audience, budget, and competitive landscape." },
      { title: "BUDGET ALLOCATION", desc: "We distribute your investment across channels and campaigns using data-driven forecasting models." },
      { title: "PERFORMANCE FRAMEWORK", desc: "We establish KPI dashboards and attribution models so you know exactly what is driving results." }
    ],
    deliverables: [
      "Audience Research & Insights Report",
      "Multi-Channel Media Strategy Document",
      "Budget Allocation & Forecasting Model",
      "KPI Framework & Attribution Setup",
      "Quarterly Strategy Reviews & Adjustments"
    ],
    process: [
      { title: "RESEARCH", desc: "We analyze your market, audience, competitors, and historical campaign performance." },
      { title: "STRATEGIZE", desc: "We develop the overarching media strategy with channel mix recommendations." },
      { title: "PLAN", desc: "We create detailed media plans with budgets, timelines, and targeting frameworks." },
      { title: "EXECUTE", desc: "We coordinate campaign launches across all planned channels." },
      { title: "REVIEW", desc: "We continuously analyze cross-channel performance and reallocate budgets to highest performers." }
    ],
    measure: [
      "Cross-channel return on ad spend (ROAS)",
      "Cost efficiency per channel and campaign",
      "Incremental reach and frequency metrics"
    ],
    faqs: [
      { q: "Is media planning separate from running ads?", a: "Yes. Media strategy is the blueprint — deciding where, when, and how much to invest. Campaign execution is the implementation. We offer both as integrated or standalone services." },
      { q: "What is the minimum budget you work with?", a: "We recommend a minimum monthly ad spend that allows for meaningful data collection and optimization. This varies by industry and channel mix." },
      { q: "Do you handle media buying?", a: "Yes. We can manage the entire process from strategy through buying and optimization, or work alongside your existing media buying team." },
      { q: "How do you measure cross-channel attribution?", a: "We implement multi-touch attribution models and use tools like Google Analytics 4 and platform-specific tracking to understand the true customer journey." }
    ]
  },
  {
    slug: "paid-search",
    category: "PAID MEDIA",
    title: "Paid Search",
    description: "We capture high-intent demand through strategically managed Google Ads and Bing Ads campaigns — putting your business in front of people actively searching for what you offer.",
    flowLabel: "SEARCH ADS:",
    flowNodes: ["KEYWORD", "BID", "CONVERT", "SCALE"],
    situations: [
      "Want to capture customers who are actively searching for their services",
      "Are running Google Ads but not getting a positive return on spend",
      "Need leads quickly while organic SEO builds long-term visibility",
      "Are competing against well-funded competitors in paid search",
      "Want granular control over who sees their ads and when"
    ],
    whatWeDo: [
      { title: "KEYWORD STRATEGY", desc: "We identify high-intent, high-conversion keywords while building comprehensive negative keyword lists to eliminate waste." },
      { title: "CAMPAIGN ARCHITECTURE", desc: "We structure campaigns, ad groups, and match types for maximum relevance and quality score." },
      { title: "AD COPYWRITING", desc: "We write compelling search ads with strategic messaging, extensions, and landing page alignment." },
      { title: "BID MANAGEMENT", desc: "We optimize bidding strategies using automated and manual techniques to maximize conversions at target costs." }
    ],
    deliverables: [
      "Keyword Research & Strategy Document",
      "Campaign Structure & Setup",
      "Ad Copy & Extension Library",
      "Conversion Tracking Implementation",
      "Weekly Optimization & Monthly Reports"
    ],
    process: [
      { title: "RESEARCH", desc: "We analyze search demand, competitor ads, and your conversion potential for each keyword cluster." },
      { title: "BUILD", desc: "We architect campaign structures, write ad copy, and set up comprehensive tracking." },
      { title: "LAUNCH", desc: "We deploy campaigns with controlled budgets and close monitoring." },
      { title: "OPTIMIZE", desc: "We refine keywords, bids, ad copy, and audiences based on real conversion data." },
      { title: "SCALE", desc: "We expand successful campaigns to capture more demand while maintaining efficiency." }
    ],
    measure: [
      "Cost per conversion and cost per qualified lead",
      "Search impression share for target keywords",
      "Return on ad spend (ROAS) and conversion volume"
    ],
    faqs: [
      { q: "Google Ads vs SEO — which should I choose?", a: "Both. Paid search delivers immediate visibility for high-intent queries while SEO builds long-term organic authority. Together, they dominate the search results page." },
      { q: "How much should I budget for Google Ads?", a: "Budget depends on your industry's cost-per-click, competition, and goals. We provide forecasting during strategy to recommend an effective starting budget." },
      { q: "Do you manage Bing/Microsoft Ads too?", a: "Yes. Microsoft Ads often deliver lower CPCs and reach a different audience segment. We recommend including it when it aligns with your target market." },
      { q: "How quickly can I expect leads from paid search?", a: "You can start receiving clicks and leads within days of launch. Optimization for peak efficiency typically takes 4-8 weeks of data collection." }
    ]
  },
  {
    slug: "paid-social",
    category: "PAID MEDIA",
    title: "Paid Social",
    description: "We run precision-targeted ad campaigns on Meta, LinkedIn, TikTok, and other social platforms — reaching your ideal customers based on demographics, interests, and behavior.",
    flowLabel: "SOCIAL ADS:",
    flowNodes: ["AUDIENCE", "CREATIVE", "TARGET", "OPTIMIZE"],
    situations: [
      "Want to reach specific audiences who are not actively searching for their product",
      "Need to generate awareness for a new brand, product, or service launch",
      "Are running social ads but seeing poor engagement and high costs",
      "Want retargeting campaigns to re-engage website visitors and warm leads",
      "Need high-quality leads from LinkedIn for B2B sales pipelines"
    ],
    whatWeDo: [
      { title: "AUDIENCE TARGETING", desc: "We build custom, lookalike, and interest-based audiences using platform data and your existing customer insights." },
      { title: "CREATIVE PRODUCTION", desc: "We design scroll-stopping ad creatives — static, carousel, and video formats optimized for each platform." },
      { title: "CAMPAIGN MANAGEMENT", desc: "We manage daily budgets, bidding, placements, and A/B testing to maximize campaign performance." },
      { title: "RETARGETING & FUNNELS", desc: "We build multi-stage retargeting sequences that nurture prospects from awareness to conversion." }
    ],
    deliverables: [
      "Audience Strategy & Targeting Blueprint",
      "Ad Creative Production (Static, Video, Carousel)",
      "Campaign Setup & Pixel/Tracking Configuration",
      "A/B Testing Framework & Results",
      "Weekly Optimization & Monthly Reporting"
    ],
    process: [
      { title: "STRATEGY", desc: "We define campaign objectives, audience segments, and funnel architecture." },
      { title: "CREATE", desc: "We produce platform-native ad creatives and compelling copy variations." },
      { title: "LAUNCH", desc: "We deploy campaigns with structured testing frameworks across audiences and creatives." },
      { title: "OPTIMIZE", desc: "We analyze performance daily, scaling winners and cutting underperformers." },
      { title: "REPORT", desc: "We deliver transparent reports showing spend, results, and strategic recommendations." }
    ],
    measure: [
      "Cost per lead/acquisition by platform",
      "Click-through rate and engagement metrics",
      "Return on ad spend (ROAS) and pipeline value"
    ],
    faqs: [
      { q: "Which social platforms should I advertise on?", a: "It depends on your audience. Meta (Facebook/Instagram) works for most B2C and B2B. LinkedIn is essential for B2B. TikTok excels for younger demographics and brand awareness." },
      { q: "Do you create the ad visuals and videos?", a: "Yes. Our creative team produces all ad assets — static graphics, carousels, and short-form video — designed specifically for social ad performance." },
      { q: "What is the minimum ad spend you recommend?", a: "We typically recommend starting with a budget that allows for statistical significance in testing. For Meta, this is usually a minimum of a few hundred dollars per month per campaign." },
      { q: "How do you track conversions from social ads?", a: "We implement platform pixels, conversion APIs, and UTM tracking to attribute leads and sales back to specific campaigns and creatives." }
    ]
  },
  {
    slug: "programmatic-display",
    category: "PAID MEDIA",
    title: "Programmatic & Display",
    description: "We use data-driven programmatic technology to serve your display ads to the right person, on the right website, at the right moment — at scale and with precision.",
    flowLabel: "PROGRAMMATIC:",
    flowNodes: ["DATA", "TARGET", "SERVE", "RETARGET"],
    situations: [
      "Want to build brand awareness at scale across premium websites",
      "Need to retarget website visitors who did not convert",
      "Are looking for advertising reach beyond search and social platforms",
      "Want to use first-party data to target specific audience segments",
      "Need geo-targeted display campaigns for local market domination"
    ],
    whatWeDo: [
      { title: "PROGRAMMATIC STRATEGY", desc: "We design data-driven display strategies using audience signals, contextual targeting, and behavioral data." },
      { title: "CREATIVE DESIGN", desc: "We produce responsive display ads in all standard IAB formats, optimized for viewability and engagement." },
      { title: "REAL-TIME OPTIMIZATION", desc: "We manage bidding, frequency capping, and placement optimization through demand-side platforms." },
      { title: "RETARGETING CAMPAIGNS", desc: "We build sequential retargeting funnels that re-engage prospects based on their on-site behavior." }
    ],
    deliverables: [
      "Programmatic Strategy & Audience Plan",
      "Display Ad Creative Suite (All IAB Formats)",
      "DSP Setup & Campaign Configuration",
      "Brand Safety & Viewability Framework",
      "Monthly Performance & Optimization Reports"
    ],
    process: [
      { title: "PLAN", desc: "We define audience segments, contextual targets, and campaign objectives." },
      { title: "CREATE", desc: "We design responsive display creatives optimized for performance and brand consistency." },
      { title: "DEPLOY", desc: "We launch campaigns through premium demand-side platforms with brand safety controls." },
      { title: "OPTIMIZE", desc: "We analyze viewability, engagement, and conversion data to refine targeting in real-time." },
      { title: "SCALE", desc: "We expand successful segments and placements while maintaining cost efficiency." }
    ],
    measure: [
      "Viewable impression rate and reach",
      "Click-through rate and engagement metrics",
      "View-through and click-through conversions"
    ],
    faqs: [
      { q: "What is programmatic advertising?", a: "Programmatic advertising uses automated technology to buy and serve display ads in real-time based on audience data, rather than manually negotiating placements with individual websites." },
      { q: "How do you ensure brand safety?", a: "We use whitelist and blacklist strategies, contextual targeting controls, and premium inventory sources to ensure your ads appear alongside appropriate, brand-safe content." },
      { q: "Is programmatic only for large budgets?", a: "No. While programmatic can scale to any budget, we can run effective campaigns with moderate budgets, especially for retargeting and geo-targeted campaigns." },
      { q: "Can you target specific websites?", a: "Yes. We can create curated site lists for direct placements, or use contextual and audience targeting to reach users across the open web." }
    ]
  },
  {
    slug: "marketplaces",
    category: "PAID MEDIA",
    title: "Marketplaces",
    description: "We optimize and advertise your products on Amazon, Flipkart, and other e-commerce marketplaces — maximizing visibility, sales velocity, and profitability.",
    flowLabel: "MARKETPLACE:",
    flowNodes: ["LIST", "OPTIMIZE", "ADVERTISE", "SCALE"],
    situations: [
      "Are selling on Amazon or Flipkart but not ranking in search results",
      "Have low conversion rates on their marketplace product listings",
      "Want to launch products on new marketplace channels",
      "Are spending on marketplace ads without a clear return on investment",
      "Need to protect their brand and win the buy box against competitors"
    ],
    whatWeDo: [
      { title: "LISTING OPTIMIZATION", desc: "We optimize product titles, descriptions, bullet points, and backend keywords for marketplace search algorithms." },
      { title: "MARKETPLACE ADS", desc: "We manage Sponsored Products, Sponsored Brands, and Display campaigns to drive visibility and sales." },
      { title: "CONTENT & A+ PAGES", desc: "We create enhanced brand content, A+ pages, and brand stores that build trust and increase conversion." },
      { title: "ANALYTICS & PRICING", desc: "We monitor competitor pricing, buy box performance, and sales analytics to inform strategic decisions." }
    ],
    deliverables: [
      "Marketplace Audit & Opportunity Report",
      "Optimized Product Listings & Content",
      "Sponsored Ad Campaign Setup & Management",
      "Brand Store / Storefront Design",
      "Monthly Sales & Advertising Reports"
    ],
    process: [
      { title: "AUDIT", desc: "We analyze your current marketplace presence, competitor landscape, and keyword opportunities." },
      { title: "OPTIMIZE", desc: "We rewrite product listings and create enhanced content for maximum conversion." },
      { title: "ADVERTISE", desc: "We launch and manage sponsored ad campaigns targeting high-intent shoppers." },
      { title: "MONITOR", desc: "We track sales velocity, ad performance, buy box percentage, and competitor movements." },
      { title: "GROW", desc: "We expand into new categories, keywords, and marketplace channels based on data." }
    ],
    measure: [
      "Product ranking position for target keywords",
      "Advertising cost of sale (ACoS) and total ACoS",
      "Revenue growth and unit sales velocity"
    ],
    faqs: [
      { q: "Which marketplaces do you work with?", a: "We primarily work with Amazon and Flipkart. We can also support other platforms like Meesho, Myntra, and niche marketplaces depending on your product category." },
      { q: "Do you handle product photography?", a: "We provide creative direction for marketplace-optimized product images. For photography production, we coordinate with specialist studios." },
      { q: "Can you help with marketplace account setup?", a: "Yes. We can assist with seller account registration, brand registry, and initial catalog setup on supported platforms." },
      { q: "How do marketplace ads work?", a: "Marketplace ads (like Amazon Sponsored Products) show your products at the top of search results when shoppers search for relevant terms. You pay per click, similar to Google Ads." }
    ]
  },
  {
    slug: "streaming",
    category: "PAID MEDIA",
    title: "Streaming",
    description: "We place your brand on premium streaming platforms — Connected TV, OTT, audio streaming, and digital video — reaching cord-cutters and engaged audiences where they consume content.",
    flowLabel: "STREAMING:",
    flowNodes: ["AUDIENCE", "PLACE", "ENGAGE", "MEASURE"],
    situations: [
      "Want to reach audiences who have moved away from traditional TV",
      "Need premium video ad placements with precise audience targeting",
      "Are launching a brand campaign and want high-impact visual storytelling",
      "Want to complement their digital advertising with connected TV reach",
      "Need to reach specific demographics through audio streaming platforms"
    ],
    whatWeDo: [
      { title: "CTV & OTT STRATEGY", desc: "We plan and execute Connected TV campaigns on platforms like Hotstar, JioCinema, YouTube TV, and premium OTT inventory." },
      { title: "VIDEO AD PRODUCTION", desc: "We produce broadcast-quality video ads formatted for streaming platform specifications and viewer behavior." },
      { title: "AUDIO STREAMING", desc: "We create and place audio ads on Spotify, JioSaavn, and podcast networks to reach listeners in engaged moments." },
      { title: "MEASUREMENT & ATTRIBUTION", desc: "We implement cross-device measurement to connect streaming impressions to website visits and conversions." }
    ],
    deliverables: [
      "Streaming Media Strategy Document",
      "Video & Audio Ad Creative Production",
      "Platform Setup & Campaign Configuration",
      "Cross-Device Attribution Framework",
      "Monthly Reach & Engagement Reports"
    ],
    process: [
      { title: "PLAN", desc: "We identify your target audience's streaming habits and select the optimal platform mix." },
      { title: "CREATE", desc: "We produce video and audio creatives tailored to each streaming format and platform." },
      { title: "LAUNCH", desc: "We deploy campaigns with precise audience targeting and frequency management." },
      { title: "MEASURE", desc: "We track completion rates, reach, brand lift, and cross-device conversion impact." },
      { title: "OPTIMIZE", desc: "We refine targeting, creative rotation, and budget allocation based on performance data." }
    ],
    measure: [
      "Video/audio completion rates and reach",
      "Brand lift and awareness survey results",
      "Cross-device website visits and conversions"
    ],
    faqs: [
      { q: "What is Connected TV (CTV) advertising?", a: "CTV advertising delivers video ads on smart TVs and streaming devices (Roku, Fire TV, etc.) through apps and streaming services — combining the impact of TV with the targeting of digital." },
      { q: "Do I need a TV commercial to advertise on streaming?", a: "Not necessarily. We can produce cost-effective video ads specifically designed for streaming platforms — they do not need to be traditional TV commercial production quality." },
      { q: "Can I target specific audiences on streaming?", a: "Yes. Unlike traditional TV, streaming platforms allow targeting by demographics, interests, geography, and even viewing behavior." },
      { q: "How do you measure streaming ad effectiveness?", a: "We use platform analytics, brand lift studies, and cross-device attribution to connect streaming ad exposure to website visits, searches, and conversions." }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // CREATIVE
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "performance-creative",
    category: "CREATIVE",
    title: "Performance Creative",
    description: "We design ad creatives engineered to convert — combining data-informed design decisions with compelling storytelling to maximize the performance of every campaign.",
    flowLabel: "CREATIVE ENGINE:",
    flowNodes: ["BRIEF", "CREATE", "TEST", "SCALE"],
    situations: [
      "Are running paid campaigns but ad creative is not performing",
      "Need a high volume of ad variations for testing and optimization",
      "Want creatives designed specifically for conversion, not just aesthetics",
      "Are scaling campaigns and need fresh creative to combat ad fatigue",
      "Need platform-specific creative (Meta, Google, TikTok, LinkedIn)"
    ],
    whatWeDo: [
      { title: "CREATIVE STRATEGY", desc: "We develop performance creative frameworks based on your audience psychology, competitive landscape, and campaign objectives." },
      { title: "AD DESIGN", desc: "We produce static images, carousels, and motion graphics engineered for click-through and conversion." },
      { title: "VIDEO PRODUCTION", desc: "We create short-form video ads — UGC-style, product showcases, and testimonial formats — optimized for social feeds." },
      { title: "CREATIVE TESTING", desc: "We run structured A/B and multivariate creative tests to identify winning concepts and scale them." }
    ],
    deliverables: [
      "Performance Creative Strategy Document",
      "Ad Creative Library (Static, Video, Carousel)",
      "Platform-Specific Format Adaptations",
      "A/B Testing Plan & Results Analysis",
      "Monthly Creative Performance Reports"
    ],
    process: [
      { title: "BRIEF", desc: "We align on campaign goals, audience insights, and key messages to inform creative direction." },
      { title: "CONCEPT", desc: "We develop multiple creative concepts and angles for testing." },
      { title: "PRODUCE", desc: "We design and produce all creative assets in platform-specific formats." },
      { title: "TEST", desc: "We launch structured creative tests and analyze performance data." },
      { title: "ITERATE", desc: "We scale winning creatives and develop new variations to maintain performance." }
    ],
    measure: [
      "Click-through rate (CTR) per creative variant",
      "Cost per conversion by creative type",
      "Creative fatigue rate and refresh cycles"
    ],
    faqs: [
      { q: "How is performance creative different from regular design?", a: "Performance creative is designed with a specific conversion goal in mind. Every design decision — layout, copy placement, color, CTA — is informed by campaign data and audience behavior." },
      { q: "How many creative variations do you produce?", a: "We typically produce 8-15 variations per creative sprint, covering different concepts, formats, and copy angles for comprehensive testing." },
      { q: "Do you create UGC-style content?", a: "Yes. User-generated content style ads often outperform polished creatives on social platforms. We produce authentic-feeling content designed for performance." },
      { q: "Can you produce video ads?", a: "Yes. We create short-form video ads (6s, 15s, 30s) including motion graphics, product showcases, and testimonial-style content." }
    ]
  },
  {
    slug: "branding-creative",
    category: "CREATIVE",
    title: "Branding",
    description: "We craft premium brand identities — from strategy and positioning to logo systems and visual guidelines — that make your business look, sound, and feel like the market leader it aspires to be.",
    flowLabel: "BRAND SYSTEM:",
    flowNodes: ["POSITION", "IDENTITY", "MESSAGE", "PERCEPTION"],
    situations: [
      "Are launching a new business and need a complete brand identity",
      "Have outgrown their current visual identity and need a rebrand",
      "Have an inconsistent brand presence across digital and physical touchpoints",
      "Want to command premium pricing through elevated brand perception",
      "Need a cohesive brand system that scales across all applications"
    ],
    whatWeDo: [
      { title: "BRAND STRATEGY", desc: "We define your positioning, target audience, competitive differentiation, and brand narrative." },
      { title: "VISUAL IDENTITY", desc: "We design logo systems, typography, color palettes, and visual direction that embody your brand essence." },
      { title: "BRAND MESSAGING", desc: "We develop tone of voice guidelines, taglines, and messaging frameworks for consistent communication." },
      { title: "BRAND GUIDELINES", desc: "We create comprehensive brand guidelines documenting every element for consistent application across all media." }
    ],
    deliverables: [
      "Brand Strategy & Positioning Document",
      "Logo System (Primary, Secondary, Favicon)",
      "Color Palette & Typography Selection",
      "Comprehensive Brand Guidelines (PDF)",
      "Social Media & Presentation Templates"
    ],
    process: [
      { title: "DISCOVER", desc: "We immerse ourselves in your business, market, audience, and aspirations." },
      { title: "DEFINE", desc: "We establish strategic positioning, brand attributes, and creative direction." },
      { title: "DESIGN", desc: "We develop the visual identity system through iterative design exploration." },
      { title: "REFINE", desc: "We collaborate with you to perfect every element of the brand system." },
      { title: "DELIVER", desc: "We compile all assets and guidelines into a complete brand toolkit." }
    ],
    measure: [
      "Brand consistency across all touchpoints",
      "Perceived brand quality and trust metrics",
      "Brand recognition and recall improvements"
    ],
    faqs: [
      { q: "Can you evolve our existing brand instead of starting over?", a: "Absolutely. Brand evolution modernizes and strengthens your existing identity while preserving established equity and recognition." },
      { q: "How long does a branding project take?", a: "Typically 4-8 weeks depending on project complexity and the number of deliverables required." },
      { q: "Do you provide brand naming services?", a: "Yes, brand naming can be included as an initial phase before visual identity design begins." },
      { q: "Will I own all the brand files?", a: "Yes. Upon project completion and final payment, you receive full ownership and source files for every brand asset created." },
      { q: "Do you design physical collateral?", a: "Yes. We extend digital brand guidelines to business cards, letterheads, packaging, signage, and other physical applications." }
    ]
  },
  {
    slug: "content-production",
    category: "CREATIVE",
    title: "Content Production",
    description: "We produce premium visual and written content — photography, videography, motion graphics, and editorial — that tells your brand story and captures audience attention.",
    flowLabel: "PRODUCTION:",
    flowNodes: ["CONCEPT", "PRODUCE", "EDIT", "DELIVER"],
    situations: [
      "Need professional photography and videography for their brand",
      "Want premium content for social media, website, and marketing campaigns",
      "Are launching a product and need campaign-quality visual assets",
      "Need ongoing content production without maintaining an in-house team",
      "Want documentary-style brand films or behind-the-scenes content"
    ],
    whatWeDo: [
      { title: "PHOTOGRAPHY", desc: "We produce professional product, lifestyle, corporate, and event photography with creative direction." },
      { title: "VIDEOGRAPHY", desc: "We create brand films, product videos, testimonials, and social-first short-form video content." },
      { title: "MOTION GRAPHICS", desc: "We design animated explainers, social media animations, and dynamic visual content." },
      { title: "EDITORIAL CONTENT", desc: "We produce long-form articles, case studies, whitepapers, and thought leadership content." }
    ],
    deliverables: [
      "Creative Direction & Shot Lists",
      "Professional Photography Suite",
      "Video Production (Short & Long-Form)",
      "Motion Graphics & Animations",
      "Content Asset Library (Print & Digital Ready)"
    ],
    process: [
      { title: "BRIEF", desc: "We align on creative vision, content needs, and production requirements." },
      { title: "PLAN", desc: "We develop detailed shot lists, scripts, storyboards, and production schedules." },
      { title: "PRODUCE", desc: "We execute the production — on-location shoots, studio sessions, and content creation." },
      { title: "POST-PRODUCE", desc: "We edit, color grade, animate, and finalize all content to brand standards." },
      { title: "DELIVER", desc: "We provide organized, multi-format content ready for every platform and use case." }
    ],
    measure: [
      "Content engagement metrics across platforms",
      "Content usage rate across marketing channels",
      "Production efficiency and asset turnaround time"
    ],
    faqs: [
      { q: "Do you handle the entire production process?", a: "Yes. From creative direction and planning through shooting, editing, and final delivery — we manage every stage of production." },
      { q: "Can you shoot on-location?", a: "Absolutely. We produce content at your offices, venues, events, or any location relevant to your brand story." },
      { q: "What formats do you deliver content in?", a: "We deliver in all formats needed — web-optimized, print-ready, social media specific (9:16, 1:1, 16:9), and raw files when requested." },
      { q: "Do you provide ongoing content retainers?", a: "Yes. Many clients work with us on monthly retainers for consistent content production across their marketing channels." }
    ]
  },
  {
    slug: "website-design",
    category: "CREATIVE",
    title: "Website Design",
    description: "We design and build high-performance websites that combine stunning visual design with strategic UX — creating digital experiences that convert visitors into customers.",
    flowLabel: "WEB EXPERIENCE:",
    flowNodes: ["RESEARCH", "WIREFRAME", "DESIGN", "DEVELOP"],
    situations: [
      "Need a professional website that reflects their brand quality",
      "Have a website that looks outdated and is not generating leads",
      "Are launching a new business and need a digital home from day one",
      "Want a custom-designed website, not a generic template",
      "Need a high-speed, mobile-first website built on modern technology"
    ],
    whatWeDo: [
      { title: "UX RESEARCH", desc: "We study your users, map their journeys, and design information architecture that guides visitors to action." },
      { title: "UI DESIGN", desc: "We create stunning high-fidelity designs in Figma — every page, component, and interaction designed pixel-perfectly." },
      { title: "DEVELOPMENT", desc: "We build custom websites using modern frameworks (Next.js, React) for maximum performance and flexibility." },
      { title: "OPTIMIZATION", desc: "We optimize for speed, accessibility, SEO, and conversion — ensuring your site performs as beautifully as it looks." }
    ],
    deliverables: [
      "UX Research & Sitemap",
      "High-Fidelity UI Design (Figma)",
      "Fully Responsive Custom Website",
      "Technical SEO & Performance Setup",
      "Analytics & Conversion Tracking"
    ],
    process: [
      { title: "DISCOVER", desc: "We understand your business goals, target users, and content requirements." },
      { title: "ARCHITECT", desc: "We map out site structure, wireframes, and user flow diagrams." },
      { title: "DESIGN", desc: "We create the complete visual design with interactive prototypes for your review." },
      { title: "BUILD", desc: "We develop the website using clean, performant code and modern frameworks." },
      { title: "LAUNCH", desc: "We test across devices, deploy, and ensure everything runs flawlessly." }
    ],
    measure: [
      "Page load speed and Core Web Vitals scores",
      "User engagement and bounce rate improvements",
      "Conversion rate and lead generation volume"
    ],
    faqs: [
      { q: "Can you redesign my existing website?", a: "Yes. We audit your current site, retain what works (including SEO equity and content), and completely overhaul the design and technical foundation." },
      { q: "What technology do you build with?", a: "We primarily build with Next.js and React for high performance. We also work with Webflow, WordPress, and Shopify based on your specific needs." },
      { q: "Do you write website copy?", a: "We provide structural copywriting guidance and content frameworks. Full professional copywriting can be included in the project scope." },
      { q: "Is hosting and maintenance included?", a: "We offer ongoing hosting management and technical maintenance packages. These are quoted separately from the design and development project." },
      { q: "How long does a website project take?", a: "Typical website projects take 6-12 weeks from kickoff to launch, depending on complexity, number of pages, and custom functionality." }
    ]
  },
  {
    slug: "graphic-motion-design",
    category: "CREATIVE",
    title: "Graphic & Motion Design",
    description: "We create visually compelling graphics and motion design — from social media assets and presentations to animated explainers and brand videos — that elevate your brand presence.",
    flowLabel: "VISUAL DESIGN:",
    flowNodes: ["CONCEPT", "DESIGN", "ANIMATE", "DELIVER"],
    situations: [
      "Need professional graphic design for marketing and communications",
      "Want animated explainer videos or motion graphics for their brand",
      "Have presentations that need to look as premium as their business",
      "Need consistent visual content across digital and print channels",
      "Want to elevate their social media presence with designed content"
    ],
    whatWeDo: [
      { title: "GRAPHIC DESIGN", desc: "We design social media graphics, infographics, brochures, pitch decks, and marketing collateral." },
      { title: "MOTION DESIGN", desc: "We create animated logos, social media animations, explainer videos, and kinetic typography." },
      { title: "PRESENTATION DESIGN", desc: "We transform complex information into visually stunning, narrative-driven presentations and pitch decks." },
      { title: "PRINT DESIGN", desc: "We design business cards, packaging, signage, exhibition materials, and physical brand touchpoints." }
    ],
    deliverables: [
      "Custom Graphic Design Assets",
      "Motion Graphics & Animations",
      "Presentation & Pitch Deck Design",
      "Print-Ready Marketing Collateral",
      "Multi-Format Asset Library"
    ],
    process: [
      { title: "BRIEF", desc: "We understand your design needs, brand guidelines, and creative objectives." },
      { title: "CONCEPT", desc: "We develop visual concepts and creative directions for your approval." },
      { title: "DESIGN", desc: "We execute the approved concept with meticulous attention to detail and brand consistency." },
      { title: "ANIMATE", desc: "For motion projects, we add movement, transitions, and audio to bring designs to life." },
      { title: "DELIVER", desc: "We provide all assets in multiple formats optimized for their intended platforms." }
    ],
    measure: [
      "Content engagement rates across platforms",
      "Brand consistency score across touchpoints",
      "Design asset utilization and campaign performance"
    ],
    faqs: [
      { q: "Do you work on one-off projects or retainers?", a: "Both. We handle individual design projects and also offer monthly design retainers for businesses that need ongoing creative support." },
      { q: "What tools do you use?", a: "We work in Figma, Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro), and specialized motion design tools." },
      { q: "Can you match our existing brand guidelines?", a: "Absolutely. We work within your established brand system to ensure every design is perfectly consistent with your identity." },
      { q: "How fast can you turn around design projects?", a: "Standard projects take 3-7 business days. We also offer expedited turnarounds for urgent requests when needed." }
    ]
  },
  {
    slug: "audio-production",
    category: "CREATIVE",
    title: "Audio Production",
    description: "We produce professional audio content — podcast production, sonic branding, voiceovers, and audio ads — that gives your brand a distinctive, memorable voice.",
    flowLabel: "AUDIO BRAND:",
    flowNodes: ["BRIEF", "COMPOSE", "PRODUCE", "MASTER"],
    situations: [
      "Want to launch a branded podcast for thought leadership and audience building",
      "Need professional voiceover production for ads, videos, and presentations",
      "Want a distinctive sonic identity — audio logo, brand sounds, and hold music",
      "Are running audio ads on Spotify or podcast networks and need production",
      "Need professional audio editing and mastering for existing content"
    ],
    whatWeDo: [
      { title: "PODCAST PRODUCTION", desc: "We handle end-to-end podcast production — concept development, recording, editing, mixing, and distribution strategy." },
      { title: "SONIC BRANDING", desc: "We create audio logos, brand jingles, notification sounds, and sonic signatures that make your brand instantly recognizable." },
      { title: "VOICEOVER PRODUCTION", desc: "We source professional voice talent and produce broadcast-quality voiceovers for ads, explainers, and IVR systems." },
      { title: "AUDIO ADVERTISING", desc: "We produce audio ads for Spotify, podcast networks, and radio — from script writing to final mastered deliverables." }
    ],
    deliverables: [
      "Audio Strategy & Creative Direction",
      "Professional Audio Production Files",
      "Podcast Episodes (Edited & Mastered)",
      "Sonic Branding Assets (Audio Logo, Sounds)",
      "Platform-Ready Audio Ad Deliverables"
    ],
    process: [
      { title: "BRIEF", desc: "We define your audio objectives, brand voice, and production requirements." },
      { title: "CONCEPT", desc: "We develop audio concepts, scripts, and creative direction for approval." },
      { title: "PRODUCE", desc: "We record, source talent, and capture all raw audio materials." },
      { title: "EDIT", desc: "We edit, mix, and add music, sound design, and effects to the production." },
      { title: "MASTER", desc: "We master all audio to broadcast standards and deliver in platform-specific formats." }
    ],
    measure: [
      "Audio content engagement (listens, completion rate)",
      "Brand recall from sonic branding elements",
      "Audio ad performance (listen-through rate, conversions)"
    ],
    faqs: [
      { q: "Can you help us launch a podcast from scratch?", a: "Yes. We handle everything — concept development, naming, artwork, recording setup guidance, production, editing, and distribution to all major platforms." },
      { q: "Do you provide voice talent?", a: "Yes. We have access to professional voice artists across multiple languages, accents, and styles. We handle auditions, selection, and recording direction." },
      { q: "What is sonic branding?", a: "Sonic branding is your brand's audio identity — think the Intel chime or Netflix 'ta-dum.' We create distinctive audio signatures that make your brand instantly recognizable." },
      { q: "Can you produce audio in multiple languages?", a: "Yes. We produce audio content in English, Hindi, Telugu, and other languages with native-speaking talent and cultural nuance." }
    ]
  }
];
