import { Users, Lightbulb, Target, Trophy, Mic, Globe, Handshake, ShieldCheck, Terminal, Video, Map, Scroll, Recycle, Sprout, LayoutGrid, Award, History, Image as ImageIcon, CalendarCheck, Megaphone, MapPin, Mail, Sparkles, Coffee, Laptop, Utensils, Presentation, Facebook, Instagram, Linkedin, Youtube, AtSign, GraduationCap, Briefcase, Library, ChevronRight, UserPlus } from 'lucide-react';

export const WHATSAPP_NUMBER = "917899293097"; 
export const CONTACT_EMAIL = "info@bharatleadsummit.com";
export const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"; 
export const BROCHURE_URL = "https://drive.google.com/drive/folders/1O-UbShpZ--r94p_vvEJviaqqReF8_xJ0?usp=share_link"; 
export const PAYMENT_PORTAL_URL = "#"; 

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/1EQWdysDEx/?mibextid=wwXIfr',
  instagram_leads: 'https://www.instagram.com/leads_next_gen_ruas?igsh=MmxhODgyOHA3N2V1&utm_source=qr',
  instagram_bls: 'https://www.instagram.com/bharatlead_summit?igsh=b3c5dmtwMG43MmMw&utm_source=qr',
  threads: 'https://www.threads.com/@leads_next_gen_ruas?igshid=NTc4MTIwNjQ2YQ==',
  linkedin: 'https://www.linkedin.com/company/ecellfmcruas/posts/?feedView=all',
  youtube: 'https://youtube.com/@leads_msruas_next_gen_centre?si=o5LCtlMHXJEFnYa6'
};

export const FAQ_DATA = [
  {
    question: "Who can attend the Bharat Lead Summit 2026?",
    answer: "The summit is open to university students, industry delegates, academic experts, and young entrepreneurs interested in sustainable leadership and Indian industry growth."
  },
  {
    question: "Is there a registration fee for the competitions?",
    answer: "Yes, specific competitions like the BharatLead Challenge and Prompt Engineering have registration fees. Details can be found in the brochure or during the registration process on the RUAS portal."
  },
  {
    question: "Will participants receive certificates?",
    answer: "Yes, all registered delegates and competition participants will receive official certificates from the LEADS Next Gen Centre, Ramaiah University of Applied Sciences."
  },
  {
    question: "Where exactly is the venue located?",
    answer: "The event is hosted at the Gnanagangothri Campus, Ramaiah University of Applied Sciences, New BEL Road, Bangalore. Detailed location maps are available on our contact page."
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
          { name: 'Organizing Committee', href: '/about#organizing-committee' }
        ]
      },
      { name: 'Gallery', href: '/about#gallery', icon: ImageIcon },
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
        name: 'Speakers', 
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
      { name: 'Prompt Engineering', href: '/events#events', icon: Terminal },
      { name: 'Sustainability Content', href: '/events#events', icon: Video },
      { name: 'Eco Quest', href: '/events#events', icon: Map },
      { name: 'Policy Conclave', href: '/events#events', icon: Scroll },
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

export const SUMMIT_SCHEDULE = {
  day1: [
    { time: "09:00 AM", event: "Registration & Welcome Kit", icon: Laptop },
    { time: "10:30 AM", event: "Grand Inauguration Ceremony", icon: Sparkles },
    { time: "11:30 AM", event: "Keynote: Leadership for Viksit Bharat", icon: Mic },
    { time: "01:00 PM", event: "Networking Lunch", icon: Utensils },
    { time: "02:30 PM", event: "Track A: AI & Creator Economy", icon: Terminal },
    { time: "04:00 PM", event: "High Tea & Networking", icon: Coffee },
    { time: "05:00 PM", event: "Eco Quest Launch", icon: Map },
  ],
  day2: [
    { time: "09:30 AM", event: "Morning Strategy Session", icon: Presentation },
    { time: "11:00 AM", event: "BharatLead Challenge Finals", icon: Trophy },
    { time: "12:30 PM", event: "Sustainable Startup Pitch", icon: Sprout },
    { time: "01:30 PM", event: "Delegate Lunch", icon: Utensils },
    { time: "03:00 PM", event: "Policy Conclave Debate", icon: Scroll },
    { time: "04:30 PM", event: "Valedictory & Awards", icon: Award },
    { time: "06:30 PM", event: "Summit Gala Dinner", icon: Utensils },
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
  collaborators: ['Bangalore Management Association (BMA)', "Institution's Innovation Council"],
  media: 'Business Standard',
  industry: [
    'NITI Aayog', 'Dept of Science & Technology', 'Skill India', 'NSDC',
    'IDFC First Bank', 'Tata Capital', 'SBI Foundation',
    'IBM', 'Wipro', 'Cisco', '[24]7.ai',
    'Concordia University', 'University of Fraser Valley',
    'Edelman Global Advisory'
  ]
};

export const LEGACY_STATS = [
  { event: 'International REEN Conference 2025', count: '01' },
  { event: 'Anveshan Conference', count: '02' },
  { event: 'ANQ Congress Conference', count: '03' },
  { event: 'Futuristic Leadership Summit 2025', count: '04' },
  { event: 'IIC Regional Meet 2025', count: '05' },
];

export const COMPETITIONS_LIST = [
  {
    title: 'Prompt Engineering Championship',
    description: 'Master human-AI collaboration by crafting prompts to solve complex creative and analytical challenges.',
    icon: Terminal,
    color: 'bg-indigo-500'
  },
  {
    title: 'Sustainability Content Creator',
    description: 'Compete to produce impactful digital content that drives environmental awareness and inspires sustainable living.',
    icon: Video,
    color: 'bg-pink-500'
  },
  {
    title: 'Eco Quest Treasure Hunt',
    description: 'Embark on a campus-wide experiential adventure where sustainability clues and teamwork merge.',
    icon: Map,
    color: 'bg-emerald-500'
  },
  {
    title: 'Policy Conclave',
    description: 'Step into the role of national policymakers and draft real-world, data-driven solutions for governance.',
    icon: Scroll,
    color: 'bg-amber-500'
  },
  {
    title: 'Zero-Waste Business Challenge',
    description: 'Design and pitch scalable, 100% waste-free business models aligning with circular economy goals.',
    icon: Recycle,
    color: 'bg-teal-500'
  },
  {
    title: 'Green Innovation Expo',
    description: 'A showcase of sustainable startups and research projects, creating a hub for investment and collaboration.',
    icon: Sprout,
    color: 'bg-green-500'
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

// NOTE: Please ensure you create 'public/images/leadership', 'public/images/speakers', 
// 'public/images/committee', and 'public/images/gallery' folders and add files with these names.

export const LEADERSHIP_MESSAGES = [
  {
    name: "Prof. Kuldeep Kumar Raina",
    role: "Vice Chancellor, MSRUAS",
    message: "Developing futuristic leaders focused on sustainable action. Leadership is responsibility, empathy, and compassion.",
    image: "/images/leadership/kuldeep-raina.jpg",
    linkedin: "https://www.linkedin.com/in/dr-kuldeep-raina-b4207524"
  },
  {
    name: "Dr. K M Sharath Kumar",
    role: "Dean, FMC",
    message: "A platform for students and industry leaders to tackle contemporary challenges and work towards Viksit Bharat 2047.",
    image: "/images/leadership/sharath-kumar.jpg",
    linkedin: "https://www.linkedin.com/in/dr-k-m-sharath-kumar-ph-d-80400714"
  },
  {
    name: "Dr. Subhadeep Mukherjee",
    role: "Centre Head",
    message: "We unite industry leaders and young change-makers to discuss innovative solutions, emphasizing dialogue and collaboration.",
    image: "/images/leadership/subhadeep-mukherjee.jpg",
    linkedin: "https://www.linkedin.com/in/dr-subhadeep-mukherjee-aa78a182"
  }
];

export const GALLERY_IMAGES = [
  {
    url: "/images/gallery/bma-futuristic-summit.jpg",
    title: "BMA Futuristic Summit"
  },
  {
    url: "/images/gallery/catalyst-leadership-talk.jpg",
    title: "Catalyst Leadership Talk"
  },
  {
    url: "/images/gallery/founders-fireside.jpg",
    title: "Founders Fireside"
  },
  {
    url: "/images/gallery/iisc-ring-conference.jpg",
    title: "IISc Ring Conference"
  },
  {
    url: "/images/gallery/iphex-delhi.jpg",
    title: "Iphex Delhi"
  },
  {
    url: "/images/gallery/transformation-seminar.jpg",
    title: "Transformation Seminar"
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
    title: 'The BharatLead Challenge',
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
const PLACEHOLDER_AVATAR = "/images/core/avatar-placeholder.jpg";

export const SPEAKERS = {
  governing: [
    { name: 'Mr. Ramanan Ramanathan', image: "/images/speakers/ramanan-ramanathan.jpg", title: 'Chairperson, Dept of Science & Technology, GoI', role: 'Mission Director, Atal Innovation Mission', linkedin: "https://www.linkedin.com/in/rramanan27" },
    { name: 'Mr. Rishikesh Patankar', image: "/images/speakers/rishikesh-patankar.jpg", title: 'Vice President', role: 'National Skill Development Corporation', linkedin: "https://www.linkedin.com/in/rishikesh-patankar-ph-d-a0bb0863" },
    { name: 'Mr. Balakrisnan I', image: "/images/speakers/balakrisnan-i.jpg", title: 'Joint Director/ Scientist', role: 'Ministry of Electronics & IT, GoI', linkedin: "https://www.linkedin.com/in/balakrishna-i-9a4257181" },
    { name: 'Mr. Apurva Kumar Mishra', image: "/images/speakers/apurva-mishra.jpg", title: 'Consultant', role: 'Economic Advisory Board to PM', linkedin: null },
    { name: 'Mr. Anisshh Somani', image: "/images/speakers/ashish-somani.jpg", title: 'Program Director', role: 'INDIAai, Govt of India', linkedin: "https://www.linkedin.com/in/anishsomani/?originalSubdomain=in" },
    { name: 'Mr. Aman Bhaiya', image: "/images/speakers/aman-bhaiya.jpg", title: 'Vice President', role: 'SBI Foundation', linkedin: "https://www.linkedin.com/in/amanbhaiya" },
  ],
  corporate: [
    { name: 'Mr. Vidur Dewan', image: "/images/speakers/vidur-dewan.jpg", title: 'Associate VP', role: 'Edelman Global Advisory', linkedin: "https://www.linkedin.com/in/vidur-d" },
    { name: 'Dr. Ganesaraman K', image: "/images/speakers/ganesaraman-k.jpg", title: 'Vice President', role: '[24]7.ai', linkedin: "https://www.linkedin.com/in/ganesaraman" },
    { name: 'Dr. Praveen Kamath Kumbla', image: "/images/speakers/praveen-kamath.jpg", title: 'General Manager HR', role: 'Wipro', linkedin: "https://www.linkedin.com/in/dr-praveen-kamath-kumbla-04111811a" },
    { name: 'Mr. Vithal Madyalkar', image: "/images/speakers/vithal-madyalkar.jpg", title: 'Director', role: 'IBM Innovation Centre for Education', linkedin: "https://www.linkedin.com/in/vithal-madyalkar-baa720247" },
    { name: 'Mr. Manoj Prasad', image: "/images/speakers/manoj-prasad.jpg", title: 'Regional Head', role: 'Tata Capital', linkedin: "https://www.linkedin.com/in/prasadmanoj" },
  ],
  academic: [
    { name: 'Prof. Govind R. Kadambi', image: "/images/speakers/govind-kadambi.jpg", title: 'Professor', role: 'Ramaiah University of Applied Sciences', linkedin: "https://www.linkedin.com/in/govind-kadambi-64106a141" },
    { name: 'Dr. M.H. Bala Subramanya', image: "/images/speakers/bala-subramanya.jpg", title: 'Professor', role: 'IISc, Bangalore', linkedin: "https://www.linkedin.com/in/prof-m-h-bala-subrahmanya-680b968" },
    { name: 'Dr. Jon Thomas', image: "/images/speakers/jon-thomas.jpg", title: 'Associate Professor', role: 'University of Fraser Valley, Canada', linkedin: "https://www.linkedin.com/in/drvjthomas" },
    { name: 'Dr. Suchit Ahuja', image: "/images/speakers/suchit-ahuja.jpg", title: 'Associate Professor', role: 'Concordia University, Canada', linkedin: "https://www.linkedin.com/in/asuchit" },
  ]
};

export const COMMITTEES = {
  executive: [
    { name: 'Prof. Kuldeep Kumar Raina', image: "/images/leadership/kuldeep-raina.jpg", role: 'Patron', designation: 'Honourable Vice-Chancellor of MSRUAS', linkedin: "https://www.linkedin.com/in/dr-kuldeep-raina-b4207524" },
    { name: 'Dr. Sharath Kumar K. M.', image: "/images/leadership/sharath-kumar.jpg", role: 'Chief Advisor', designation: 'Professor and Dean of FMC, MSRUAS', linkedin: "https://www.linkedin.com/in/dr-k-m-sharath-kumar-ph-d-80400714" },
    { name: 'Dr. Subhadeep Mukherjee', image: "/images/leadership/subhadeep-mukherjee.jpg", role: 'Centre Head', designation: 'Associate Professor at FMC, MSRUAS', linkedin: "https://www.linkedin.com/in/dr-subhadeep-mukherjee-aa78a182" },
    { name: 'Mr. Ajay R', image: "/images/committee/ajay-r.jpg", role: 'Finance Head and Auditor', designation: 'Assistant Professor at FMC, MSRUAS', linkedin: "https://www.linkedin.com/in/ajay-r-50b467270" },
    { name: 'Dr. Kiran Kumar B M', image: "/images/committee/kiran-kumar.jpg", role: 'Head Event & Campus Coordination', designation: 'Associate Professor at FET, MSRUAS', linkedin: "https://www.linkedin.com/in/dr-kiran-kumar-b-m-17539769" },
    { name: 'Dr. Pallabi Mund', image: "/images/committee/pallabi-mund.jpg", role: 'Head Event & Campus Coordination', designation: 'Associate Professor at FMC, MSRUAS', linkedin: "https://www.linkedin.com/in/dr-pallabi-mund-53163a20" },
    { name: 'Ms. Sujata Bijwe', image: "/images/committee/sujata-bijwe.jpg", role: 'Head Industry Connect', designation: 'Adjunct Faculty at FMC, MSRUAS', linkedin: null }
  ],
  core: [
    { name: 'Mr. Gurutejas C', image: "/images/committee/gurutejas-c.jpg", role: 'Sr. President', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/gurutejas-c-215216291/" },
    { name: 'Mr. Abhijit Arya', image: "/images/committee/abhijit-arya.jpg", role: 'Sr. Vice President', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/abhijit-arya-402570285/" },
    { name: 'Mr. Laksh Soorya Singh', image: "/images/committee/laksh-soorya-singh.jpg", role: 'Sr. Events & Operations Head', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/laksh-soorya-singh-ab4212291/" },
    { name: 'Mr. Bhawen Maroo', image: "/images/committee/bhawen-maroo.jpg", role: 'Sr. Events & Operations Head', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/bhawen-maroo/" },
    { name: 'Ms. Shreesha S.N', image: "/images/committee/shreesha-sn.jpg", role: 'Sr. Marketing & Branding Head', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/shreesha-s-n-549536292/" },
    { name: 'Ms. Bharvi A Padia', image: "/images/committee/bharvi-padia.jpg", role: 'Sr. Social Media & Design Head', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/bharvi-a-7063a62a0/" },
    { name: 'Mr. Arvind Rakshith G', image: "/images/committee/arvind-rakshith.jpg", role: 'Sr. Finance & Sponsorship Head', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/arvind-rakshith-94a36a375/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: 'Mr. Syed Furqaan Ahmed', image: "/images/committee/syed-furqaan.jpg", role: 'Sr. Research & Development Head', designation: 'LEADS Next Gen Centre', linkedin: "https://www.linkedin.com/in/sydkwests/" }
  ]
};

export const SPONSORSHIP_TIERS = [
  {
    name: 'Event Sponsor',
    price: '₹3,00,000',
    featured: false,
    benefits: ['Title Association', 'Banners & Posters', 'Online Ads Sharing', 'Video during Events', 'LED Screen Display', 'Conclave Dinner Invite']
  },
  {
    name: 'Title Sponsor',
    price: '₹5,00,000',
    featured: true,
    benefits: ['Exclusive Title Association', 'Premium Banner Placement', 'Keynote Speaker Slot', 'VIP Dinner Access', 'Full Media Coverage', 'Maximum Brand Visibility']
  },
  {
    name: 'Co-Sponsor',
    price: '₹4,00,000',
    featured: false,
    benefits: ['All Event Sponsor Benefits', 'Video at Inauguration', 'Speaker Slot', 'Conclave Podium Access', 'Special Recognition Memento']
  },
];

export const STALLS = [
  { name: 'Platinum Stall', price: '₹50,000', size: '6x3', features: 'Online logo, social media promo, product display, delegate kit.' },
  { name: 'Gold Stall', price: '₹30,000', size: '4x3', features: 'Social media promo, standing banner, product display.' },
  { name: 'Silver Stall', price: '₹20,000', size: '3x3', features: 'Standing banner, product display, food coupons.' },
];
