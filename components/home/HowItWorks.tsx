import { ArrowRight } from "lucide-react"
import Button from "@/components/btns/Button"
import SectionContainer from "@/components/common/section/SectionContainer"
import VideoCard from "../ui-custom/VideoCard"

type Props = {}

const HowItWorks = (props: Props) => {

    return (
        <>
            <SectionContainer
                sectionClass="bg-gradient-how-it-works"
                containerClass="container-y-padding"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center">
                    {/* text */}
                    <div className="flex flex-col gap-3">
                        <h5 className="heading-h5 text-primary text-[16px] leading-[20px] tracking-[2.52px]">
                            See How It Works
                        </h5>
                        <h2 className="heading-h2 max-w-[410px] leading-[40px] tracking-[-0.9px]">
                            File taxes & register your business the smart way
                        </h2>
                        <p className="para-base text-text-secondary mt-2 max-w-[510px]">
                            Watch how FilerNow makes tax filing and business compliance fast,
                            easy and reliable. From NTN registration to company setup, we
                            walk you through every step so you can grow with confidence.
                        </p>
                        <Button className="mt-5">
                            Start your filing
                            <ArrowRight size={18} />
                        </Button>
                    </div>

                    {/* video trigger */}
                    <VideoCard />
                </div>
            </SectionContainer>
        </>
    )
}

export default HowItWorks