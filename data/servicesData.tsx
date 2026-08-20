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

    // 2nd
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

    // 3rd
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

    // 4th
    "company-registration-pakistan": {
        slug: "company-registration-pakistan",
        breadcrumbLabel: "Company Registration",
        seoTitle: "Company Registration in Pakistan – Fast & FBR Approved | FilerNow",
        seoDescription: "Company Registration in Pakistan made easy with FilerNow. Register your company fast with legal support and SECP approval.",
        heroInfoBadgeLabel: "5 Working Days",
        heroHeading: <>Company<br /><span className="text-primary">Registration</span></>,
        heroDescription: "Planning to register a private limited company in Pakistan? FilerNow makes your SECP company registration fast, easy, and fully online.",
        // heroCtas: [
        //     { label: "Register Now", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer" },
        //     { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555" },
        // ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "Make your company legal and recognized — SECP incorporation, fully managed.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "Requirements",
                description: "Company, partner, and nominee details:",
                items: ["Company Name", "Company Address", "Company Nature of work", "Shares Percentage (if partnership)", "Partner CNIC front & back + active phone + email", "Nominee CNIC front & back + active contact + email (if any)", "Designation of Partners (CEO, Directors)"],
            },
            {
                icon: <Handshake size={24} className="text-primary" />,
                title: "Documents Provided by SECP & FBR",
                description: "What you'll receive upon successful registration:",
                items: ["Company Incorporation Certificate", "Company Acknowledgment Certificate", "Memorandum of Association", "Article of Association", "Company Prospectus", "CTC File for Bank Account opening", "Company NTN, Profile & Taxpayer Certificate", "Company Order 181 Approval"],
            },
        ],
        faqs: [
            {
                id: "company-reg-faq-1", question: "How do I register a Private Limited Company in Pakistan?", answer: [
                    { type: "text", content: "You can register a Pvt Ltd company through SECP. The process includes name reservation, incorporation documents, and digital signatures. FilerNow handles the entire process for you.\n👉 " },
                    { type: "link", content: "Start Company Registration", href: "/services/company-registration-pakistan" },
                    { type: "text", content: "\nNeed NTN too? 👉 " },
                    { type: "link", content: "Apply for NTN", href: "/services/business-ntn-registration" },
                ]
            },
            {
                id: "company-reg-faq-2", question: "What documents are required for company registration?", answer: [
                    { type: "text", content: "You'll need CNIC copies of directors, proposed business name, business address, and signed incorporation forms.\n👉 " },
                    { type: "link", content: "View Complete Requirements", href: "/services/company-registration-pakistan" },
                    { type: "text", content: "\nPlanning GST or PSW? 👉 " },
                    { type: "link", content: "Register for GST", href: "/services/service-gst-registration" },
                ]
            },
            {
                id: "company-reg-faq-3", question: "How much time does it take to register a company?", answer: [
                    { type: "text", content: "Usually 3 to 7 working days if all documents are correct. FilerNow ensures quick submission and follow-ups with SECP.\n👉 " },
                    { type: "link", content: "Register Your Company Fast", href: "/services/company-registration-pakistan" },
                    { type: "text", content: "\nAlso check 👉 " },
                    { type: "link", content: "Tax Return Filing", href: "/services/service-tax-return-filing" },
                ]
            },
            {
                id: "company-reg-faq-4", question: "Can I register a company alone?", answer: [
                    { type: "text", content: "Yes! You can register a Single Member Company (SMC Pvt Ltd) if you're the sole owner. It gives you limited liability and legal benefits.\n👉 " },
                    { type: "link", content: "Form a Single Member Company", href: "/services/company-registration-pakistan" },
                    { type: "text", content: "\nAlso need business NTN? 👉 " },
                    { type: "link", content: "Apply for Business NTN", href: "/services/business-ntn-registration" },
                ]
            },
            {
                id: "company-reg-faq-5", question: "Is company registration necessary for online startups or software houses?", answer: [
                    { type: "text", content: "Yes. To get legal recognition, open a business bank account, register with " },
                    { type: "link", content: "PSEB", href: "/services/service-pseb" },
                    { type: "text", content: ", or bid on contracts, company registration is a must.\n👉 " },
                    { type: "link", content: "Register Your Company Today", href: "/services/company-registration-pakistan" },
                    { type: "text", content: "\nAlso explore 👉 " },
                    { type: "link", content: "Business Registration", href: "/services/business-registration-pakistan" },
                ]
            },
        ],
    },

    // 5th
    "service-filer-registration": {
        slug: "service-filer-registration",
        breadcrumbLabel: "Filer Registration",
        seoTitle: "Filer Registration in Pakistan | FilerNow",
        seoDescription: "Become a Filer in Pakistan with FilerNow — save taxes, avoid penalties, and get added to FBR's Active Taxpayer List.",
        heroInfoBadgeLabel: "Fast & Hassle-Free",
        heroHeading: <>Filer<br /><span className="text-primary">Registration</span></>,
        heroDescription: "Becoming a filer in Pakistan helps you save taxes and avoid penalties. FilerNow takes care of the full process, online and hassle-free.",
        heroCtas: [
            { label: "Register Now", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer" },
            { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555" },
        ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "Enjoy all FBR filer benefits.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "Requirements",
                description: "All we need from you:",
                items: ["Color copy of CNIC (Front & Back)", "Latest paid electricity bill (home address)", "Active mobile number (linked with CNIC)", "Personal email address", "Profession/occupation detail", "City & address confirmation"],
            },
        ],
        faqs: [
            {
                id: "filer-reg-faq-1", question: "Who is a Filer in Pakistan and why should I become one?", answer: [
                    { type: "text", content: "A Filer is someone who has filed their income tax return and appears in FBR's Active Taxpayer List (ATL). Filers enjoy lower tax rates and legal benefits.\n👉 " },
                    { type: "link", content: "Become a Filer Now", href: "/services/service-filer-registration" },
                    { type: "text", content: "\nNeed to file return first? 👉 " },
                    { type: "link", content: "Tax Return Filing", href: "/services/service-tax-return-filing" },
                ]
            },
            {
                id: "filer-reg-faq-2", question: "How can I check if I am a Filer or not?", answer: [
                    { type: "text", content: "You can check your ATL status on FBR's website using your CNIC. Or simply ask FilerNow to check and guide you.\n👉 " },
                    { type: "link", content: "Check & Register as Filer", href: "/active-taxpayer-verification" },
                    { type: "text", content: "\nDon't have NTN yet? 👉 " },
                    { type: "link", content: "Get Your NTN", href: "/services/service-simple-ntn-registration-2" },
                ]
            },
            {
                id: "filer-reg-faq-3", question: "What are the benefits of being a Filer in Pakistan?", answer: [
                    { type: "text", content: "Filers pay lower withholding tax on vehicles, property, banking, and travel. They also qualify for government tenders and legal protection.\n👉 " },
                    { type: "link", content: "Enjoy Filer Benefits – Register Now", href: "/services/service-filer-registration" },
                    { type: "text", content: "\nNeed help filing return? 👉 " },
                    { type: "link", content: "Start Here", href: "/services/service-tax-return-filing" },
                ]
            },
            {
                id: "filer-reg-faq-4", question: "What is the process of becoming a Filer?", answer: [
                    { type: "text", content: "Simple! First " },
                    { type: "link", content: "get your NTN", href: "/services/service-simple-ntn-registration-2" },
                    { type: "text", content: ", then " },
                    { type: "link", content: "file your tax return", href: "/services/service-tax-return-filing" },
                    { type: "text", content: ", and finally you'll be added to the " },
                    { type: "link", content: "ATL list", href: "/active-taxpayer-verification" },
                    { type: "text", content: ". FilerNow manages the full process for you." },
                ]
            },
            {
                id: "filer-reg-faq-5", question: "How long does it take to become a Filer after filing return?", answer: [
                    { type: "text", content: "Once your return is filed, FBR usually updates ATL within a few days. FilerNow ensures your name is added quickly.\n👉 " },
                    { type: "link", content: "Become ATL Listed Today", href: "/active-taxpayer-verification" },
                    { type: "text", content: "\nAlready filed? 👉 " },
                    { type: "link", content: "Check Your ATL Status", href: "/active-taxpayer-verification" },
                ]
            },
        ],
    },

    // 6th
    "service-gst-registration": {
        slug: "service-gst-registration",
        breadcrumbLabel: "GST Registration",
        seoTitle: "GST Registration in Pakistan | FilerNow",
        seoDescription: "Register for GST/Sales Tax with FBR through FilerNow — fast, online, and fully compliant. Get your Sales Tax Number (STRN).",
        heroInfoBadgeLabel: "Urgent (6 Days) or Normal (1.5 Month)",
        heroHeading: <>GST<br /><span className="text-primary">Registration</span></>,
        heroDescription: "Selling taxable goods or services in Pakistan? FilerNow helps you register with FBR and get your Sales Tax Number (STRN) — fast, online, and fully compliant.",
        heroCtas: [
            { label: "Register Now", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer" },
            { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555" },
        ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "Stay compliant with sales tax rules.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "Requirements",
                description: "All we need from you:",
                items: ["CNIC Front Back Picture", "Email ID", "Active Contact Number", "Electricity Bill", "Electricity Meter Picture", "Business account maintenance certificate", "Rent agreement", "Balance Sheet (optional)"],
            },
        ],
        faqs: [
            {
                id: "gst-faq-1", question: "Who needs GST registration in Pakistan?", answer: [
                    { type: "text", content: "If your annual sales cross Rs. 10 million or you sell taxable goods/services, GST registration with FBR is mandatory.\n👉 " },
                    { type: "link", content: "Apply for GST Now", href: "/services/service-gst-registration" },
                    { type: "text", content: "\nNot registered yet? 👉 " },
                    { type: "link", content: "Business Registration", href: "/services/business-registration-pakistan" },
                ]
            },
            {
                id: "gst-faq-2", question: "What are the benefits of GST registration?", answer: [
                    { type: "text", content: "You can issue tax invoices, claim input tax, build credibility, and avoid FBR penalties. It's essential for business growth.\n👉 " },
                    { type: "link", content: "Start GST Registration", href: "/services/service-gst-registration" },
                    { type: "text", content: "\nNeed NTN first? 👉 " },
                    { type: "link", content: "Get Your NTN", href: "/services/service-simple-ntn-registration-2" },
                ]
            },
            {
                id: "gst-faq-3", question: "What documents are needed for GST registration?", answer: [
                    { type: "text", content: "You'll need your NTN, CNIC, utility bill of business location, rent agreement/ownership proof, and business bank account.\n👉 " },
                    { type: "link", content: "View Full Requirements", href: "/services/service-gst-registration" },
                    { type: "text", content: "\nAlso check 👉 " },
                    { type: "link", content: "Tax Return Filing", href: "/services/service-tax-return-filing" },
                ]
            },
            {
                id: "gst-faq-4", question: "Can I apply for GST online through FilerNow?", answer: [
                    { type: "text", content: "Yes! FilerNow provides end-to-end support for fast and smooth online GST registration with FBR.\n👉 " },
                    { type: "link", content: "Apply Online for GST", href: "/services/service-gst-registration" },
                    { type: "text", content: "\nAlso explore 👉 " },
                    { type: "link", content: "Import Export License (PSW)", href: "/services/service-imp-exp-license-psw" },
                ]
            },
            {
                id: "gst-faq-5", question: "Is GST registration required for online or home-based businesses?", answer: [
                    { type: "text", content: "If your revenue meets the threshold or you deal in taxable services/products, yes! Even online sellers need to register.\n👉 " },
                    { type: "link", content: "Register for GST Today", href: "/services/service-gst-registration" },
                    { type: "text", content: "\nRunning online business? 👉 " },
                    { type: "link", content: "Business Registration", href: "/services/business-registration-pakistan" },
                ]
            },
        ],
    },

    // 7th service
    "service-tax-return-filing": {
        slug: "service-tax-return-filing",
        breadcrumbLabel: "Tax Return Filing",
        seoTitle: "Tax Return Filing in Pakistan | FilerNow",
        seoDescription: "File your tax return in Pakistan online with FilerNow — fast, accurate, and fully compliant with FBR requirements.",
        heroInfoBadgeLabel: "12 Working Hours",
        heroHeading: <>Tax Return<br /><span className="text-primary">Filing</span></>,
        heroDescription: "Filing your tax return in Pakistan? FilerNow handles everything online — fast, accurate, and fully compliant with FBR requirements.",
        // heroCtas: [
        //     { label: "File Now", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer" },
        //     { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555" },
        // ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "File your tax on time without stress.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "Requirements",
                description: "All we need from you:",
                items: ["CNIC Number", "Email & Contact Number registered in FBR", "Source of income (business/job)", "Bank details (bank name / closing balance of June 30)", "Any vehicle (bike/car)", "Any property (purchased/inherited)", "Any other asset"],
            },
            {
                icon: <Handshake size={24} className="text-primary" />,
                title: "Documents Provided by FBR",
                description: "What you'll receive:",
                items: ["Tax Return File Documents", "Section 114 — Income Statement", "Section 116 — Wealth Statement"],
            },
        ],
        faqs: [
            {
                id: "tax-return-faq-1", question: "Who is required to file a tax return in Pakistan?", answer: [
                    { type: "text", content: "Every salaried person, freelancer, business owner, or property holder earning taxable income must file a tax return under FBR law.\n👉 " },
                    { type: "link", content: "Start Tax Return Filing", href: "/services/service-tax-return-filing" },
                    { type: "text", content: "\nNot a filer yet? 👉 " },
                    { type: "link", content: "Become a Filer", href: "/services/service-filer-registration" },
                ]
            },
            {
                id: "tax-return-faq-2", question: "What documents are needed to file a tax return?", answer: [
                    { type: "text", content: "You'll need your CNIC, salary slip or income proof, bank statement, and any investment or property details.\n👉 " },
                    { type: "link", content: "See Required Documents", href: "/services/service-tax-return-filing" },
                    { type: "text", content: "\nNo NTN yet? 👉 " },
                    { type: "link", content: "Get NTN Online", href: "/services/service-simple-ntn-registration-2" },
                ]
            },
            {
                id: "tax-return-faq-3", question: "Can freelancers or students file tax returns?", answer: [
                    { type: "text", content: "Yes. If you're earning income, even from freelance or online platforms, you should file to stay compliant and avoid future penalties.\n👉 " },
                    { type: "link", content: "File Freelance Tax Return", href: "/services/service-tax-return-filing" },
                    { type: "text", content: "\nAlso check 👉 " },
                    { type: "link", content: "NTN for Freelancers", href: "/services/business-ntn-registration" },
                ]
            },
            {
                id: "tax-return-faq-4", question: "What are the benefits of filing a tax return?", answer: [
                    { type: "text", content: "You become a filer, pay lower taxes on vehicles/property, claim refunds, and appear in ATL (Active Taxpayer List).\n👉 " },
                    { type: "link", content: "Become a Filer Now", href: "/services/service-filer-registration" },
                    { type: "text", content: "\nStart here 👉 " },
                    { type: "link", content: "File Tax Return Online", href: "/services/service-tax-return-filing" },
                ]
            },
            {
                id: "tax-return-faq-5", question: "What is the deadline for filing tax returns in Pakistan?", answer: [
                    { type: "text", content: "For most individuals and businesses, the FBR deadline is 30th September each year. Late filing can lead to penalties.\n👉 " },
                    { type: "link", content: "Avoid Penalty – File Now", href: "/services/service-tax-return-filing" },
                    { type: "text", content: "\nWant ATL status? 👉 " },
                    { type: "link", content: "Filer Registration", href: "/active-taxpayer-verification" },
                ]
            },
        ],
    },

    // 8th
    "service-fbr-notices": {
        slug: "service-fbr-notices",
        breadcrumbLabel: "FBR Notices",
        seoTitle: "FBR Notices Response Help in Pakistan | FilerNow",
        seoDescription: "Got an FBR notice? FilerNow guides you step-by-step and prepares your legal response — tax return, wealth statement, or audit notices.",
        heroInfoBadgeLabel: "Depends on Section",
        heroHeading: <>FBR<br /><span className="text-primary">Notices</span></>,
        heroDescription: "Got an FBR notice and don't know what to do? Whether it's about tax return, wealth statement, or audit — FilerNow guides you step-by-step and prepares your legal response.",
        heroCtas: [
            { label: "Register Now", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer" },
            { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555" },
        ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "Get expert help for FBR notices.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "Income Tax Notices — Most Common Sections",
                description: "Processing time depends on section:",
                items: ["Section 114(4) — if income crosses taxable limit", "Section 116 — Wealth Statement required", "Section 118 — Non-Submission of Return", "Section 122(A) — failed to file return within due date", "Section 111 — issued if assets aren't properly explained in return", "Section 182 — Penalty Notice (late or non-filing)", "Section 176 — FBR audit or review of return", "Section 205 — Default Surcharge (late tax payments)", "Section 214C — Audit Selection Notice (with or without reason)", "Section 161/205 — Tax Deduction Failure (employers/withholders)"],
            },
            {
                icon: <Handshake size={24} className="text-primary" />,
                title: "GST / Sales Tax Related Notices",
                description: "Brief overview — processing time depends on section:",
                items: ["Sales Tax return not filed", "Section 25 — Sales Tax audit notice (to verify GST records)", "Section 11 — Short Payment or Non-Payment of GST", "Show Cause Notice — serious notice before fine or legal action for GST fraud or default", "Section 33 — Penalty for Sales Tax Violation", "Suspension of STRN — if compliance is not maintained"],
            },
        ],
        faqs: [
            {
                id: "fbr-notices-faq-1", question: "Why did I receive an FBR notice?", answer: [
                    { type: "text", content: "FBR sends notices for reasons like non-filing of tax returns, asset declaration, audit, or tax mismatch. Don't ignore it — respond within the deadline.\n👉 " },
                    { type: "link", content: "Get Professional Help with Notice", href: "/services/service-fbr-notices" },
                    { type: "text", content: "\nNeed to file return first? 👉 " },
                    { type: "link", content: "Tax Return Filing", href: "/services/service-tax-return-filing" },
                ]
            },
            {
                id: "fbr-notices-faq-2", question: "What are common FBR notices and their meanings?", answer: [
                    { type: "text", content: "114(4): Return not filed\n116: Asset declaration notice\n122(5A): Audit/amendment notice\n182: Penalty notice\n👉 " },
                    { type: "link", content: "Understand Your Notice", href: "/services/service-fbr-notices" },
                    { type: "text", content: " – " },
                    { type: "link", content: "Contact Us", href: "https://api.whatsapp.com/send?phone=923096000020" },
                    { type: "text", content: "\nCheck your Filer Status 👉 " },
                    { type: "link", content: "Filer Registration", href: "/services/service-filer-registration" },
                ]
            },
            {
                id: "fbr-notices-faq-3", question: "How should I respond to an FBR notice?", answer: [
                    { type: "text", content: "Your reply must be filed through IRIS with legal explanation + proof. FilerNow drafts professional replies to protect you from fines.\n👉 " },
                    { type: "link", content: "Reply to Your FBR Notice Now", href: "/services/service-fbr-notices" },
                    { type: "text", content: "\nAlso explore 👉 " },
                    { type: "link", content: "Become a Filer", href: "/services/service-filer-registration" },
                ]
            },
            {
                id: "fbr-notices-faq-4", question: "What happens if I ignore the FBR notice?", answer: [
                    { type: "text", content: "Non-response can lead to heavy penalties, asset freezing, and even audit or legal proceedings. It's always better to reply properly.\n👉 " },
                    { type: "link", content: "Avoid Penalties – File a Response", href: "/services/service-fbr-notices" },
                    { type: "text", content: "\nHaven't filed return? 👉 " },
                    { type: "link", content: "File Tax Return", href: "/services/service-tax-return-filing" },
                ]
            },
            {
                id: "fbr-notices-faq-5", question: "Can FilerNow help me write a legal reply to FBR?", answer: [
                    { type: "text", content: "Yes! Whether it's under section 114(4), 122(5A), 116, or 182 — FilerNow prepares professional legal replies and uploads them via IRIS for you.\n👉 " },
                    { type: "link", content: "Get Expert FBR Notice Response", href: "/services/service-fbr-notices" },
                    { type: "text", content: "\nAlso useful 👉 " },
                    { type: "link", content: "NTN Registration", href: "/services/service-simple-ntn-registration-2" },
                ]
            },
        ],
    },

    // 9TH
    "service-wealth-statement": {
        slug: "service-wealth-statement",
        breadcrumbLabel: "Wealth Statement",
        seoTitle: "Wealth Statement Filing in Pakistan | FilerNow",
        seoDescription: "File your Wealth Statement with FBR quickly and correctly — FilerNow handles it all, easy, secure, and online.",
        heroInfoBadgeLabel: "12–24 Working Hours",
        heroHeading: <>Wealth Statement<br /><span className="text-primary">Filing</span></>,
        heroDescription: "Want to file your Wealth Statement with FBR quickly and correctly? Let FilerNow handle it all — easy, secure, and online.",
        heroCtas: [
            { label: "Register Now", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer" },
            { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555" },
        ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "Let FilerNow handle it all — easy, secure, and online.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "Documents Required",
                description: "All we need from you:",
                items: ["CNIC front & back picture", "Bank balance summary", "Property/Vehicle details (if any)", "Gold or investments (if any)", "Annual personal expenses estimate", "Previous year's asset value (optional)", "Income source (job, business, freelance)", "Latest Tax Return (if available)"],
            },
            {
                icon: <Handshake size={24} className="text-primary" />,
                title: "Documents Provided by FBR",
                description: "What you'll receive:",
                items: ["Wealth Statement (Assets + Liabilities + Expenses)", "Statement of Affairs", "Updated FBR Tax Profile", "Proof of FBR Submission / Acknowledgment"],
            },
        ],
        faqs: [
            {
                id: "wealth-faq-1", question: "Why is filing a Wealth Statement important in Pakistan?", answer: [
                    { type: "text", content: "Filing a Wealth Statement with FBR ensures that your assets, liabilities, and expenses are properly declared. It helps you stay on the Active Taxpayers List (ATL) and protects you from FBR penalties and notices.\n🔗 " },
                    { type: "link", content: "Learn more about Tax Return Filing", href: "/services/service-tax-return-filing" },
                ]
            },
            {
                id: "wealth-faq-2", question: "What happens if I don't file my Wealth Statement?", answer: [
                    { type: "text", content: "You may face:\n• Penalties from FBR\n• Removal from ATL\n• Difficulty getting bank loans or visas\n🔗 " },
                    { type: "link", content: "How to handle FBR Notices", href: "/services/service-fbr-notices" },
                ]
            },
            {
                id: "wealth-faq-3", question: "Can I file a Wealth Statement if I don't own any major assets?", answer: [
                    { type: "text", content: "Yes! Even if you don't have significant assets, you can file a NIL wealth statement. It's still required to maintain your filer status and avoid issues in banking or travel.\n🔗 " },
                    { type: "link", content: "Check ATL Status", href: "/active-taxpayer-verification" },
                ]
            },
            {
                id: "wealth-faq-4", question: "Is Wealth Statement required for property buyers and sellers?", answer: [
                    { type: "text", content: "Absolutely! Anyone buying or selling property in Pakistan is expected to declare assets and show their Wealth Statement to avoid FBR scrutiny.\n🔗 " },
                    { type: "link", content: "Need help with Property Tax?", href: "/property-tax-pakistan" },
                ]
            },
            {
                id: "wealth-faq-5", question: "How can FilerNow help me file my Wealth Statement?", answer: [
                    { type: "text", content: "FilerNow handles the entire process — from collecting your details, preparing your Wealth Statement, and submitting it to FBR.\n✅ Quick processing\n✅ Expert support\n✅ 100% online\n🔗 " },
                    { type: "link", content: "Register to file now", href: "/services/service-filer-registration" },
                ]
            },
        ],
    },

    // 10
    "service-dts-registration": {
        slug: "service-dts-registration",
        breadcrumbLabel: "DTS Registration",
        seoTitle: "DTS Registration in Pakistan | FilerNow",
        seoDescription: "FBR-mandated DTS registration for tobacco, sugar, cement, and beverage industries — FilerNow manages the process from start to finish.",
        heroInfoBadgeLabel: "2 Months",
        heroHeading: <>DTS<br /><span className="text-primary">Registration</span></>,
        heroDescription: "FBR has made DTS registration compulsory for industries like tobacco, sugar, cement, & beverages. Want to get compliant and avoid penalties? FilerNow manages the process from start to finish.",
        heroCtas: [
            { label: "Register Now", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer" },
            { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555" },
        ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "Keep your trade records in order.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "New Registration — Requirements",
                description: "All documents must be attested:",
                items: ["CNIC Front and Back Picture", "Business Registration Document", "NTN Certificate by FBR", "Office Address", "Office electricity Bill", "List of Vehicles (if available)", "Undertaking / Affidavit", "Fee Payment Proof", "Passport Size Photograph", "Rent Agreement", "List of all staff (designations/qualification/experience)", "Bank Statement (last mini closing 200,000)", "5 Letter Heads", "Stamp (Business/Company/AOP)", "Audit Report (certified by Chartered Accountant)"],
            },
            {
                icon: <Handshake size={24} className="text-primary" />,
                title: "Renewal / Re-Registration — Requirements",
                description: "For businesses already DTS-registered:",
                items: ["CNIC Copy", "Previous DTS Certificate / Registration Number", "Updated Company Profile", "List of New Vehicles or Staff (if changed)", "Renewal Fee Payment Proof", "Any Compliance Reports (if required by authority)"],
            },
        ],
        faqs: [
            {
                id: "dts-faq-1", question: "What is DTS registration and who needs it?", answer: [
                    { type: "text", content: "DTS (Document Tracking System) is a mandatory FBR system to monitor production and sales of certain industries (e.g. tobacco, beverages, sugar, cement).\n👉 " },
                    { type: "link", content: "Apply for DTS Registration", href: "/services/service-dts-registration" },
                    { type: "text", content: "\nFirst step? 👉 " },
                    { type: "link", content: "Business NTN Registration", href: "/services/business-ntn-registration" },
                ]
            },
            {
                id: "dts-faq-2", question: "Why is DTS mandatory for some industries?", answer: [
                    { type: "text", content: "It ensures tax compliance and stops under-invoicing or illegal sales. FBR requires DTS for traceability and real-time monitoring.\n👉 " },
                    { type: "link", content: "Start DTS Compliance Now", href: "/services/service-dts-registration" },
                    { type: "text", content: "\nAlso explore 👉 " },
                    { type: "link", content: "GST Registration", href: "/services/service-gst-registration" },
                ]
            },
            {
                id: "dts-faq-3", question: "Which sectors are covered under DTS in Pakistan?", answer: [
                    { type: "text", content: "Currently, DTS is mandatory for:\n• Cigarette manufacturers\n• Beverage companies\n• Sugar mills\n• Cement factories\n👉 " },
                    { type: "link", content: "See DTS Eligibility List", href: "/services/service-dts-registration" },
                    { type: "text", content: "\nNeed FBR guidance? 👉 " },
                    { type: "link", content: "Contact FilerNow", href: "https://api.whatsapp.com/send?phone=923096000020" },
                ]
            },
            {
                id: "dts-faq-4", question: "What documents are required for DTS registration?", answer: [
                    { type: "text", content: "You'll need SECP/Business Registration, NTN, GST certificate, production details, plant location, and machinery data.\n👉 " },
                    { type: "link", content: "Check Required Documents", href: "/services/service-dts-registration" },
                    { type: "text", content: "\nNot registered yet? 👉 " },
                    { type: "link", content: "Company Registration", href: "/services/company-registration-pakistan" },
                ]
            },
            {
                id: "dts-faq-5", question: "How long does the DTS registration process take?", answer: [
                    { type: "text", content: "It can take 7–15 working days depending on factory inspection and FBR approval. FilerNow handles full coordination with the DTS licensee.\n👉 " },
                    { type: "link", content: "Complete DTS Registration with FilerNow", href: "/services/service-dts-registration" },
                    { type: "text", content: "\nAlso useful 👉 " },
                    { type: "link", content: "Tax Return Filing", href: "/services/service-tax-return-filing" },
                ]
            },
        ],
    },

    // 11th
    "service-imp-exp-license-psw": {
        slug: "service-imp-exp-license-psw",
        breadcrumbLabel: "Imp & Exp License (PSW)",
        seoTitle: "Import Export License (PSW) in Pakistan | FilerNow",
        seoDescription: "Register for Import Export License through PSW/WEBOC with FilerNow — easy, online, and 100% compliant.",
        heroInfoBadgeLabel: "36 Working Hours",
        heroHeading: <>Import & Export<br /><span className="text-primary">License (PSW)</span></>,
        heroDescription: "Planning to trade internationally from Pakistan? FilerNow helps you register through PSW/WEBOC — easy, online, and 100% compliant.",
        heroCtas: [
            { label: "Register Now", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer" },
            { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555" },
        ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "Start your import and export work.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "Requirements",
                description: "All we need from you:",
                items: ["CNIC Front Back Picture", "Active contact Number", "Email ID", "Business NTN issued by FBR (if not available, we register it for you)"],
            },
        ],
        faqs: [
            {
                id: "psw-faq-1", question: "What is PSW and why is it required for import/export?", answer: [
                    { type: "text", content: "PSW (Pakistan Single Window) is an online system by FBR required for legal import/export activities. Without it, you can't clear shipments through customs.\n👉 " },
                    { type: "link", content: "Get PSW Registration Now", href: "/services/service-imp-exp-license-psw" },
                    { type: "text", content: "\nNeed GST too? 👉 " },
                    { type: "link", content: "Register for GST", href: "/services/service-gst-registration" },
                ]
            },
            {
                id: "psw-faq-2", question: "Who needs an import/export license in Pakistan?", answer: [
                    { type: "text", content: "Anyone dealing in international trade, even small Amazon sellers, Daraz exporters, or manufacturers must register with PSW.\n👉 " },
                    { type: "link", content: "Apply for Import Export License", href: "/services/service-imp-exp-license-psw" },
                    { type: "text", content: "\nAlso explore 👉 " },
                    { type: "link", content: "Business NTN Registration", href: "/services/business-ntn-registration" },
                ]
            },
            {
                id: "psw-faq-3", question: "What documents are required for PSW registration?", answer: [
                    { type: "text", content: "You'll need NTN, business registration certificate, CNIC, GST (if applicable), and contact details.\n👉 " },
                    { type: "link", content: "See Full Documentation Guide", href: "/services/service-imp-exp-license-psw" },
                    { type: "text", content: "\nHaven't registered business yet? 👉 " },
                    { type: "link", content: "Business Registration", href: "/services/business-registration-pakistan" },
                ]
            },
            {
                id: "psw-faq-4", question: "How long does it take to get a PSW license?", answer: [
                    { type: "text", content: "Usually within 2–4 working days if all documents are in order. FilerNow ensures faster approval and guidance at every step.\n👉 " },
                    { type: "link", content: "Apply Now with FilerNow", href: "/" },
                    { type: "text", content: "\nNeed tax filing too? 👉 " },
                    { type: "link", content: "Tax Return Filing", href: "/services/service-tax-return-filing" },
                ]
            },
            {
                id: "psw-faq-5", question: "Is PSW registration same as WEBOC registration?", answer: [
                    { type: "text", content: "PSW has replaced most of the WEBOC process, but some sectors may still use both. FilerNow handles all registrations as per your business needs.\n👉 " },
                    { type: "link", content: "Simplify Import Export with FilerNow", href: "/" },
                    { type: "text", content: "\nAlso check 👉 " },
                    { type: "link", content: "Filer Registration", href: "/services/service-filer-registration" },
                ]
            },
        ],
    },

    // 12th
    "service-trade-mark-registration": {
        slug: "service-trade-mark-registration",
        breadcrumbLabel: "Trade Mark Registration",
        seoTitle: "Trade Mark Registration in Pakistan | FilerNow",
        seoDescription: "Protect your brand name or logo in Pakistan with FilerNow — file your trademark with IPO Pakistan, simple, online, and legally secure.",
        heroInfoBadgeLabel: "12 Working Hours (TM 1 Filing)",
        heroHeading: <>Trade Mark<br /><span className="text-primary">Registration</span></>,
        heroDescription: "Want to protect your brand name or logo in Pakistan? FilerNow helps you file with IPO Pakistan — simple, online, and legally secure.",
        heroCtas: [
            { label: "Register Now", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer" },
            { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555" },
        ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "Protect your brand name and logo.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "For TM 1 Filing",
                description: "All we need from you:",
                items: ["CNIC front & back Picture", "Email ID (optional)", "Active Contact number", "Business name", "Business address", "Proper Logo (if not available, we design it)"],
            },
            {
                icon: <Handshake size={24} className="text-primary" />,
                title: "Documents Provided by IPO",
                description: "What you'll receive:",
                items: ["TM 1 Form", "Trademark Number (TM)", "Acknowledgment Letter (dispatched to your home address)"],
            },
        ],
        faqs: [
            {
                id: "tm-faq-1", question: "What is a trademark and why should I register it?", answer: [
                    { type: "text", content: "A trademark protects your brand name, logo, or product identity from being copied. It gives you legal ownership in Pakistan.\n👉 " },
                    { type: "link", content: "Apply for Trademark Registration", href: "/services/service-trade-mark-registration" },
                    { type: "text", content: "\nNot registered business yet? 👉 " },
                    { type: "link", content: "Start Business Registration", href: "/services/business-registration-pakistan" },
                ]
            },
            {
                id: "tm-faq-2", question: "Who can register a trademark in Pakistan?", answer: [
                    { type: "text", content: "Any individual, business, or company using a unique name, logo, slogan, or product packaging can apply.\n👉 " },
                    { type: "link", content: "Trademark Your Brand Now", href: "/services/service-trade-mark-registration" },
                    { type: "text", content: "\nNeed NTN first? 👉 " },
                    { type: "link", content: "Get Your NTN", href: "/services/service-simple-ntn-registration-2" },
                ]
            },
            {
                id: "tm-faq-3", question: "What documents are required for trademark registration?", answer: [
                    { type: "text", content: "You'll need CNIC, logo/design, business name proof, and authorization letter if applying on behalf of a company.\n👉 " },
                    { type: "link", content: "See Full Requirements", href: "/services/service-trade-mark-registration" },
                    { type: "text", content: "\nAlso explore 👉 " },
                    { type: "link", content: "Company Registration", href: "/services/company-registration-pakistan" },
                ]
            },
            {
                id: "tm-faq-4", question: "How long does the trademark registration process take?", answer: [
                    { type: "text", content: "It usually takes 8–12 months with IPO Pakistan, but your brand name gets protection from the date of application.\n👉 " },
                    { type: "link", content: "File Your Trademark with FilerNow", href: "/services/service-trade-mark-registration" },
                    { type: "text", content: "\nWant faster filing? 👉 " },
                    { type: "link", content: "Contact Now", href: "https://api.whatsapp.com/send?phone=923096000020" },
                ]
            },
            {
                id: "tm-faq-5", question: "Can I register my business name and logo together?", answer: [
                    { type: "text", content: "Yes! You can apply for multiple trademarks – name, logo, slogan – separately or in one form. FilerNow helps you choose the best option.\n👉 " },
                    { type: "link", content: "Secure Your Brand Identity", href: "/services/service-trade-mark-registration" },
                    { type: "text", content: "\nAlso useful 👉 " },
                    { type: "link", content: "Filer Registration", href: "/services/service-filer-registration" },
                ]
            },
        ],
    },

    // 13
    "service-pec-registration": {
        slug: "service-pec-registration",
        breadcrumbLabel: "PEC Registration",
        seoTitle: "PEC Registration in Pakistan | FilerNow",
        seoDescription: "Register as an engineer or engineering firm with PEC through FilerNow — legally practice and bid on government projects.",
        heroInfoBadgeLabel: "1 Month",
        heroHeading: <>PEC<br /><span className="text-primary">Registration</span></>,
        heroDescription: "Are you an engineer or running an engineering firm in Pakistan? PEC registration is mandatory to practice legally and bid for government projects. FilerNow helps you get PEC certified smoothly and online.",
        heroCtas: [
            { label: "Register Now", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer" },
            { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555" },
        ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "Get your engineering license.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "New Registration — Requirements",
                description: "For first-time PEC registration:",
                items: ["CNIC Front and Back Picture", "Bank Account Maintenance Certificate (original)", "Stamp & Letter Head", "Recent Passport Size Photograph", "List of Major Projects Completed", "Fee Payment Proof", "Matric & Intermediate Certificates (if required)", "Bank Statement of Last One Year", "Engineer required (if not available, we arrange accordingly)"],
            },
            {
                icon: <Handshake size={24} className="text-primary" />,
                title: "Reconciliation / Revalidation — Requirements",
                description: "For engineers already registered:",
                items: ["CNIC Copy", "Previous PEC Certificate or Registration Number", "Engineering Degree Copy", "Experience Certificates (if applicable)", "Revalidation Application Form", "Recent Passport Size Photograph", "Affidavit / Undertaking (if required)", "Revalidation Fee Payment Proof"],
            },
        ],
        faqs: [
            {
                id: "pec-faq-1", question: "What is PEC registration and who needs it?", answer: [
                    { type: "text", content: "PEC registration is required for engineers and engineering firms to work legally on government or private infrastructure projects in Pakistan.\n👉 " },
                    { type: "link", content: "Apply for PEC Registration", href: "/services/service-pec-registration" },
                    { type: "text", content: "\nNeed company setup first? 👉 " },
                    { type: "link", content: "Company Registration", href: "/services/company-registration-pakistan" },
                ]
            },
            {
                id: "pec-faq-2", question: "What are the types of PEC registration?", answer: [
                    { type: "text", content: "PEC offers registration for:\n• Individual Engineers (graduates)\n• Engineering Consulting Firms\n• Construction/Contractor Companies\n👉 " },
                    { type: "link", content: "Choose the Right PEC Category", href: "/services/service-pec-registration" },
                    { type: "text", content: "\nAlso explore 👉 " },
                    { type: "link", content: "Business Registration", href: "/services/business-registration-pakistan" },
                ]
            },
            {
                id: "pec-faq-3", question: "What documents are required for PEC firm registration?", answer: [
                    { type: "text", content: "For firms, you need CNIC, engineering degree(s), SECP certificate, bank statement, NTN, and experience details.\n👉 " },
                    { type: "link", content: "See Required Documents", href: "/services/service-pec-registration" },
                    { type: "text", content: "\nHaven't applied for NTN yet? 👉 " },
                    { type: "link", content: "Get Your NTN", href: "/services/service-simple-ntn-registration-2" },
                ]
            },
            {
                id: "pec-faq-4", question: "How long does the PEC registration process take?", answer: [
                    { type: "text", content: "PEC firm registration usually takes 10–15 working days if documents are complete. FilerNow ensures quick and error-free processing.\n👉 " },
                    { type: "link", content: "Start PEC Process Now", href: "/services/service-pec-registration" },
                    { type: "text", content: "\nNeed tax filing too? 👉 " },
                    { type: "link", content: "Tax Return Filing", href: "/services/service-tax-return-filing" },
                ]
            },
            {
                id: "pec-faq-5", question: "What are the benefits of PEC registration?", answer: [
                    { type: "text", content: "You get government recognition, project eligibility, contractor licensing, and legal compliance to operate in Pakistan's engineering sector.\n👉 " },
                    { type: "link", content: "Get PEC Certified", href: "/services/service-pec-registration" },
                    { type: "text", content: "\nAlso useful 👉 " },
                    { type: "link", content: "Filer Registration", href: "/services/service-filer-registration" },
                ]
            },
        ],
    },

    // 14th
    "chamber-membership-registration": {
        slug: "chamber-membership-registration",
        breadcrumbLabel: "Chamber Membership",
        seoTitle: "Chamber Membership Registration in Pakistan – Apply Now | FilerNow",
        seoDescription: "Chamber Membership Registration in Pakistan made easy by FilerNow. Fast approval, legal documentation, expert support.",
        heroInfoBadgeLabel: "10–40 Days (per fee tier)",
        heroHeading: <>Chamber Membership<br /><span className="text-primary">Registration</span></>,
        heroDescription: "Chamber Membership Registration in Pakistan is important for every growing business. It helps in official recognition, trade benefits, and more. FilerNow makes it simple and online.",
        heroCtas: [
            { label: "Register Now", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer" },
            { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555" },
        ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "Join and grow your business network.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "Documents Required",
                description: "All we need from you:",
                items: ["Office electricity bill copy", "Business Bank account certificate (original)", "Applicant picture with white background (passport size)", "CNIC Front Back Picture", "Stamp of Business name", "Company complete documents", "Return File of last Financial Year", "Letter Head"],
            },
            {
                icon: <Handshake size={24} className="text-primary" />,
                title: "Documents Provided by Chamber",
                description: "What you'll receive:",
                items: ["Chamber Card (Associate / Corporate)", "Chamber Certificate"],
            },
        ],
        faqs: [
            {
                id: "chamber-faq-1", question: "What is Chamber of Commerce membership and who needs it?", answer: [
                    { type: "text", content: "It's an official certificate issued by your local Chamber that verifies your business as a legitimate entity. It's required for import/export, tenders, PSW registration, and trade fairs.\n👉 " },
                    { type: "link", content: "Apply for Chamber Membership Registration", href: "/services/chamber-membership-registration" },
                    { type: "text", content: "\nNeed business NTN first? 👉 " },
                    { type: "link", content: "NTN Registration", href: "/services/business-ntn-registration" },
                ]
            },
            {
                id: "chamber-faq-2", question: "Why is Chamber membership Registration important for business?", answer: [
                    { type: "text", content: "It boosts your business credibility, makes you eligible for international trade, and is required by banks, PSW, and customs authorities.\n👉 " },
                    { type: "link", content: "Get Chamber Certificate Now", href: "/services/chamber-membership-registration" },
                    { type: "text", content: "\nWant to register for PSW? 👉 " },
                    { type: "link", content: "Import Export License (PSW)", href: "/services/service-imp-exp-license-psw" },
                ]
            },
            {
                id: "chamber-faq-3", question: "What documents are required for Chamber membership registration?", answer: [
                    { type: "text", content: "You need CNIC, NTN certificate, business letterhead, utility bill, and a filled application form with company stamp.\n👉 " },
                    { type: "link", content: "View Document Checklist", href: "/services/chamber-membership-registration" },
                    { type: "text", content: "\nNot registered yet? 👉 " },
                    { type: "link", content: "Business Registration", href: "/services/business-registration-pakistan" },
                ]
            },
            {
                id: "chamber-faq-4", question: "How long does it take to get a Chamber certificate?", answer: [
                    { type: "text", content: "With FilerNow's help, you can get your certificate within 3–5 working days from your relevant Chamber.\n👉 " },
                    { type: "link", content: "Start Chamber Membership Registration Process", href: "/services/chamber-membership-registration" },
                    { type: "text", content: "\nAlso explore 👉 " },
                    { type: "link", content: "Filer Registration", href: "/services/service-filer-registration" },
                ]
            },
            {
                id: "chamber-faq-5", question: "Is Chamber membership required for freelancers or small businesses?", answer: [
                    { type: "text", content: "Yes, if you're involved in trading, importing, exporting, or need a PSW license — even home-based or small businesses should apply.\n👉 " },
                    { type: "link", content: "Register with Chamber Now", href: "/services/chamber-membership-registration" },
                    { type: "text", content: "\nRunning online business? 👉 " },
                    { type: "link", content: "Business NTN Registration", href: "/services/business-ntn-registration" },
                ]
            },
        ],
    },

    // 15
    "service-pseb": {
        slug: "service-pseb",
        breadcrumbLabel: "PSEB",
        seoTitle: "PSEB Registration in Pakistan | FilerNow",
        seoDescription: "Register your IT company or freelance software business with PSEB through FilerNow — official recognition and tax benefits.",
        heroInfoBadgeLabel: "15 Days",
        heroHeading: <>PSEB<br /><span className="text-primary">Registration</span></>,
        heroDescription: "Running an IT company or freelance software business? PSEB registration helps you get official recognition and tax benefits. FilerNow handles your PSEB registration from start to finish.",
        heroCtas: [
            { label: "Register Now", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer" },
            { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555" },
        ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "Get certified for your IT business.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "Documents Required",
                description: "All we need from you:",
                items: ["CNIC Front Back Picture", "Fiverr/Upwork account links (optional)", "Last education degree", "Email ID", "Active Contact Number", "Logo and portfolio of work"],
            },
        ],
        faqs: [
            {
                id: "pseb-faq-1", question: "What is PSEB and why should I register with it?", answer: [
                    { type: "text", content: "PSEB (Pakistan Software Export Board) registers IT companies, freelancers, and software exporters to promote Pakistan's IT sector. Registration brings recognition, benefits, and certifications.\n👉 " },
                    { type: "link", content: "Apply for PSEB Registration", href: "/services/service-pseb" },
                    { type: "text", content: "\nAlso check 👉 " },
                    { type: "link", content: "Company Registration", href: "/services/company-registration-pakistan" },
                ]
            },
            {
                id: "pseb-faq-2", question: "Who can apply for PSEB registration?", answer: [
                    { type: "text", content: "Any software house, IT startup, freelancer, or export-based digital service provider can apply — whether sole proprietor or Pvt Ltd company.\n👉 " },
                    { type: "link", content: "Register as Freelancer or Company", href: "/services/service-pseb" },
                    { type: "text", content: "\nNeed NTN first? 👉 " },
                    { type: "link", content: "Get NTN Online", href: "/services/service-simple-ntn-registration-2" },
                ]
            },
            {
                id: "pseb-faq-3", question: "What are the benefits of PSEB registration?", answer: [
                    { type: "text", content: "You get official recognition, export certification, tax exemptions, and eligibility for government grants and IT park offices.\n👉 " },
                    { type: "link", content: "Explore PSEB Benefits", href: "/services/service-pseb" },
                    { type: "text", content: "\nAlready registered company? 👉 " },
                    { type: "link", content: "File Tax Return", href: "/services/service-tax-return-filing" },
                ]
            },
            {
                id: "pseb-faq-4", question: "What documents are needed for PSEB registration?", answer: [
                    { type: "text", content: "You'll need CNIC, business registration docs (sole proprietorship or SECP), NTN, business profile, and export invoices (if any).\n👉 " },
                    { type: "link", content: "View Required Documents", href: "/services/service-pseb" },
                    { type: "text", content: "\nNot registered yet? 👉 " },
                    { type: "link", content: "Start Business Registration", href: "/services/business-registration-pakistan" },
                ]
            },
            {
                id: "pseb-faq-5", question: "How long does it take to get PSEB certification?", answer: [
                    { type: "text", content: "It usually takes 5–10 working days if all documents are complete. FilerNow ensures fast processing and complete support.\n👉 " },
                    { type: "link", content: "Get PSEB Certified", href: "/services/service-pseb" },
                    { type: "text", content: "\nAlso explore 👉 " },
                    { type: "link", content: "Filer Registration", href: "/services/service-filer-registration" },
                ]
            },
        ],
    },

    // 16
    "service-dnfbp": {
        slug: "service-dnfbp",
        breadcrumbLabel: "DNFBP",
        seoTitle: "DNFBP Registration in Pakistan | FilerNow",
        seoDescription: "Register as a DNFBP with FBR through FilerNow — fast, online, and fully compliant for real estate, jewelry, accounting, and law professions.",
        heroInfoBadgeLabel: "24 Working Hours",
        heroHeading: <>DNFBP<br /><span className="text-primary">Registration</span></>,
        heroDescription: "If you deal in property, jewelry, accounting, or law — you must register as a DNFBP with FBR. FilerNow helps you get DNFBP certified fast, online, and fully compliant.",
        heroCtas: [
            { label: "Register Now", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-a-filer" },
            { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555" },
        ],
        needProvidedHeading: "What is Needed & Provided",
        needProvidedPara: "Stay compliant with FBR regulations.",
        needProvidedBoxes: [
            {
                icon: <FileText size={24} className="text-primary" />,
                title: "Documents Required",
                description: "All we need from you:",
                items: ["CNIC Front & back Picture", "Active Contact Number", "Email ID (optional)", "Business Registration Documents (if not available, we register it for you)"],
            },
        ],
        faqs: [
            {
                id: "dnfbp-faq-1", question: "What is DNFBP and who needs to register?", answer: [
                    { type: "text", content: "DNFBP stands for Designated Non-Financial Business & Profession. If you're a real estate agent, jeweler, accountant, or lawyer handling large transactions, you must register with FBR.\n👉 " },
                    { type: "link", content: "Apply for DNFBP Registration", href: "/services/service-dnfbp" },
                    { type: "text", content: "\nAlso check 👉 " },
                    { type: "link", content: "NTN Registration", href: "/services/service-simple-ntn-registration-2" },
                ]
            },
            {
                id: "dnfbp-faq-2", question: "Why is DNFBP registration mandatory in Pakistan?", answer: [
                    { type: "text", content: "FBR has made it compulsory under AML (Anti-Money Laundering) laws to monitor high-risk professions and ensure transparency. Non-registration may lead to penalties.\n👉 " },
                    { type: "link", content: "Start DNFBP Compliance Now", href: "/services/service-dnfbp" },
                    { type: "text", content: "\nNot a Filer yet? 👉 " },
                    { type: "link", content: "Become a Filer", href: "/services/service-filer-registration" },
                ]
            },
            {
                id: "dnfbp-faq-3", question: "What businesses are covered under DNFBP?", answer: [
                    { type: "text", content: "It includes real estate dealers, accountants, law firms, trust service providers, and jewelers dealing with large cash transactions.\n👉 " },
                    { type: "link", content: "Check Eligibility & Register", href: "/services/service-dnfbp" },
                    { type: "text", content: "\nNeed business NTN first? 👉 " },
                    { type: "link", content: "Get Business NTN", href: "/services/business-ntn-registration" },
                ]
            },
            {
                id: "dnfbp-faq-4", question: "What documents are required for DNFBP registration?", answer: [
                    { type: "text", content: "You'll need NTN, business registration certificate, CNIC of owner, office address, and bank account details.\n👉 " },
                    { type: "link", content: "See Full Document List", href: "/services/service-dnfbp" },
                    { type: "text", content: "\nHaven't registered your business? 👉 " },
                    { type: "link", content: "Register Your Business", href: "/services/business-registration-pakistan" },
                ]
            },
            {
                id: "dnfbp-faq-5", question: "How long does the DNFBP registration process take?", answer: [
                    { type: "text", content: "It usually takes 3–7 working days. FilerNow handles end-to-end registration, compliance, and FBR coordination.\n👉 " },
                    { type: "link", content: "Register with FilerNow Now", href: "/services/service-dnfbp" },
                    { type: "text", content: "\nAlso explore 👉 " },
                    { type: "link", content: "GST Registration", href: "/services/service-gst-registration" },
                ]
            },
        ],
    },
}

export const getServiceBySlug = (slug: string) => servicesData[slug]
export const allServiceSlugs = Object.keys(servicesData)