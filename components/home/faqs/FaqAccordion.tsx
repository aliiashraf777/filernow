"use client"

import { Plus, X } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
// import type { IFaqItem } from "@/data/appData"
import RevealOnScroll from "../../ui-custom/RevealOnScroll"
import FaqAnswer from "./FaqAnswer"
import { IFaqItem } from "@/lib/types/faq/types"

type Props = {
    items: IFaqItem[],
    defaultValue?: string,
}

const FaqAccordion = ({ items, defaultValue }: Props) => {
    return (
        <Accordion
            defaultValue={defaultValue ? [defaultValue] : undefined}
            className="flex flex-col gap-3"
        >
            {items.map((item, index) => (
                <RevealOnScroll key={item.id} delay={index * 60}>
                    <AccordionItem
                        // key={item.id}
                        value={item.id}
                        className="rounded-brand-8 border border-border-card-clr bg-background px-6 default-transition has-data-[panel-open]:shadow-primary-btn"
                    >
                        <AccordionTrigger
                            className="group py-5 flex items-center justify-between cursor-pointer"
                        >
                            <span className="heading-h5 text-text-dark text-[16px]">
                                {item.question}
                            </span>

                            {/* icon */}
                            <span
                                className="relative shrink-0 w-8 h-8 flex items-center justify-center bg-card-bg-clr rounded-brand-8 default-transition group-data-[panel-open]:bg-primary-lighter group-data-[panel-open]:rounded-brand-12x"
                            >
                                <Plus
                                    size={16}
                                    className="text-primary group-data-[panel-open]:hidden"
                                />
                                <X
                                    size={16}
                                    className="text-primary hidden group-data-[panel-open]:block"
                                />
                            </span>
                        </AccordionTrigger>

                        {/* <AccordionContent className="pb-5">
                            <p className="para-small text-text-secondary leading-[22.75px]">
                                {item.answer}
                            </p>
                        </AccordionContent> */}
                        <AccordionContent className="pb-5">
                            <FaqAnswer answer={item.answer} />
                        </AccordionContent>
                    </AccordionItem>
                </RevealOnScroll>
            ))}
        </Accordion>
    )
}

export default FaqAccordion