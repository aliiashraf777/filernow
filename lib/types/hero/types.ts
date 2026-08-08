import type { ButtonVariantTy } from "@/components/btns/Button"

export type HeroCtaItem = {
    label: string,
    icon?: React.ReactNode,
    variant?: ButtonVariantTy,
    href?: string,
    onClick?: () => void,
}

export type HeroStatItem = {
    to: number,
    suffix?: string,
    label: string,
}

export type HeroChecklistItem = {
    icon: React.ReactNode,
    label: string,
}

export type HeroBottomRow =
    | { type: "stats", items: HeroStatItem[] }
    | { type: "checklist", items: HeroChecklistItem[] }