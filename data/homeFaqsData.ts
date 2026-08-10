// export interface IFaqItem {
//     id: string,
//     question: string,
//     answer: string,
// }

import { IFaqItem } from "@/lib/types/faq/types";

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