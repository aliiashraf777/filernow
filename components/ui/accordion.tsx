"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "@/utils/cn";

function Accordion({ ...props }: AccordionPrimitive.Root.Props) {
    return <AccordionPrimitive.Root data-slot="accordion" keepMounted {...props} />;
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
    return (
        <AccordionPrimitive.Item data-slot="accordion-item" className={cn(className)} {...props} />
    );
}

function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "flex w-full flex-1 items-center justify-between gap-4 text-left outline-none disabled:pointer-events-none disabled:opacity-50",
                    className
                )}
                {...props}
            >
                {children}
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({ className, children, ...props }: AccordionPrimitive.Panel.Props) {
    return (
        <AccordionPrimitive.Panel
            data-slot="accordion-content"
            className="data-[closed]:animate-accordion-collapse data-[open]:animate-accordion-expand overflow-hidden"
            {...props}
        >
            <div className={cn(className)}>{children}</div>
        </AccordionPrimitive.Panel>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };