import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import { ShieldCheck, Users, Clock, Scale, Heart, SearchCheck, Calculator } from "lucide-react"
import { FileText, Receipt, ArrowLeftRight, Copyright, IdCard, Briefcase, ShoppingCart } from "lucide-react"

// Home menu data
export interface IMenuDataItem {
    id: string,
    label: string,
    link: string,
}

export const menuData: IMenuDataItem[] = [
    {
        id: 'menuData1',
        label: 'Home',
        link: '/',
    },
    {
        id: 'menuData2',
        label: 'Services',
        link: '/services',
    },
    {
        id: 'menuData3',
        label: 'Tax Rates',
        link: '/tax-rates',
    },
    {
        id: 'menuData4',
        label: 'About Us',
        link: '/about',
    },
    {
        id: 'menuData5',
        label: 'Blog',
        link: '/blog',
    },
    {
        id: 'menuData6',
        label: 'Calculator',
        link: '',
    },
];

// footer data
export interface IFooterSocialLinksItem {
    id: string,
    link: string,
    label: string,
    icon: React.ReactElement,
}

export const footerSocialLinks: IFooterSocialLinksItem[] = [
    {
        id: 'footerSocialLink1',
        link: '#',
        label: 'LinkedIn',
        icon: <FaLinkedinIn size={20} />,
    },
    {
        id: 'footerSocialLink2',
        link: '#',
        label: 'Facebook',
        icon: <FaFacebookF size={20} />,
    },
    {
        id: 'footerSocialLink3',
        link: '#',
        label: 'Instagram',
        icon: <FaInstagram size={20} />,
    },
    {
        id: 'footerSocialLink4',
        link: '#',
        label: 'Youtube',
        icon: <FaYoutube size={20} />,
    },
    {
        id: 'footerSocialLink5',
        link: '#',
        label: 'Twitter',
        icon: <FaTwitter size={20} />,
    }
];

export interface IFooterLinkItem {
    id: string,
    label: string,
    href: string,
}

export const footerServicesData: IFooterLinkItem[] = [
    { id: "footerLink1", label: "Income Tax Return Filing", href: "/services/income-tax-return-filing" },
    { id: "footerLink2", label: "Business Registration", href: "/services/business-registration" },
    { id: "footerLink3", label: "Company Registration", href: "/services/company-registration" },
    { id: "footerLink4", label: "NTN Registration", href: "/services/ntn-registration" },
    { id: "footerLink5", label: "Sales Tax Registration", href: "/services/sales-tax-registration" },
    { id: "footerLink6", label: "Trademark Registration", href: "/services/trademark-registration" },
]

export const footerQuickLinks: IFooterLinkItem[] = [
    { id: "footerQuickLink1", label: "Home", href: "/" },
    { id: "footerQuickLink2", label: "About Us", href: "/about" },
    { id: "footerQuickLink3", label: "Blog", href: "/blog" },
    { id: "footerQuickLink4", label: "FAQ", href: "/faq" },
    { id: "footerQuickLink5", label: "Calculator", href: "/calculator" },
]

export interface IHeroStateItems {
    to: number,
    suffix: string,
    label: string,
}

export const heroStatsData: IHeroStateItems[] = [
    { to: 10000, suffix: "+", label: "Our Clients" },
    { to: 1, suffix: " Day", label: "Fast Filing" },
    { to: 15, suffix: "+", label: "Services" },
    { to: 99, suffix: "%", label: "Satisfaction" },
]
export interface IQuickToolItem {
    id: string,
    icon: React.ReactNode,
    title: string,
    description: string,
    href?: string,
    action?: 'openCalculator' | 'openFilerStatus',
    variant: 'primary' | 'neutral',
}

export const quickToolsData: IQuickToolItem[] = [
    {
        id: "quickTool1",
        icon: <SearchCheck size={24} />,
        title: "Check Filer Status",
        description: "Instantly verify if you are on the FBR Active Taxpayer List.",
        action: "openFilerStatus",
        variant: "primary",
    },
    {
        id: "quickTool2",
        icon: <Calculator size={24} />,
        title: "Calculate Your Tax",
        description: "Estimate your income tax liability in a few simple steps.",
        action: "openCalculator",
        variant: "neutral",
    },
]

// services grid data
export interface IServiceItem {
    id: string,
    label: string,
    icon: string,
    href: string,
    highlighted?: boolean,
}

export const servicesGridData: IServiceItem[] = [
    {
        id: "svc1",
        label: "Business NTN",
        icon: "/assets/services/service1.svg",
        href: "/services/business-ntn",
        highlighted: true
    },

    {
        id: "svc2",
        label: "Simple NTN Registration",
        icon: "/assets/services/service2.svg",
        href: "/services/ntn-registration"
    },

    {
        id: "svc3",
        label: "Business Registration",
        icon: "/assets/services/service3.svg",
        href: "/services/business-registration"
    },

    {
        id: "svc4",
        label: "Company Registration",
        icon: "/assets/services/service4.svg",
        href: "/services/company-registration"
    },

    {
        id: "svc5",
        label: "Filer Registration",
        icon: "/assets/services/service5.svg",
        href: "/services/filer-registration"
    },

    {
        id: "svc6",
        label: "Tax Return Filing",
        icon: "/assets/services/service6.svg",
        href: "/services/income-tax-return-filing"
    },

    {
        id: "svc7",
        label: "Imp & Exp License (PSW)",
        icon: "/assets/services/service7.svg",
        href: "/services/psw-license"
    },

    {
        id: "svc8",
        label: "GST Registration",
        icon: "/assets/services/service8.svg",
        href: "/services/sales-tax-registration"
    },

    {
        id: "svc9",
        label: "Trade Mark Registration",
        icon: "/assets/services/service9.svg",
        href: "/services/trademark-registration"
    },

    {
        id: "svc10",
        label: "DNFBP",
        icon: "/assets/services/service10.svg",
        href: "/services/dnfbp"
    },

    {
        id: "svc11",
        label: "PSEB",
        icon: "/assets/services/service11.svg",
        href: "/services/pseb"
    },

    {
        id: "svc12",
        label: "PEC Registration",
        icon: "/assets/services/service12.svg",
        href: "/services/pec-registration"
    },

    {
        id: "svc13",
        label: "Chamber Membership",
        icon: "/assets/services/service13.svg",
        href: "/services/chamber-membership"
    },

    {
        id: "svc14",
        label: "DTS Registration",
        icon: "/assets/services/service14.svg",
        href: "/services/dts-registration"
    },

    {
        id: "svc15",
        label: "FBR Notices",
        icon: "/assets/services/service15.svg",
        href: "/services/fbr-notices"
    },

    {
        id: "svc16",
        label: "SECP Compliances",
        icon: "/assets/services/service16.svg",
        href: "/services/secp-compliances"
    },

]

// why filernow data
export interface IWhyFilerNowStep {
    number: string
    title: string
    description: string
    icon: React.ReactNode
    left: number
    top: number
    labelPosition: 'top' | 'bottom',
    textOffsetX?: number,
    textOffsetY?: number,
}

export const whyFilerNowSteps: IWhyFilerNowStep[] = [
    {
        number: "1",
        title: "Secure Process",
        description: "Your data and documents are handled with strict confidentiality and security.",
        icon: <ShieldCheck size={28} className="text-primary" />,
        left: 50.6,
        top: 50.0,
        labelPosition: 'top'
    },

    {
        number: "2",
        title: "Expert Consultants",
        description: "A qualified team of tax and corporate experts guides you at every step.",
        icon: <Users size={28} className="text-primary" />,
        left: 17.3,
        top: 65.2,
        labelPosition: 'bottom'
    },

    {
        number: "3",
        title: "Quick Registration",
        description: "Fast turnaround — most filings and registrations completed in a single day.",
        icon: <Clock size={28} className="text-primary" />,
        left: 40.0,
        top: 20,
        labelPosition: 'top'
    },

    {
        number: "4",
        title: "Legal Compliance",
        description: "Stay fully compliant with FBR and SECP regulations, always up to date.",
        icon: <Scale size={28} className="text-primary" />,
        left: 65.2,
        top: 25,
        labelPosition: 'bottom',
        textOffsetX: 70,
        textOffsetY: 40,
    },

    {
        number: "5",
        title: "Customer Satisfaction",
        description: "10,000+ satisfied clients trust FilerNow for their compliance needs.",
        icon: <Heart size={28} className="text-primary" />,
        left: 91.0,
        top: 30,
        labelPosition: 'top',
        textOffsetX: 150,
        textOffsetY: 20,
    },

]

// data/appData.tsx — new export, title/description/icon still come from whyFilerNowSteps only
export interface IWhyFilerNowStepExtra {
    image: string
    imageAlt: string
    highlights: { label: string, detail: string }[]
}

// indexed to match whyFilerNowSteps' existing order
export const whyFilerNowStepExtras: IWhyFilerNowStepExtra[] = [
    {
        // image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=900",
        image: "/assets/whyFilernowStepsExtra1.jpg",
        imageAlt: "Secure document handling",
        highlights: [
            { label: "Data Encryption", detail: "Bank-grade encryption on every document you upload." },
            { label: "Confidential Handling", detail: "Your records are never shared without consent." },
        ],
    },
    {
        // image: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=900",
        image: "/assets/whyFilernowStepsExtra2.jpg",
        imageAlt: "Consultant reviewing a client's case",
        highlights: [
            { label: "Qualified Team", detail: "Certified tax and corporate law consultants." },
            { label: "1-on-1 Guidance", detail: "A dedicated consultant assigned to your case." },
        ],
    },
    {
        // image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=900",
        image: "/assets/whyFilernowStepsExtra3.jpg",
        imageAlt: "Digital filing on a laptop",
        highlights: [
            { label: "Same-Day Filing", detail: "Most registrations completed within a single day." },
            { label: "Digital Process", detail: "No physical visits or paperwork required." },
        ],
    },
    {
        // image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=900",
        image: "/assets/whyFilernowStepsExtra4.jpg",
        imageAlt: "Compliance documents and regulations",
        highlights: [
            { label: "FBR & SECP Aligned", detail: "Always up to date with the latest regulations." },
            { label: "Ongoing Monitoring", detail: "We track deadlines so you never miss one." },
        ],
    },
    {
        // image: "https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=900",
        image: "/assets/whyFilernowStepsExtra5.jpg",
        imageAlt: "Satisfied client shaking hands",
        highlights: [
            { label: "10,000+ Clients", detail: "Trusted by individuals and businesses nationwide." },
            { label: "99% Satisfaction", detail: "Consistently rated for reliability and support." },
        ],
    },
]

export const whoWeAreTrustPoints: string[] = [
    "Transparent pricing with no hidden charges",
    "Dedicated consultant for every client",
    "End-to-end handling of documentation",
    "Timely reminders so you never miss a deadline",
]

export interface IAdvantageStat {
    value: string
    label: string
}

export interface IAdvantageItem {
    id: string
    badge: string
    title: string
    description: string
    stats: IAdvantageStat[]
    bottomText: string
    image: string
    imageAlt: string
    imageProofBadge?: string
    reverse: boolean
}

// data/appData.tsx
export const advantageStackData: IAdvantageItem[] = [
    {
        id: "adv1",
        badge: "Our Mission",
        title: "Making Tax Compliance Effortless for Every Pakistani",
        description: "To make tax compliance and business registration effortless and accessible for everyone in Pakistan — individuals, freelancers, startups, SMEs and companies alike.",
        stats: [{ value: "10,000+", label: "Clients Served" }, { value: "99%", label: "Satisfaction Rate" }],
        bottomText: "Precision and focus in every single filing.",
        image: "/assets/advantageStackImg1.png",
        imageAlt: "Precision and focus in every filing",
        imageProofBadge: "Trusted Nationwide",
        reverse: false,
    },
    {
        id: "adv2",
        badge: "Our Vision",
        title: "Pakistan's Most Trusted Digital Compliance Platform",
        description: "To be Pakistan's most trusted digital platform for tax filing and corporate compliance — handling everything from NTN registration to SECP incorporation.",
        stats: [{ value: "15+", label: "Services Offered" }, { value: "24/7", label: "Support Availability" }],
        bottomText: "One platform, every compliance need covered.",
        // image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
        image: "/assets/advantageStackImg2.jpg",
        imageAlt: "Digital compliance platform in Pakistan",
        imageProofBadge: "Nationwide Reach",
        reverse: true,
    },
    {
        id: "adv3",
        badge: "Why Businesses Trust Us",
        title: "Transparent, Reliable, and Always Available",
        description: "Transparent pricing, dedicated support, complete documentation management, and timely reminders — everything you need for a smooth, hassle-free tax experience.",
        stats: [
            { value: "1 Day", label: "Fast Filing Turnaround" },
            { value: `${whoWeAreTrustPoints.length}`, label: "Core Trust Commitments" },
        ],
        bottomText: "No hidden charges, no missed deadlines.",
        // image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
        image: "/assets/advantageStackImg3.jpg",
        imageAlt: "Consultant reviewing client documents",
        imageProofBadge: "Dedicated Support",
        reverse: false,
    },
    {
        id: "adv4",
        badge: "Comprehensive Coverage",
        title: "One Platform for Every Compliance Need",
        description: "From NTN and GST registration to trademark filing and SECP incorporation — every service a growing business needs, handled under one roof.",
        stats: [
            { value: `${servicesGridData.length}+`, label: "Services Covered" }, // derived from your existing services grid, not hardcoded
            { value: "5+", label: "Client Segments Served" },
        ],
        bottomText: "Individuals, freelancers, startups, SMEs and companies.",
        // image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
        image: "/assets/advantageStackImg4.jpg",
        imageAlt: "Business compliance documentation",
        imageProofBadge: "Full Service Range",
        reverse: true,
    },
]

export interface IFaqItem {
    id: string,
    question: string,
    answer: string,
}

export const faqData: IFaqItem[] = [
    {
        id: "faq-1",
        question: "Who needs to file a tax return and what's required?",
        answer: "Any individual or business earning taxable income in Pakistan should file a return. You typically need your CNIC, income details, bank statements and any deduction certificates. Our consultants review everything and file it for you.",
    },
    {
        id: "faq-2",
        question: "Why do I need NTN and how to apply?",
        answer: "NTN is essential to file taxes and appear in FBR’s system. Required for salaried persons, freelancers, and business owners.",
    },
    {
        id: "faq-3",
        question: "What's the benefit of being a filer in Pakistan?",
        answer: "Filer status brings lower tax rates, property/car registration savings, and ATL eligibility.",
    },
    {
        id: "faq-4",
        question: "Should I go for sole proprietorship or company?",
        answer: "Sole proprietorship is quick and simple. For scaling and legal protection, go with a Private Limited company.",
    },
    {
        id: "faq-5",
        question: "When is GST needed and what's the benefit?",
        answer: "GST is required if sales exceed Rs. 10 million or if you deal in taxable goods/services. It allows you to issue invoices and claim input tax.",
    },
    {
        id: "faq-6",
        question: "Do I need a license to import or export?",
        answer: "Yes. PSW & WEBOC are mandatory for international trade, even for small traders or Amazon sellers.",
    },
]

export interface IProcessPanel {
    id: string,
    eyebrow: string,
    heading: string,
    description: string,
    card: {
        image?: string,
        imageAlt: string,
        title: string,
        body: string,
        tags: string[],
    },
}

export const processTimelineData: IProcessPanel[] = [
    {
        id: "process-1",
        eyebrow: "01 — Submit",
        heading: "Share your documents",
        description: "Upload your CNIC, income details, and bank statements through a simple guided form — takes about five minutes.",
        card: {
            image: "/assets/howItWorksOverlay.png",
            imageAlt: "Client submitting documents through FilerNow",
            title: "Document Submission",
            body: "No paperwork runs, no office visits. Send everything securely from your phone or laptop, and we confirm receipt the same day.",
            tags: ["CNIC", "Bank Statements", "Income Details"],
        },
    },
    {
        id: "process-2",
        eyebrow: "02 — Review",
        heading: "We review and prepare",
        description: "A dedicated consultant checks every detail, applies eligible deductions, and prepares your filing for accuracy before anything is submitted.",
        card: {
            image: "/assets/whyFilernowStepsExtra2.jpg",
            imageAlt: "FilerNow consultant reviewing a tax filing",
            title: "Expert Review",
            body: "Every return is checked by a real consultant, not just software — so nothing gets missed and nothing gets overpaid.",
            tags: ["Deductions", "Accuracy Check", "Consultant Review"],
        },
    },
    {
        id: "process-3",
        eyebrow: "03 — Approve",
        heading: "You approve and sign off",
        description: "We walk you through the prepared filing, answer any questions, and get your confirmation before it's submitted to FBR.",
        card: {
            image: "/assets/whyFilernowStepsExtra3.jpg",
            imageAlt: "Client approving their tax filing",
            title: "Your Sign-Off",
            body: "You see exactly what's being filed before it's filed — full transparency, no surprises after the fact.",
            tags: ["Transparent Pricing", "Your Confirmation", "No Surprises"],
        },
    },
    {
        id: "process-4",
        eyebrow: "04 — File",
        heading: "We file and confirm",
        description: "Your return is submitted directly to FBR, and you receive official confirmation along with your filing record for future reference.",
        card: {
            image: "/assets/whyFilernowStepsExtra4.jpg",
            imageAlt: "Confirmed tax filing with FilerNow",
            title: "Filed & Confirmed",
            body: "Once submitted, you get proof of filing and a copy of your record — kept safely for next year, audits, or visa applications.",
            tags: ["FBR Submission", "Filing Record", "Confirmation"],
        },
    },
]

// custom testimonials
export interface IHomeTestimonialItem {
    id: string,
    name: string,
    role: string,
    avatarSrc?: string,
    rating: number,
    review: string,
}

export const homeTestimonialsData: IHomeTestimonialItem[] = [
    {
        id: "testimonial1",
        name: "Muhammad Adeel",
        role: "Verified Client",
        avatarSrc: "/assets/testi/testi1.jpg",
        rating: 5,
        review: "Excellent service from start to finish. The team at FilerNow is professional, friendly, and always available to answer questions. They resolved my FBR issues quickly and made the entire process simple and hassle-free. I highly recommend their services.",
    },
    {
        id: "testimonial2",
        name: "Muhammad mughal",
        role: "Verified Client",
        avatarSrc: "/assets/testi/testi2.png",
        rating: 5,
        review: "I was struggling in tax filing. FilerNow helped me in the process. The team is professional and competent.",
    },
    {
        id: "testimonial3",
        name: "Wajahat ali Siddiqui",
        role: "Verified Client",
        avatarSrc: "/assets/testi/testi3.png",
        rating: 5,
        review: "My experience has been quite good so far. They focus on customer satisfaction.",
    },
    {
        id: "testimonial4",
        name: "Faisal Durrani",
        role: "Verified Client",
        avatarSrc: "/assets/testi/testi4.png",
        rating: 5,
        review: "They handled my sales tax with great care. Smooth process and great support!",
    },
    {
        id: "testimonial5",
        name: "Shoaib Shair",
        role: "Verified Client",
        avatarSrc: "/assets/testi/testi5.png",
        rating: 4,
        review: "Highly recommended service for all tax and business needs in Pakistan!",
    },
    {
        id: "testimonial6",
        name: "Asad Rajpoot",
        role: "Verified Client",
        avatarSrc: "/assets/testi/testi6.png",
        rating: 4,
        review: "Extremely helpful and prompt communication. Truly impressed!",
    },
    {
        id: "testimonial7",
        name: "M. Saboor",
        role: "Verified Client",
        avatarSrc: "/assets/testi/testi7.png",
        rating: 4,
        review: "Reliable, quick, and professional service. Filing taxes is no longer a pain!",
    },
    {
        id: "testimonial8",
        name: "Qalb e Mominz",
        role: "Verified Client",
        avatarSrc: "/assets/testi/testi8.png",
        rating: 4,
        review: "The support I got from this team was outstanding.",
    },
    {
        id: "testimonial9",
        name: "Ismail Lilla",
        role: "Verified Client",
        avatarSrc: "/assets/testi/testi9.png",
        rating: 4,
        review: "Thank you for making tax filing this easy! Great experience.",
    },
    {
        id: "testimonial10",
        name: "Muhammad Shahid",
        role: "Verified Client",
        avatarSrc: "/assets/testi/testi10.png",
        rating: 4,
        review: "Definitely recommended. The team is knowledgeable and helpful.",
    },
    // {
    //     id: "testimonial11",
    //     name: "Engr. Shah Nawaz Saeed",
    //     role: "Verified Client",
    //     avatarSrc: "/assets/testi/testi11.png",
    //     rating: 4,
    //     review: "Smooth, fast, and professional work. I’ll be back next year.",
    // },
    // {
    //     id: "testimonial12",
    //     name: "Shoaib Shair",
    //     role: "Verified Client",
    //     avatarSrc: "/assets/testi/testi12.png",
    //     rating: 4,
    //     review: "Highly recommended service for all tax and business needs in Pakistan!",
    // },
    // {
    //     id: "testimonial13",
    //     name: "Shoaib Shair",
    //     role: "Verified Client",
    //     avatarSrc: "/assets/testi/testi13.png",
    //     rating: 4,
    //     review: "Highly recommended service for all tax and business needs in Pakistan!",
    // },
]

// what we do about section
export interface IWhatWeDoItemAbout {
    id: string,
    label: string,
    icon: React.ReactNode,
    side: 'left' | 'right',
    row: number,
    left: number,   // % of orbit container
    top: number,    // % of orbit container
    width: number,  // px, from Figma
}

export const whatWeDoAboutItems: IWhatWeDoItemAbout[] = [
    { id: "wwd1", label: "NTN Registration", icon: <IdCard size={18} />, side: "right", row: 0, left: 67.9, top: 15.1, width: 256 },
    { id: "wwd2", label: "Tax Return Filing", icon: <FileText size={18} />, side: "left", row: 0, left: 8.9, top: 15.0, width: 240 },
    { id: "wwd3", label: "Business Registration", icon: <Briefcase size={18} />, side: "right", row: 1, left: 72.2, top: 34.8, width: 256 },
    { id: "wwd4", label: "GST Filling", icon: <Receipt size={18} />, side: "left", row: 1, left: 4.0, top: 34.7, width: 240 },
    { id: "wwd5", label: "Trademark Registration", icon: <ShieldCheck size={18} />, side: "right", row: 2, left: 72.2, top: 54.5, width: 288 },
    { id: "wwd6", label: "Import/Export License", icon: <ArrowLeftRight size={18} />, side: "left", row: 2, left: 0.9, top: 54.5, width: 256 },
    { id: "wwd7", label: "Sale Tax Registration", icon: <ShoppingCart size={18} />, side: "right", row: 3, left: 68.3, top: 74.2, width: 256 },
    { id: "wwd8", label: "Copyright Services", icon: <Copyright size={18} />, side: "left", row: 3, left: 8.7, top: 74.1, width: 240 },
]

export interface IWhyChoosePoint {
    title: string,
    description: string,
}

export const whyChooseFilernowPoints: IWhyChoosePoint[] = [
    {
        title: "100% Secure & Confidential",
        description: "All data is encrypted and handled by certified professionals.",
    },
    {
        title: "Fast Turnaround",
        description: "Most services are delivered within 24–48 hours.",
    },
    {
        title: "Trusted Professionals",
        description: "Work with experienced consultants registered with FBR and SECP.",
    },
]