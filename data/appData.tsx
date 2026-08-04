import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import { ShieldCheck, Users, Clock, Scale, Heart } from "lucide-react"


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
    label: string,
    href: string,
}

export const footerServicesData: IFooterLinkItem[] = [
    { label: "Income Tax Return Filing", href: "/services/income-tax-return-filing" },
    { label: "Business Registration", href: "/services/business-registration" },
    { label: "Company Registration", href: "/services/company-registration" },
    { label: "NTN Registration", href: "/services/ntn-registration" },
    { label: "Sales Tax Registration", href: "/services/sales-tax-registration" },
    { label: "Trademark Registration", href: "/services/trademark-registration" },
]

export const footerQuickLinks: IFooterLinkItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Calculator", href: "/calculator" },
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

// data/appData.tsx — add alongside your existing exports
import { SearchCheck, Calculator } from "lucide-react"

export interface IQuickToolItem {
    icon: React.ReactNode,
    title: string,
    description: string,
    href: string,
    variant: 'primary' | 'neutral',
}

export const quickToolsData: IQuickToolItem[] = [
    {
        icon: <SearchCheck size={24} />,
        title: "Check Filer Status",
        description: "Instantly verify if you are on the FBR Active Taxpayer List.",
        href: "#",
        variant: "primary",
    },
    {
        icon: <Calculator size={24} />,
        title: "Calculate Your Tax",
        description: "Estimate your income tax liability in a few simple steps.",
        href: "#",
        variant: "neutral",
    },
]

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
        image: "/assets/ourMission.png", // confirmed — this asset already exists in your project
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
        image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800", // TODO: no dedicated "vision" asset exists yet — swap for a real one
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
            { value: `${whoWeAreTrustPoints.length}`, label: "Core Trust Commitments" }, // derived from your actual trust-points array, not hardcoded
        ],
        bottomText: "No hidden charges, no missed deadlines.",
        image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800", // TODO
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
        image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800", // TODO
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
            imageAlt: "Confirmed tax filing with FilerNow",
            title: "Filed & Confirmed",
            body: "Once submitted, you get proof of filing and a copy of your record — kept safely for next year, audits, or visa applications.",
            tags: ["FBR Submission", "Filing Record", "Confirmation"],
        },
    },
]