import { FileText, Handshake, ArrowRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import type { IServiceDetail } from "@/lib/types/services/types"


export const servicesData: Record<string, IServiceDetail> = {
    "business-ntn-registration": {
        slug: "business-ntn-registration",
        breadcrumbLabel: "Business NTN Registration",
        seoTitle: "Business NTN Registration in Pakistan | FilerNow",
        seoDescription: "Register your Business NTN online with FilerNow. Avoid FBR penalties — fast, paperless processing within 12 working hours.",
        heroInfoBadgeLabel: "Fast Processing",
        heroHeading: <>Business NTN<br /><span className="text-primary">Registration</span></>,
        heroDescription: "Want to register your Business NTN quickly? Business NTN Registration in Pakistan is required to legally operate your business and avoid FBR penalties. FilerNow assists startups, businesses, and companies in Pakistan to smoothly obtain their Business NTN online through proper documentation and legal process — easy, online, and processing time within 12 working hours.",
        // heroCtas: [
        //     { label: "Become A Filer", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer", },
        //     { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555", },
        // ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "Simplifying business registration. Provide minimal details and let our experts coordinate directly with the FBR database.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "Documents Required",
                description: "All we need from you to file your registration smoothly:",
                items: ["CNIC front & back Picture", "Active contact number", "Email ID (optional)", "Business name", "Business Address", "Business activity"],
            },
            {
                icon: <Handshake size={24} className="text-primary" />,
                title: "Documents Provided by FBR",
                description: "What you will receive upon successful verification:",
                items: ["Business NTN Certificate", "Business Taxpayer Certificate", "Business Profile"],
            },
        ],
        faqs: [
            {
                id: "business-ntn-faq-1",
                question: "What is Business NTN Registration and who needs it?",
                answer: [
                    { type: "text", content: "Business NTN is required to legally operate any business in Pakistan. It's mandatory for shop owners, online sellers, service providers, and startups.\n👉 " },
                    { type: "link", content: "Apply for Business NTN Registration", href: "/services/business-ntn-registration" },
                    { type: "text", content: "\nNeed full setup? 👉 " },
                    { type: "link", content: "Register Your Business", href: "/services/business-registration-pakistan" },
                ],
            },
            {
                id: "business-ntn-faq-2",
                question: "How do I get a Business NTN Registration in Pakistan?",
                answer: [
                    { type: "text", content: "You can apply via FBR, but the process is technical. FilerNow helps you get it online — fast and hassle-free.\n👉 " },
                    { type: "link", content: "Start Business NTN Registration", href: "/services/business-ntn-registration" },
                    { type: "text", content: "\nAlso explore 👉 " },
                    { type: "link", content: "Company Registration", href: "/services/company-registration-pakistan" },
                ],
            },
            {
                id: "business-ntn-faq-3",
                question: "What documents are needed for Business NTN Registration?",
                answer: [
                    { type: "text", content: "You'll need CNIC, business address proof, paid utility bill, and your business letterhead with name and logo.\n👉 " },
                    { type: "link", content: "See Required Documents", href: "/services/business-ntn-registration" },
                    { type: "text", content: "\nAlso helpful 👉 " },
                    { type: "link", content: "Business Setup Guide", href: "/services/business-registration-pakistan" },
                ],
            },
            {
                id: "business-ntn-faq-4",
                question: "Is Business NTN required for freelancers or online sellers?",
                answer: [
                    { type: "text", content: "Yes. If you're selling on Daraz, Instagram, or providing services, you should register as a sole proprietor and get a " },
                    { type: "link", content: "Business NTN Registration", href: "/services/business-ntn-registration" },
                    { type: "text", content: ".\n👉 " },
                    { type: "link", content: "NTN for Freelancers & Sellers", href: "/services/business-ntn-registration" },
                    { type: "text", content: "\nWant GST too? 👉 " },
                    { type: "link", content: "Apply for GST Registration", href: "/services/service-gst-registration" },
                ],
            },
            {
                id: "business-ntn-faq-5",
                question: "What's the difference between Business NTN and Individual NTN?",
                answer: [
                    { type: "text", content: "Individual NTN is for salaried people. Business NTN is linked to a registered business or sole proprietorship and used for GST, invoicing & ATL.\n👉 " },
                    { type: "link", content: "Get Business NTN Now", href: "/services/business-ntn-registration" },
                    { type: "text", content: "\nNext step 👉 " },
                    { type: "link", content: "Become a Filer", href: "/services/service-filer-registration" },
                    { type: "text", content: " & check your " },
                    { type: "link", content: "ATL Status", href: "/active-taxpayer-verification" },
                ],
            },
        ],
    },

    "service-simple-ntn-registration-2": {
        slug: "service-simple-ntn-registration-2",
        breadcrumbLabel: "Simple NTN Registration",
        seoTitle: "Simple NTN Registration in Pakistan | FilerNow",
        seoDescription: "Get your NTN registered in 1 hour, fully online. FilerNow simplifies NTN registration for salaried individuals, freelancers, and business owners.",
        heroInfoBadgeLabel: "1 Hour Processing",
        heroHeading: <>Simple NTN<br /><span className="text-primary">Registration</span></>,
        heroDescription: "Applying for your NTN for the first time? Whether you're salaried, a freelancer, or a business owner — here's what you need to register. FilerNow makes the process smooth, paperless, and completely online.",
        // heroCtas: [
        //     { label: "Become A Filer", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer", },
        //     { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555", },
        // ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "Get your NTN easily without hassle — minimal documents, fast turnaround.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "Requirements",
                description: "All we need from you:",
                items: ["CNIC front & back Picture", "Active contact Number", "Email ID (optional)", "Home address"],
            },
            {
                icon: <Handshake size={24} className="text-primary" />,
                title: "Documents Provided by FBR",
                description: "What you'll receive:",
                items: ["NTN Certificate", "Tax Payer Registration Certificate", "Profile Report"],
            },
        ],
        faqs: [
            {
                id: "simple-ntn-faq-1",
                question: "What is NTN and who needs it in Pakistan?",
                answer: [
                    { type: "text", content: "NTN (National Tax Number) is required to file your income tax return and become a " },
                    { type: "link", content: "Filer", href: "/services/service-filer-registration" },
                    { type: "text", content: ". It's mandatory for salaried individuals, freelancers, and property owners.\n👉 " },
                    { type: "link", content: "Apply for NTN Online", href: "/services/service-simple-ntn-registration-2" },
                    { type: "text", content: "\nWant filer benefits? 👉 " },
                    { type: "link", content: "Become a Filer", href: "/services/service-filer-registration" },
                ],
            },
            {
                id: "simple-ntn-faq-2",
                question: "How can I apply for NTN online in Pakistan?",
                answer: [
                    { type: "text", content: "You can apply through FBR's IRIS portal, but it's tricky for beginners. FilerNow helps you get your " },
                    { type: "link", content: "NTN Registration", href: "/services/service-simple-ntn-registration-2" },
                    { type: "text", content: " within 24 hours, completely online.\n👉 " },
                    { type: "link", content: "Start Simple NTN Registration", href: "/services/service-simple-ntn-registration-2" },
                    { type: "text", content: "\nNext step? 👉 " },
                    { type: "link", content: "File your return", href: "/services/service-tax-return-filing" },
                ],
            },
            {
                id: "simple-ntn-faq-3",
                question: "What documents are needed for individual NTN registration?",
                answer: [
                    { type: "text", content: "You only need your valid CNIC and basic contact details. No bank statement or business info required for salaried persons.\n👉 " },
                    { type: "link", content: "View Full NTN Process", href: "/services/service-simple-ntn-registration-2" },
                    { type: "text", content: "\nPlanning to file tax too? 👉 " },
                    { type: "link", content: "See Tax Filing Guide", href: "/services/service-tax-return-filing" },
                ],
            },
            {
                id: "simple-ntn-faq-4",
                question: "Can students or freelancers apply for NTN in Pakistan?",
                answer: [
                    { type: "text", content: "Yes! If you're earning through freelancing, part-time work, or digital platforms, you must register for " },
                    { type: "link", content: "NTN", href: "/services/service-simple-ntn-registration-2" },
                    { type: "text", content: " to file tax and avoid legal issues.\n👉 " },
                    { type: "link", content: "NTN for Freelancers", href: "/services/service-simple-ntn-registration-2" },
                ],
            },
            {
                id: "simple-ntn-faq-5",
                question: "Is NTN registration free or paid in Pakistan?",
                answer: [
                    { type: "text", content: "FBR registration is free, but if you want expert assistance and quick processing, FilerNow offers affordable packages with guaranteed results.\n👉 " },
                    { type: "link", content: "Get Help with NTN Registration", href: "/services/service-simple-ntn-registration-2" },
                    { type: "text", content: "\nWant to go further? 👉 " },
                    { type: "link", content: "Become Filer", href: "/services/service-filer-registration" },
                    { type: "text", content: " & get " },
                    { type: "link", content: "ATL Benefits", href: "/active-taxpayer-verification" },
                ],
            },
        ],
    },

    "business-registration-pakistan": {
        slug: "business-registration-pakistan",
        breadcrumbLabel: "Business Registration",
        seoTitle: "Business Registration in Pakistan – Quick & Legal | FilerNow",
        seoDescription: "Business Registration in Pakistan. FilerNow makes SECP & NTN registration easy, fast, and affordable. Register now to avoid delays.",
        heroInfoBadgeLabel: "SECP & NTN Registration",
        heroHeading: <>Business<br /><span className="text-primary">Registration</span></>,
        heroDescription: "Business Registration in Pakistan is the first and most important step to legally operate your business. Whether you're starting a sole proprietorship or private limited company, FilerNow helps you register quickly and hassle-free — from SECP registration to NTN issuance, we manage the complete process online.",
        // heroCtas: [
        //     { label: "Become A Filer", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer", },
        //     { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555", },
        // ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "Make your business official — minimal paperwork, full support.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "Requirements",
                description: "All we need from you:",
                items: ["CNIC front & back Picture", "Active contact number", "Email ID (optional)", "Business name", "Business Address", "Business activity", "Rental agreement (optional)", "Business card/letterhead (optional)"],
            },
            {
                icon: <Handshake size={24} className="text-primary" />,
                title: "Documents Provided by FBR",
                description: "What you'll receive:",
                items: ["Business NTN Certificate", "Business Taxpayer Certificate", "Order 181 form (for bank account opening)", "Business Profile Report"],
            },
        ],
        faqs: [
            {
                id: "biz-reg-faq-1",
                question: "How to Register a Business in Pakistan?",
                answer: [
                    { type: "text", content: "You can register as a sole proprietor, partnership, or private limited company depending on your goals. FilerNow handles the complete process for all types.\n👉 " },
                    { type: "link", content: "Start Business Registration", href: "/services/business-registration-pakistan" },
                    { type: "text", content: "\nNeed company setup? 👉 " },
                    { type: "link", content: "Company Registration", href: "/services/company-registration-pakistan" },
                ],
            },
            {
                id: "biz-reg-faq-2",
                question: "What documents are required for Business Registration in Pakistan?",
                answer: [
                    { type: "text", content: "Basic documents include CNIC, business address proof, utility bill, and a business name. For companies, SECP documents are also required.\n👉 " },
                    { type: "link", content: "View Required Documents", href: "/services/business-registration-pakistan" },
                    { type: "text", content: "\nAlso check 👉 " },
                    { type: "link", content: "Business NTN Registration", href: "/services/business-ntn-registration" },
                ],
            },
            {
                id: "biz-reg-faq-3",
                question: "Should I register as a sole proprietorship or a company?",
                answer: [
                    { type: "text", content: "For small/startup businesses, sole proprietorship is easy and fast. For larger setups, legal protection, and scalability, private limited company is better.\n👉 " },
                    { type: "link", content: "Choose the Right Type", href: "/services/business-registration-pakistan" },
                    { type: "text", content: "\nNeed help with legal compliance? 👉 " },
                    { type: "link", content: "Company Registration", href: "/services/company-registration-pakistan" },
                ],
            },
            {
                id: "biz-reg-faq-4",
                question: "Can I register my online or home-based business in Pakistan?",
                answer: [
                    { type: "text", content: "Yes! Whether you're selling on Instagram, Daraz, or from home — you can register as a sole proprietor and get legal status.\n👉 " },
                    { type: "link", content: "Register Your Online Business", href: "/services/business-registration-pakistan" },
                    { type: "text", content: "\nAlso need NTN? 👉 " },
                    { type: "link", content: "Apply Here", href: "/services/business-ntn-registration" },
                ],
            },
            {
                id: "biz-reg-faq-5",
                question: "Is Business Registration required before tax filing in Pakistan?",
                answer: [
                    { type: "text", content: "Yes. To file business tax returns or get " },
                    { type: "link", content: "GST", href: "/services/service-gst-registration" },
                    { type: "text", content: "/" },
                    { type: "link", content: "PSW", href: "/services/service-imp-exp-license-psw" },
                    { type: "text", content: ", your business must be registered. It's also needed to open a business bank account.\n👉 " },
                    { type: "link", content: "Start Legal Business Registration", href: "/services/business-registration-pakistan" },
                    { type: "text", content: "\nNext step 👉 " },
                    { type: "link", content: "File Your Tax Return", href: "/services/service-tax-return-filing" },
                ],
            },
        ],
    },
}

export const getServiceBySlug = (slug: string) => servicesData[slug]
export const allServiceSlugs = Object.keys(servicesData)