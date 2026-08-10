import type { HeroCtaItem, HeroChecklistItem } from "@/lib/types/hero/types"
import { IFaqItem } from "../faq/types";

export interface IServiceNeedProvidedBox {
    icon: React.ReactNode,
    title: string,
    description: string,
    items: string[],
}

export interface IServiceFaqItem {
    id: string,
    question: string,
    answer: string,
}

export interface IServiceDetail {
    slug: string,
    breadcrumbLabel: string,
    seoTitle: string,
    seoDescription: string,
    heroInfoBadgeLabel: string,
    heroHeading: React.ReactNode,
    heroDescription: string,
    heroCtas?: HeroCtaItem[],
    heroChecklist?: HeroChecklistItem[],
    needProvidedHeading: string,
    needProvidedPara: string,
    needProvidedBoxes: IServiceNeedProvidedBox[],
    // faqs: IServiceFaqItem[],
    faqs: IFaqItem[],
}