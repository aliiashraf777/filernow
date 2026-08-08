"use client"

import SectionContainer from "@/components/common/section/SectionContainer"
import { quickToolsData } from "@/data/appData"
import ToolsCard from "./ToolsCard"
import { useCalculatorContext } from "@/context/CalculatorContext"
import RevealOnScroll from "@/components/ui-custom/RevealOnScroll"
import { useFilerStatusContext } from "@/context/FilerStatusContext"

const QuickTools = () => {
    const { openCalculator } = useCalculatorContext();
    const { openFilerStatus } = useFilerStatusContext();

    return (
        <SectionContainer sectionClass="bg-background" containerClass="container-y-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quickToolsData.map((tool, idx) => (
                    <RevealOnScroll
                        key={tool.id}
                        delay={idx * 100}
                    >
                        <ToolsCard
                            icon={tool.icon}
                            title={tool.title}
                            description={tool.description}
                            href={tool.href}
                            onClick={tool.action === "openCalculator"
                                ? openCalculator : openFilerStatus}
                            variant={tool.variant}
                        />
                    </RevealOnScroll>
                ))}
            </div>
        </SectionContainer>
    )
}

export default QuickTools