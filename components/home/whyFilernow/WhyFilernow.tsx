import WaveStepsSection from "@/components/common/wave-steps/WaveStepsSection"
import { whyFilerNowSteps } from "@/data/appData"

const WhyFilerNow = () => (
    <WaveStepsSection
        infoLabel="Why FilerNow"
        heading="Built on trust and results"
        para="Everything we do is designed to make compliance effortless while keeping your business protected."
        steps={whyFilerNowSteps}
    />
)

export default WhyFilerNow