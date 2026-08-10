import { ArrowRight } from "lucide-react"
import Button from "@/components/common/btns/Button"
import SectionContainer from "@/components/common/section/SectionContainer"
import VideoCard from "../../ui-custom/VideoCard"
import RevealOnScroll from "../../ui-custom/RevealOnScroll"

type Props = {}

const HowItWorks = (props: Props) => {

    return (
        <>
            <RevealOnScroll delay={30}>
                <SectionContainer
                    sectionClass="bg-gradient-how-it-works"
                    containerClass="container-y-padding"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center">
                        {/* text */}
                        <div className="flex flex-col gap-3">
                            <RevealOnScroll delay={100}>
                                <h5 className="heading-h5 text-primary text-[16px] leading-[20px] tracking-[2.52px]">
                                    See How It Works
                                </h5>
                            </RevealOnScroll>

                            <RevealOnScroll delay={200}>
                                <h2 className="heading-h2 max-w-[410px] leading-[40px] tracking-[-0.9px]">
                                    File taxes & register your business the smart way
                                </h2>
                            </RevealOnScroll>

                            <RevealOnScroll delay={300}>
                                <p className="para-base text-text-secondary mt-2 max-w-[510px]">
                                    Watch how FilerNow makes tax filing and business compliance fast,
                                    easy and reliable. From NTN registration to company setup, we
                                    walk you through every step so you can grow with confidence.
                                </p>
                            </RevealOnScroll>

                            <RevealOnScroll delay={400}>
                                <Button className="mt-5">
                                    Start your filing
                                    <ArrowRight size={18} />
                                </Button>
                            </RevealOnScroll>
                        </div>

                        {/* video trigger */}
                        <RevealOnScroll delay={500}>
                            <VideoCard />
                        </RevealOnScroll>
                    </div>
                </SectionContainer>
            </RevealOnScroll>
        </>
    )
}

export default HowItWorks