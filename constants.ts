







import { Users, Lightbulb, Target, Trophy, Mic, Globe, Handshake, ShieldCheck, Terminal, Video, Map, Scroll, Recycle, Sprout, LayoutGrid, Award, History, CalendarCheck, Megaphone, MapPin, Mail, Sparkles, Coffee, Laptop, Utensils, Presentation, Facebook, Instagram, Linkedin, Youtube, AtSign, GraduationCap, Briefcase, Library, ChevronRight, UserPlus } from 'lucide-react';

// --- CONFIGURATION ---
export const LOGO_URL = "/images/core/logo.webp"; // CHANGE THIS PATH TO UPDATE LOGO GLOBALLY
export const WHATSAPP_NUMBER = "917899293097"; 
export const CONTACT_EMAIL = "info@bharatleadsummit.com";
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyQwlYQ503cSWc8v4gmCq3cy1KCFOTlQ2FLclW1RGAWw7PPIGPdXBkwnMcg7fLqjgXO/exec"; 
export const BROCHURE_URL = "https://drive.google.com/file/d/1IgDtI-sfrukYlpdnXi0VrCXqahjf3PPG/view?usp=share_link"; 
export const PAYMENT_PORTAL_URL = "https://ruasportal.msruas.ac.in/asd_EventPublicUserMaster.htm?eventID=162"; 

// LinkedIn Video Embed URL
export const SHOWREEL_EMBED_URL = "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7417166440669253632?compact=1";

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/1EQWdysDEx/?mibextid=wwXIfr',
  instagram_leads: 'https://www.instagram.com/leads_next_gen_ruas?igsh=MmxhODgyOHA3N2V1&utm_source=qr',
  instagram_bls: 'https://www.instagram.com/bharatlead_summit?igsh=b3c5dmtwMG43MmMw&utm_source=qr',
  threads: 'https://www.threads.com/@leads_next_gen_ruas?igshid=NTc4MTIwNjQ2YQ==',
  linkedin: 'https://www.linkedin.com/in/leads-next-gen-centre-ruas-700555327/',
  youtube: 'https://youtube.com/@leads_msruas_next_gen_centre?si=o5LCtlMHXJEFnYa6'
};

export const FAQ_DATA = [
  {
    question: "Who can attend the Bharat Lead Summit 2026?",
    answer: "The summit is open to university students, industry delegates, academic experts, and young entrepreneurs interested in sustainable leadership and Indian industry growth."
  },
  {
    question: "Is there a registration fee for the competitions?",
    answer: "Yes, specific competitions like the Bharat Innovation Challenge and Prompt Engineering have registration fees. Details can be found in the brochure or during the registration process on the RUAS portal."
  },
  {
    question: "Will participants receive certificates?",
    answer: "Yes, all registered delegates and competition participants will receive official certificates from the LEADS Next Gen Centre, Ramaiah University of Applied Sciences."
  },
  {
    question: "Where exactly is the venue located?",
    answer: "The event is hosted at University House, New BEL Rd, M S R Nagar, Mathikere, Bengaluru, Karnataka 560054."
  },
  {
    question: "How can my company become a sponsor?",
    answer: "You can view our Partnership Matrix on the sponsorship page. For custom partnership inquiries, please contact us via the form or WhatsApp link provided."
  }
];

export const NAV_LINKS = [
  { 
    name: 'Home', 
    href: '/',
    subLinks: [] 
  },
  { 
    name: 'About', 
    href: '/about',
    subLinks: [
      { name: 'Vision & Mission', href: '/about#about', icon: Target },
      { name: 'Leadership', href: '/about#leadership', icon: Users },
      { 
        name: 'Committees', 
        href: '/about#committees', 
        icon: Award,
        subLinks: [
          { name: 'Executive Council', href: '/about#executive-council' },
          { name: 'Organizing Committee', href: '/about#organizing-committee' },
          { name: 'Organizing Members', href: '/about#organizing-members' },
          { name: 'Collaborative Partners', href: '/about#collaborative-partners' }
        ]
      },
    ]
  },
  { 
    name: 'The Summit', 
    href: '/summit',
    subLinks: [
      { name: 'Delegate Registration', href: '/register', icon: UserPlus },
      { 
        name: 'Agenda', 
        href: '/summit#agenda', 
        icon: CalendarCheck,
        subLinks: [
          { name: 'Day 01 (April 10)', href: '/summit#agenda-day1' },
          { name: 'Day 02 (April 11)', href: '/summit#agenda-day2' }
        ]
      },
      { name: 'Highlights', href: '/summit#highlights', icon: Sparkles },
      { 
        name: 'Advisory Board', 
        href: '/summit#speakers', 
        icon: Mic,
        subLinks: [
          { name: 'Governing Council', href: '/summit#speakers-governing' },
          { name: 'Corporate Advisory', href: '/summit#speakers-corporate' },
          { name: 'Academic Advisory', href: '/summit#speakers-academic' }
        ]
      },
    ]
  },
  { 
    name: 'Competitions', 
    href: '/events',
    subLinks: [
      { name: 'Bharat Innovation Challenge', href: '/events#events', icon: Trophy },
      { name: 'Prompt Engineering', href: '/events#events', icon: Terminal },
      { name: 'Sustainability Content', href: '/events#events', icon: Video },
      { name: 'Eco Quest', href: '/events#events', icon: Map },
    ]
  },
  { 
    name: 'Sponsors', 
    href: '/sponsorship',
    subLinks: [
      { name: 'Partnership Matrix', href: '/sponsorship#sponsorship', icon: ShieldCheck },
      { name: 'Current Partners', href: '/sponsorship#partners', icon: Handshake },
      { name: 'Exhibition Stalls', href: '/sponsorship#stalls', icon: LayoutGrid },
    ]
  },
  { 
    name: 'Contact', 
    href: '/contact',
    subLinks: [
      { name: 'Get in Touch', href: '/contact', icon: Mail },
      { name: 'Our Location', href: '/contact#location', icon: MapPin },
    ]
  },
];

export const REGISTRATION_CATEGORIES = [
  {
    id: 'student',
    title: 'Student Delegate',
    icon: GraduationCap,
    description: 'For university students and research scholars.',
    features: ['Access to Keynote Sessions', 'Competition Participation', 'Official Certification', 'Networking Zone Access'],
    color: 'blue'
  },
  {
    id: 'academic',
    title: 'Academic Professional',
    icon: Library,
    description: 'For faculty members, deans, and educators.',
    features: ['Research Presentation', 'Academic Roundtables', 'Networking Lunch', 'Faculty Development Certificate'],
    color: 'purple'
  },
  {
    id: 'industry',
    title: 'Industry Delegate',
    icon: Briefcase,
    description: 'For corporate professionals and entrepreneurs.',
    features: ['VIP Networking Access', 'Gala Dinner Invitation', 'Strategic Roundtables', 'Startup Pitch Access'],
    color: 'orange'
  }
];

export const PASS_TIERS = [
  {
    id: 'silver',
    name: 'Silver Pass',
    price: '₹499',
    color: 'border-slate-300 shadow-slate-200',
    accent: 'bg-slate-100 text-slate-800',
    perks: [
      'Paper Bag & Notepad',
      'Standard Pen',
      'Delegate Badge',
      'Event Map & Schedule',
      'Customized Wrist Band',
      'Access to Startup Expo'
    ]
  },
  {
    id: 'gold',
    name: 'Gold Pass',
    price: '₹999',
    color: 'border-amber-300 shadow-amber-200',
    accent: 'bg-amber-100 text-amber-800',
    perks: [
      'Standard Bag & Notebook',
      'Pen',
      'Delegate Badge',
      'Event Map & Schedule',
      'Snack & Food Coupon (1 each)*',
      'Event Cap',
      'Customized Wrist Band',
      'Exclusive Access to Cultural Night',
      'Access to Startup Expo'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum Pass',
    price: '₹1999',
    color: 'border-indigo-300 shadow-indigo-200',
    accent: 'bg-indigo-900 text-white',
    perks: [
      'Premium Bag & Notebook',
      'Quality Pens',
      'Bharatleads Printed Cap',
      'Delegate Badge & Key Chain',
      'Event Map & Schedule',
      'Food Coupon Access (Everyday + Gala Dinner)',
      'Customized Wrist Band',
      'Commemorative Mugs',
      'Exclusive Access to Cultural Night',
      'Access to Startup Expo'
    ]
  }
];

export const SUMMIT_SCHEDULE = {
  day1: [
    { time: "09:00 AM", event: "Inaugural Ceremony – Sankalp Se Siddhi", icon: Sparkles },
    { time: "11:00 AM", event: "High Tea & Networking", icon: Coffee },
    { time: "11:30 AM", event: "Panel: Leadership Imperatives for a Sustainable Bharat", icon: Users },
    { time: "12:30 PM", event: "Networking Lunch", icon: Utensils },
    { time: "02:00 PM", event: "Speaker: Global Challenges & Leadership Resilience", icon: Globe },
    { time: "03:30 PM", event: "Panel: Bharat’s Startup Power: 10 Million Founders?", icon: Trophy },
    { time: "04:30 PM", event: "High Tea", icon: Coffee },
    { time: "05:00 PM", event: "Cultural Evening – Colors of Bharat", icon: Sparkles },
    { time: "07:30 PM", event: "Gala Dinner & Concert", icon: Sparkles },
  ],
  day2: [
    { time: "10:00 AM", event: "Panel: The Creator Crisis – AI vs Human Creativity", icon: Video },
    { time: "11:30 AM", event: "Speaker: Youth-Led Innovation for a New India", icon: Lightbulb },
    { time: "12:30 PM", event: "Networking Lunch", icon: Utensils },
    { time: "02:00 PM", event: "Panel: Financial Freedom for Gen Z", icon: Briefcase },
    { time: "03:30 PM", event: "Special Event: The 10-Minute Millionaire", icon: Trophy },
    { time: "05:00 PM", event: "Valedictory Ceremony – PRERNA", icon: Award },
  ]
};

export const STATS = [
  { label: 'Total Footfall', value: '1500+' },
  { label: 'CEOs & CXOs', value: '75+' },
  { label: 'Startup Founders', value: '100+' },
  { label: 'Industry Leaders', value: '50+' },
  { label: 'Young Innovators', value: '275+' },
];

export const PARTNERS = {
  collaborators: [
    { name: 'Bangalore Management Association (BMA)', logo: '/images/partners/bma.webp' },
    { name: "Institution's Innovation Council", logo: '/images/partners/iic.webp' }
  ],
  media: { name: 'Business Standard', logo: '/images/partners/business-standard.webp' },
  industry: [
    'NITI Aayog', 'Dept of Science & Technology', 'Skill India', 'NSDC',
    'IDFC First Bank', 'Tata Capital', 'SBI Foundation',
    'IBM', 'Wipro', 'Cisco', '[24]7.ai',
    'Concordia University', 'University of Fraser Valley',
    'Edelman Global Advisory'
  ]
};

export const PAST_INITIATIVES = [
  {
    title: 'International REEN Conference',
    year: '2025',
    description: 'A global gathering focusing on renewable energy and environmental sustainability, bringing together experts to discuss the future of green technology.',
    image: '/images/gallery/g1.webp' 
  },
  {
    title: 'Futuristic Leadership Summit',
    year: '2025',
    description: 'Exploring the future of leadership in a rapidly evolving technological landscape, preparing the next generation of managers.',
    image: '/images/gallery/g2.webp'
  },
  {
    title: 'IIC Regional Meet',
    year: '2025',
    description: 'Connecting innovators and entrepreneurs from across the region to foster collaboration and showcase groundbreaking startups.',
    image: '/images/gallery/g3.webp'
  },
  {
    title: 'Anveshan Conference',
    year: '2024',
    description: 'A research-driven conference highlighting student innovations and academic excellence across various disciplines.',
    image: '/images/gallery/g4.webp'
  }
];

export const LEGACY_STATS = [
  { event: 'International REEN Conference 2025', count: '01' },
  { event: 'Anveshan Conference', count: '02' },
  { event: 'ANQ Congress Conference', count: '03' },
  { event: 'Futuristic Leadership Summit 2025', count: '04' },
  { event: 'IIC Regional Meet 2025', count: '05' },
];

export const ADDITIONAL_INITIATIVES = [
  "Catalyst Insight Series",
  "AIU VC Meet 2025",
  "IIC Regional Meet 2025",
  "Natinal Leadership Day",
  "DegreeLab",
  "Expert Talk",
  "Fireside Talk",
  "Founders Fireside",
  "Policy Workshop",
  "Transformation Seminar",
  "Green Leaders Circle"
];

export const COMPETITIONS_LIST = [
  {
    title: 'Bharat Innovation Challenge',
    description: "India's Premier Platform for Mission-Driven Innovators. Catalyze Change. Build Solutions. Shape the Future.",
    icon: Trophy,
    color: 'bg-orange-500',
    isLive: true,
    registrationLink: "https://forms.gle/BQKQgs1izGgF6osP7",
    rules: [
      "Eligibility: Teams of 2-4 members (interdisciplinary encouraged); open to students and young innovators.",
      "Themes: AI for Planetary Health, Deep-Tech for Social Impact, Energy Transition, Sustainability & Climate Tech, Open Innovation.",
      "Phase 1: Registration & Idea Submission (Jan 5 - Feb 25, 2026).",
      "Phase 2: Virtual Regional Pitches (March 12-20, 2026).",
      "Grand Finale: In-person pitching at Bharat Lead Summit (April 10-11, 2026).",
      "Judging: Innovation (30%), Impact (30%), Business Strategy (25%), Presentation (15%).",
      "Rewards: Cash prizes, Patent filing support, Incubation opportunities, and Ministry meetings."
    ]
  },
  {
    title: 'Climate Policy Simulation – UN Format',
    description: 'An immersive, diplomacy-based competition where participants take on the roles of country delegates to solve the world\'s most urgent challenge—climate change.',
    icon: Globe,
    color: 'bg-blue-500',
    rules: [
      "Day: DAY 1",
      "Duration: 240 minutes + 60 minutes lunch",
      "Team Size: 2–4 members per country delegation",
      "Objectives: Represent national climate interests, Debate mitigation & adaptation strategies, Negotiate emission targets, Arrive at a global climate agreement.",
      "Judging Criteria (100 Points):",
      "• Climate Policy Strength & Feasibility (25 pts)",
      "• Negotiation & Diplomacy Skills (25 pts)",
      "• Climate Justice & Equity Perspective (20 pts)",
      "• Data & Evidence Use (15 pts)",
      "• Quality & Structure of Final Treaty (15 pts)"
    ]
  },
  {
    title: 'National Leadership Tribunal',
    description: 'An immersive, high-pressure decision-making simulation where participants defend major leadership decisions during crises.',
    icon: ShieldCheck,
    color: 'bg-red-500',
    rules: [
      "Day: DAY 1",
      "Duration: 240 minutes + 60 minutes lunch",
      "Team Size: Individual participation or 2 members per team",
      "Objectives: Defend major leadership decisions under crisis, Demonstrate ethical judgment, Navigate media pressure, Respond to governance failure.",
      "Judging Criteria (100 Points):",
      "• Decision Logic & Strategic Thinking (30 pts)",
      "• Ethical Judgment & Integrity (20 pts)",
      "• Crisis Handling & Adaptability (20 pts)",
      "• Communication & Defense Skills (20 pts)",
      "• Innovation & Leadership Presence (10 pts)"
    ]
  },
  {
    title: 'Leadership Valuation Game – Build a Unicorn Startup',
    description: 'A strategic simulation where teams build and value a unicorn startup under market pressures.',
    icon: Target,
    color: 'bg-purple-500',
    rules: [
      "Day: DAY 1",
      "Team Size: 3–6 members per startup team"
    ]
  },
  {
    title: 'India Zero-Waste Business Challenge',
    description: 'Design a 100% zero-waste business model that aligns with India\'s mission for a circular, regenerative economy.',
    icon: Recycle,
    color: 'bg-emerald-500',
    rules: [
      "Day: DAY 1",
      "Duration: 240 minutes + 60 minutes lunch",
      "Team Size: 3–6 members per team",
      "Objectives: Identify a real-world waste problem, Design a zero-waste solution, Apply circular economy principles, Create a scalable business model.",
      "Judging Criteria (100 Points):",
      "• Zero-Waste Design & Circularity (30 pts)",
      "• Feasibility & Cost Realism (25 pts)",
      "• Innovation & Creativity (20 pts)",
      "• Environmental & Social Impact (15 pts)",
      "• Pitch Quality & Clarity (10 pts)"
    ]
  },
  {
    title: 'Sustainability Content Creator Championship',
    description: 'Create powerful, inspiring digital content that educates, influences, drives behavior change, and promotes sustainable living.',
    icon: Video,
    color: 'bg-pink-500',
    rules: [
      "Day: DAY 2",
      "Duration: 240 minutes + 60 minutes lunch",
      "Team Size: Individual or 2 members per team",
      "Objectives: Create educational content, Influence behavior change, Merge storytelling with strategy, Promote sustainable living.",
      "Judging Criteria (100 Points):",
      "• Message Clarity & Accuracy (25 pts)",
      "• Creativity & Storytelling Quality (25 pts)",
      "• Impact & Behavior Change Potential (20 pts)",
      "• Technical Execution (15 pts)",
      "• Presentation & Strategic Rationale (15 pts)"
    ]
  },
  {
    title: 'Model United Nations (MUN)',
    description: 'A prestigious academic simulation of the UN where participants engage in debate, diplomacy, and resolution drafting.',
    icon: Users,
    color: 'bg-indigo-600',
    rules: [
      "Day: DAY 2",
      "Duration: 240 minutes + 60 minutes lunch",
      "Team Size: 1–2 delegates per country",
      "Objectives: Represent country's foreign policy, Engage in debate and diplomacy, Draft and pass resolutions, Build alliances.",
      "Judging Criteria (100 Points):",
      "• Research & Country Position Accuracy (25 pts)",
      "• Public Speaking & Oratory (25 pts)",
      "• Diplomacy & Negotiation Skills (20 pts)",
      "• Resolution Quality & Logic (20 pts)",
      "• Engagement & Leadership in Committee (10 pts)"
    ]
  },
  {
    title: 'Prompt Engineering Championship',
    description: 'Strategically design prompts to generate the most accurate, creative, and high-quality outputs using advanced AI models.',
    icon: Terminal,
    color: 'bg-indigo-500',
    rules: [
      "Day: DAY 2",
      "Venue: F25",
      "Duration: 240 minutes + 60 minutes lunch",
      "Team Size: Individual or 2 members per team",
      "Objectives: Design strategic prompts, Leverage logic and context, Demonstrate analytical thinking, Solve AI challenges.",
      "Judging Criteria (100 Points):",
      "• Prompt Quality & Structure (25 pts)",
      "• Accuracy / Relevance of Output (25 pts)",
      "• Creativity & Innovation (20 pts)",
      "• Efficiency (Minimal Attempts / Token Use) (15 pts)",
      "• Ethical & Safe Prompting (15 pts)"
    ]
  },
  {
    title: 'Eco Quest',
    description: 'An experiential, high-energy treasure hunt rooted in sustainability and climate consciousness.',
    icon: Map,
    color: 'bg-cyan-500',
    rules: [
      "Day: DAY 2",
      "Venue: F26",
      "Duration: 240 minutes + 60 minutes lunch",
      "Team Size: 4 members per team",
      "Objectives: Navigate campus-wide hunt, Apply environmental knowledge, Explore biodiversity/waste/energy themes, Demonstrate teamwork.",
      "Judging Criteria (100 Points):",
      "• Accuracy in Completing Eco-Tasks (35 pts)",
      "• Speed & Efficiency (25 pts)",
      "• Teamwork & Coordination (20 pts)",
      "• Environmental Understanding (20 pts)"
    ]
  },
  {
    title: 'Policy Conclave',
    description: 'A high-impact public policy simulation where participants design real, implementable, data-backed policy solutions.',
    icon: Scroll,
    color: 'bg-slate-600',
    rules: [
      "Day: DAY 1 / DAY 2",
      "Duration: 240 minutes + 60 minutes lunch",
      "Team Size: 2 members per team",
      "Objectives: Design data-backed policy solutions, Analyze critical national issues, Justify budget and feasibility, Defend policy plans.",
      "Judging Criteria (100 Points):",
      "• Problem Understanding & Research Depth (25 pts)",
      "• Policy Design Quality & Feasibility (25 pts)",
      "• Implementation & Budget Logic (20 pts)",
      "• Impact & Innovation (20 pts)",
      "• Presentation & Defense (10 pts)"
    ]
  }
];

export const AGENDA_TOPICS = [
  "Leadership Imperatives for a Sustainable Bharat",
  "Bharat's Startup Power: Creating 10 Million Founders by 2035",
  "The Creator Crisis – AI's Impact on Art, Authenticity & the Economy",
  "Financial Freedom for Gen Z: Wealth, Crypto & Digital Infrastructure",
  "From Job Seekers to Job Creators: Rethinking Education & Employability",
  "India 2040: The Future of Work, Governance & Human Capital",
  "Digital Overload & the Gen Z Attention Crisis"
];

export const LEADERSHIP_MESSAGES = [
  {
    name: "Prof. Kuldeep Kumar Raina",
    role: "Patron (LEADS Next Gen Centre) | Honourable Vice-Chancellor of RUAS",
    message: "Developing futuristic leaders focused on sustainable action. Leadership is responsibility, empathy, and compassion.",
    image: "/images/leadership/kuldeep-raina.webp",
    linkedin: "https://www.linkedin.com/in/dr-kuldeep-raina-b4207524"
  },
  {
    name: "Dr. K. M. Sharath Kumar",
    role: "Chief Adviser (LEADS Next Gen Centre) | Professor and Dean of FMC, RUAS",
    message: "A platform for students and industry leaders to tackle contemporary challenges and work towards Viksit Bharat 2047.",
    image: "/images/leadership/sharath-kumar.webp",
    linkedin: "https://www.linkedin.com/in/dr-k-m-sharath-kumar-ph-d-80400714"
  },
  {
    name: "Dr. Subhadeep Mukherjee",
    role: "Centre Head (LEADS Next Gen Centre) | Associate Professor of FMC, RUAS",
    message: "We unite industry leaders and young change-makers to discuss innovative solutions, emphasizing dialogue and collaboration.",
    image: "/images/leadership/subhadeep-mukherjee.webp",
    linkedin: "https://www.linkedin.com/in/dr-subhadeep-mukherjee-aa78a182"
  }
];

export const HIGHLIGHTS = [
  {
    title: 'Leadership Keynotes',
    description: 'Insights from CEOs, policymakers, and sustainability champions on the future of responsible business.',
    icon: Mic,
    color: 'bg-blue-500'
  },
  {
    title: 'Bharat Innovation Challenge',
    description: 'A national case competition where student teams solve real-world corporate sustainability problems.',
    icon: Trophy,
    color: 'bg-yellow-500'
  },
  {
    title: 'Green Innovation Expo',
    description: 'A showcase of sustainable startups and research projects, creating a hub for investment.',
    icon: Lightbulb,
    color: 'bg-green-500'
  },
  {
    title: 'Policy-Action Dialogues',
    description: 'Interactive sessions on implementing UN SDGs in business and society.',
    icon: Globe,
    color: 'bg-cyan-500'
  },
  {
    title: 'Executive Networking',
    description: 'A curated space for delegates to connect with mentors, investors, and industry leaders.',
    icon: Handshake,
    color: 'bg-purple-500'
  },
  {
    title: 'Zero-Waste Challenge',
    description: 'Design and pitch scalable, 100% waste-free business models aligning with circular economy goals.',
    icon: Target,
    color: 'bg-teal-500'
  }
];

// Placeholder image for speakers/committees if no image is provided.
const PLACEHOLDER_AVATAR = "/images/core/avatar-placeholder.webp";

export const SPEAKERS = {
  governing: [
    { name: 'Mr. Ramanan Ramanathan', image: "/images/speakers/ramanan-ramanathan.webp", title: 'Chairperson, Dept of Science & Technology, GoI', role: 'Mission Director, Atal Innovation Mission', linkedin: "https://www.linkedin.com/in/rramanan27" },
    { name: 'Mr. Rishikesh Patankar', image: "/images/speakers/rishikesh-patankar.webp", title: 'Vice President', role: 'National Skill Development Corporation', linkedin: "https://www.linkedin.com/in/rishikesh-patankar-ph-d-a0bb0863" },
    { name: 'Mr. Balakrisnan I', image: "/images/speakers/balakrisnan-i.webp", title: 'Joint Director/ Scientist', role: 'Ministry of Electronics & IT, GoI', linkedin: "https://www.linkedin.com/in/balakrishna-i-9a4257181" },
    { name: 'Mr. Apurva Kumar Mishra', image: "/images/speakers/apurva-mishra.webp", title: 'Consultant', role: 'Economic Advisory Board to PM', linkedin: null },
    { name: 'Mr. Anisshh Somani', image: "/images/speakers/ashish-somani.webp", title: 'Program Director', role: 'INDIAai, Govt of India', linkedin: "https://www.linkedin.com/in/anishsomani/?originalSubdomain=in" },
    { name: 'Mr. Aman Bhaiya', image: "/images/speakers/aman-bhaiya.webp", title: 'Vice President', role: 'SBI Foundation', linkedin: "https://www.linkedin.com/in/amanbhaiya" },
  ],
  corporate: [
    { name: 'Mr. Vidur Dewan', image: "/images/speakers/vidur-dewan.webp", title: 'Associate VP', role: 'Edelman Global Advisory', linkedin: "https://www.linkedin.com/in/vidur-d" },
    { name: 'Dr. Ganesaraman K', image: "/images/speakers/ganesaraman-k.webp", title: 'Vice President', role: '[24]7.ai', linkedin: "https://www.linkedin.com/in/ganesaraman" },
    { name: 'Dr. Praveen Kamath Kumbla', image: "/images/speakers/praveen-kamath.webp", title: 'General Manager HR', role: 'Wipro', linkedin: "https://www.linkedin.com/in/dr-praveen-kamath-kumbla-04111811a" },
    { name: 'Mr. Vithal Madyalkar', image: "/images/speakers/vithal-madyalkar.webp", title: 'Director', role: 'IBM Innovation Centre for Education', linkedin: "https://www.linkedin.com/in/vithal-madyalkar-baa720247" },
    { name: 'Mr. Manoj Prasad', image: "/images/speakers/manoj-prasad.webp", title: 'Regional Head', role: 'Tata Capital', linkedin: "https://www.linkedin.com/in/prasadmanoj" },
  ],
  academic: [
    { name: 'Prof. Govind R. Kadambi', image: "/images/speakers/govind-kadambi.webp", title: 'Professor', role: 'Ramaiah University of Applied Sciences', linkedin: "https://www.linkedin.com/in/govind-kadambi-64106a141" },
    { name: 'Dr. M.H. Bala Subramanya', image: "/images/speakers/bala-subramanya.webp", title: 'Professor', role: 'IISc, Bangalore', linkedin: "https://www.linkedin.com/in/prof-m-h-bala-subrahmanya-680b968" },
    { name: 'Dr. Jon Thomas', image: "/images/speakers/jon-thomas.webp", title: 'Associate Professor', role: 'University of Fraser Valley, Canada', linkedin: "https://www.linkedin.com/in/drvjthomas" },
    { name: 'Dr. Suchit Ahuja', image: "/images/speakers/suchit-ahuja.webp", title: 'Associate Professor', role: 'Concordia University, Canada', linkedin: "https://www.linkedin.com/in/asuchit" },
  ]
};

export const COMMITTEES = {
  executive: [
    { name: 'Prof. Kuldeep Kumar Raina', image: "/images/leadership/kuldeep-raina.webp", role: 'Patron (LEADS Next Gen Centre)', designation: 'Honourable Vice-Chancellor of RUAS', linkedin: "https://www.linkedin.com/in/dr-kuldeep-raina-b4207524" },
    { name: 'Dr. K. M. Sharath Kumar', image: "/images/leadership/sharath-kumar.webp", role: 'Chief Adviser (LEADS Next Gen Centre)', designation: 'Professor and Dean of FMC, RUAS', linkedin: "https://www.linkedin.com/in/dr-k-m-sharath-kumar-ph-d-80400714" },
    { name: 'Dr. Subhadeep Mukherjee', image: "/images/leadership/subhadeep-mukherjee.webp", role: 'Centre Head (LEADS Next Gen Centre)', designation: 'Associate Professor of FMC, RUAS', linkedin: "https://www.linkedin.com/in/dr-subhadeep-mukherjee-aa78a182" },
    { name: 'Mr. Ajay R', image: "/images/committee/ajay-r.webp", role: 'Finance Head and Auditor (LEADS Next Gen Centre)', designation: 'Assistant Professor of FMC, RUAS', linkedin: "https://www.linkedin.com/in/ajay-r-50b467270" },
    { name: 'Dr. Kiran Kumar B M', image: "/images/committee/kiran-kumar.webp", role: 'Head Event & Campus Coordination (LEADS Next Gen Centre) RT Campus', designation: 'Associate Professor of FET, RUAS', linkedin: "https://www.linkedin.com/in/dr-kiran-kumar-b-m-17539769" },
    { name: 'Dr. Pallabi Mund', image: "/images/committee/pallabi-mund.webp", role: 'Head Event & Campus Coordination (LEADS Next Gen Centre) GG Campus', designation: 'Associate Professor of FMC, RUAS', linkedin: "https://www.linkedin.com/in/dr-pallabi-mund-53163a20" },
    { name: 'Ms. Sujata Bijwe', image: "/images/committee/sujata-bijwe.webp", role: 'Head Industry Connect (LEADS Next Gen Centre)', designation: 'Adjunct Faculty of FMC, RUAS', linkedin: null }
  ],
  core: [
    { name: 'Mr. Gurutejas C', image: "/images/committee/gurutejas-c.webp", role: 'Sr. President', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/gurutejas-c-215216291/" },
    { name: 'Mr. Abhijit Arya', image: "/images/committee/abhijit-arya.webp", role: 'Sr. Vice President', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/abhijit-arya-402570285/" },
    { name: 'Mr. Laksh Soorya Singh', image: "/images/committee/laksh-soorya-singh.webp", role: 'Sr. Events & Operations Head', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/laksh-soorya-singh-ab4212291/" },
    { name: 'Mr. Bhawen Maroo', image: "/images/committee/bhawen-maroo.webp", role: 'Sr. Events & Operations Head', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/bhawen-maroo/" },
    { name: 'Ms. Shreesha S.N', image: "/images/committee/shreesha-sn.webp", role: 'Sr. Social Media & Design Head', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/shreesha-s-n-549536292/" },
    { name: 'Ms. Bharvi A Padia', image: "/images/committee/bharvi-padia.webp", role: 'Sr. PR Head', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/bharvi-a-7063a62a0/" },
    { name: 'Mr. Arvind Rakshith G', image: "/images/committee/arvind-rakshith.webp", role: 'Sr. Finance & Sponsorship Head', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/arvind-rakshith-94a36a375/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: 'Mr. Syed Furqaan Ahmed', image: "/images/committee/syed-furqaan.webp", role: 'Sr. Research & Development Head', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/sydkwests/" }
  ],
  organizingMembers: [
    { name: 'Nuthan H', image: "/images/committee/nuthan-h.webp", role: 'President', designation: 'Organizing Committee', linkedin: null },
    { name: 'Kunal Bhadauria', image: "/images/committee/kunal-bhadauria.webp", role: 'Vice President', designation: 'Organizing Committee', linkedin: null },
    { name: 'Sudev Mitra', image: "/images/committee/sudev-mitra.webp", role: 'Chief Coordinator', designation: 'Organizing Committee', linkedin: null },
    { name: 'Jyotsna Karn', image: "/images/committee/jyotsna-karn.webp", role: 'Chief Coordinator', designation: 'Organizing Committee', linkedin: null },
    { name: 'Pranav P J', image: "/images/committee/pranav-pj.webp", role: 'Chief Coordinator', designation: 'Organizing Committee', linkedin: null },
    { name: 'Shravya T', image: "/images/committee/shravya-t.webp", role: 'Chief Coordinator', designation: 'Organizing Committee', linkedin: null },
    { name: 'Shriram SG', image: "/images/committee/shriram-sg.webp", role: 'General Secretary', designation: 'Organizing Committee', linkedin: null },
    { name: 'S Bhavya Shree', image: "/images/committee/bhavya-shree.webp", role: 'General Secretary', designation: 'Organizing Committee', linkedin: null },
    { name: 'Manoj Petakamsetty', image: "/images/committee/manoj-petakamsetty.webp", role: 'General Secretary', designation: 'Organizing Committee', linkedin: null },
    { name: 'Yash Chandak', image: "/images/committee/yash-chandak.webp", role: 'Head-Operations and Logistics', designation: 'Organizing Committee', linkedin: null },
    { name: 'Kayomarz Pavri', image: "/images/committee/kayomarz-pavri.webp", role: 'Head-Design and Social Media', designation: 'Organizing Committee', linkedin: null },
    { name: 'Shwetha S', image: "/images/committee/shwetha-s.webp", role: 'Head-Design and Social Media', designation: 'Organizing Committee', linkedin: null },
    { name: 'Niyati Chawra', image: "/images/committee/niyati-chawra.webp", role: 'Head-Leadership and Development', designation: 'Organizing Committee', linkedin: null },
    { name: 'Sadiya Sawood', image: "/images/committee/sadiya-sawood.webp", role: 'Head-Leadership and Development', designation: 'Organizing Committee', linkedin: null },
    { name: 'Nimisha K M', image: "/images/committee/nimisha-km.webp", role: 'Head-Sustainability and Innovation', designation: 'Organizing Committee', linkedin: null },
    { name: 'Kishan KP', image: "/images/committee/kishan-kp.webp", role: 'Head-Marketing and Branding', designation: 'Organizing Committee', linkedin: null },
    { name: 'Aravind Manashetti', image: "/images/committee/arvind-manashetti.webp", role: 'Head-Finance and Sponsorship', designation: 'Organizing Committee', linkedin: null }
  ],
  collaborativePartners: [
    { 
      name: 'Sahana Mahadev', 
      image: "/images/committee/sahana-mahadev.webp",
      role: 'Collaborative Partner', 
      designation: 'Senior Manager Business Development and Operations', 
      linkedin: 'https://www.linkedin.com/in/sahana-mahadev-7b7532154?utm_source=share_via&utm_content=profile&utm_medium=member_android' 
    },
    { 
      name: 'Anurag Pandey', 
      image: "/images/committee/anurag-pandey.webp",
      role: 'Collaborative Partner', 
      designation: 'Market Research and Business Development', 
      linkedin: 'https://www.linkedin.com/in/anurag-pandey-126b5326b?utm_source=share_via&utm_content=profile&utm_medium=member_android' 
    }
  ]
};

export const SPONSORSHIP_MATRIX = {
  corporate: {
    title: "Startups, Corporate Firms, MNCs",
    tiers: [
      {
        name: "Event Sponsor",
        price: "₹3,00,000",
        benefits: [
          "Standy and Banners",
          "Digital Promotions",
          "Branding in Summit Badges & Bands",
          "Summit Dinner Invitation",
          "Exhibition Stall",
          "Title Association"
        ]
      },
      {
        name: "Co-Sponsor",
        price: "₹4,00,000",
        benefits: [
          "Logo on Main Screen and Banners (Co-Sponsor Recognition)",
          "Digital Promotions",
          "Video Feature During Inauguration",
          "LED Screen Display",
          "Summit Dinner Invitation",
          "Exhibition Stall"
        ]
      },
      {
        name: "Title Sponsor",
        price: "₹5,00,000",
        benefits: [
          "Title Logo Association Across Summit Platforms",
          "Branding on Banners and Promotions",
          "Video Feature During Inauguration",
          "Summit Podium Presence & LED Screen Display",
          "Summit Dinner Invitation",
          "Recognition Memento",
          "Exhibition Stall"
        ]
      },
      {
        name: "Gold Sponsor",
        price: "₹10,00,000",
        benefits: [
          "Title Association & Branding on Banners/Promotions",
          "Video Feature During Inauguration",
          "Mention During Inauguration & Valedictory Ceremony",
          "Summit Podium Presence & LED Screen Display",
          "Gala Dinner Branding (Invitation Visibility)",
          "Panel Speaker Opportunity",
          "Branding in Summit Kit, Badges & Bands",
          "Networking Arena Access",
          "Exhibition Stall"
        ]
      },
      {
        name: "Platinum Sponsor",
        price: "₹15,00,000",
        benefits: [
          "Title Association & Bharat Lead Award Recognition",
          "Branding on Banners, Posters, and Digital Promotions",
          "Video Feature During Inauguration and Key Sessions",
          "Mention During Inauguration & Valedictory Ceremony",
          "Summit Podium Presence & LED Screen Display",
          "Exclusive Branding during the Summit Gala Dinner",
          "Product Launch Opportunity",
          "Panel Speaker in Panel Discussions",
          "Branding in Summit Kit, Badges & Bands",
          "Networking Arena Access",
          "Exhibition Stall"
        ]
      }
    ]
  },
  educational: {
    title: "Educational Institutions",
    tiers: [
      {
        name: "Co-Host",
        price: "₹2,00,000",
        benefits: [
          "Title Association",
          "Banners",
          "Online Ads Sharing",
          "Event Promotions",
          "Posters",
          "Video at Inauguration",
          "Mention during Inauguration",
          "Video / Intro during Events",
          "Conclave Podium",
          "LED Screen Display",
          "Conclave Dinner Invitation",
          "Panel Discussion / Speaker",
          "Special Recognition (Memento)",
          "Passes: 20"
        ]
      },
      {
        name: "Academic Sponsor",
        price: "₹5,00,000",
        benefits: [
          "Title Association",
          "Banners",
          "Online Ads Sharing",
          "Event Promotions",
          "Posters",
          "Video at Inauguration",
          "Mention during Inauguration",
          "Video / Intro during Events",
          "Conclave Podium",
          "LED Screen Display",
          "Conclave Dinner Invitation",
          "Panel Discussion / Speaker",
          "Special Recognition (Memento)",
          "Passes: 30"
        ]
      }
    ]
  }
};

export const STALLS = [
  { 
    name: 'Silver Stall', 
    price: '₹ 20,000', 
    size: '3 x 3', 
    features: [
        'Standing banner outside auditorium', 
        'Product display', 
        'Delegate kit', 
        'Food coupons'
    ] 
  },
  { 
    name: 'Gold Stall', 
    price: '₹ 30,000', 
    size: '4 x 3', 
    features: [
        'Social media promotion space', 
        'Standing banner outside auditorium', 
        'Product display', 
        'Delegate kit', 
        'Food coupons'
    ] 
  },
  { 
    name: 'Platinum Stall', 
    price: '₹ 50,000', 
    size: '6 x 3', 
    features: [
        'Online logo (website)', 
        'Social media promotion space', 
        'Banners outside auditorium', 
        'Product & banner display', 
        'Delegate kit', 
        'Food coupons'
    ] 
  },
];

export const BRAND_AMPLIFICATION = {
  digital: [
    "Dedicated posts and reels on official social media channels",
    "Tagging in all event-related content for maximum visibility",
    "Promotion through social media broadcasts and email campaigns"
  ],
  onGround: [
    "Prominent booth space at the main conference venue",
    "Product launches, sampling, and interactive contests",
    "Live announcements and special mentions during key sessions and games"
  ],
  legacy: [
    "Branding on delegate kits, lanyards, event brochures, conference booklets",
    "Logo placement on banners, posters, backdrops, volunteer T-shirts"
  ],
  engagement: [
    "Opportunity to conduct workshops or host a “Masterclass”",
    "Sponsor specific activities (e.g., “Treasure Hunt Powered by your brand”)"
  ]
};

export const GALLERY_IMAGES = [
  { src: "/images/gallery/g1.webp", alt: "Summit Highlights" },
  { src: "/images/gallery/g2.webp", alt: "Keynote Session" },
  { src: "/images/gallery/g3.webp", alt: "Panel Discussion" },
  { src: "/images/gallery/g4.webp", alt: "Networking" },
  { src: "/images/gallery/g5.webp", alt: "Cultural Event" },
  { src: "/images/gallery/g6.webp", alt: "Awards" },
  { src: "/images/gallery/g7.webp", alt: "Innovation Expo" },
  { src: "/images/gallery/g8.webp", alt: "Workshops" },
  { src: "/images/gallery/g9.webp", alt: "Delegates" },
  { src: "/images/gallery/g10.webp", alt: "Campus Tour" },
  { src: "/images/gallery/g11.webp", alt: "Guest Speakers" },
  { src: "/images/gallery/g12.webp", alt: "Closing Ceremony" },
  { src: "/images/gallery/g13.webp", alt: "Interactive Sessions" },
  { src: "/images/gallery/g14.webp", alt: "Student Engagement" },
  { src: "/images/gallery/g15.webp", alt: "Exhibition Stalls" },
  { src: "/images/gallery/g16.webp", alt: "Team Celebration" }
];

export const VIDEO_UPDATES = [
  {
    id: '1',
    type: 'linkedin',
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7427804347389902848?compact=1',
    title: 'LinkedIn Update 1'
  },
  {
    id: '2',
    type: 'linkedin',
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7428137070902177792?compact=1',
    title: 'LinkedIn Update 2'
  }
];

export const EVENT_TICKER_ITEMS = [
    "Catalyst Insight EP 1",
    "DegreeLab",
    "Expert Talk",
    "Fireside Talk",
    "Founders Fireside",
    "REEN Conference",
    "Policy Workshop",
    "Catalyst Insight EP 2",
    "Catalyst Ep 3",
    "BMA Summit",
    "Deeksharambh",
    "IPHEX Delhi",
    "Transformation Seminar",
    "Green Leaders Circle"
];