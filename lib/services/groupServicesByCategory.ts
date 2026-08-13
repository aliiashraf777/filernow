// lib/services/groupServicesByCategory.ts
import { IServiceItem, servicesGridData } from "@/data/servicesGridData"

export const categoryMeta: Record<IServiceItem["category"], string> = {
    registration: "Registration Services",
    compliance: "Compliance & Filing",
    licenses: "Licenses & Certifications",
}

export const categoryOrder: IServiceItem["category"][] = [
    "registration",
    "compliance",
    "licenses",
]

export type GroupedServiceCategory = {
    category: IServiceItem["category"]
    label: string
    items: IServiceItem[]
}

export function groupServicesByCategory(): GroupedServiceCategory[] {
    return categoryOrder.map((category) => ({
        category,
        label: categoryMeta[category],
        items: servicesGridData.filter((s) => s.category === category),
    }))
}