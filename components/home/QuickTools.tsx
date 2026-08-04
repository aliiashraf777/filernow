// components/home/QuickTools.tsx
import SectionContainer from "@/components/common/section/SectionContainer"
import { quickToolsData } from "@/data/appData"
import ToolsCard from "./ToolsCard"

type Props = {}

const QuickTools = (props: Props) => {
    return (
        <SectionContainer 
        sectionClass="bg-background"
        containerClass="container-y-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quickToolsData.map((tool) => (
                    <ToolsCard
                        key={tool.title}
                        {...tool}
                    />
                ))}
            </div>
        </SectionContainer>
    )
}

export default QuickTools