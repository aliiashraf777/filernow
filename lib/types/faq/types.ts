export type FaqAnswerPart =
    | { type: 'text', content: string }
    | { type: 'link', content: string, href: string }

export interface IFaqItem {
    id: string,
    question: string,
    answer: string | FaqAnswerPart[], // string = old plain-text FAQs, unchanged; array = new linked FAQs
}