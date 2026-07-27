import Image from "next/image"
import SectionContainer from "../section/SectionContainer"
import Button from "@/components/btns/Button"
import { ArrowRight } from "lucide-react"

type Props = {}

const BeforeFooter = (props: Props) => {
    return (
        <SectionContainer
            containerClass="container-y-padding"
        >
            <div className="w-full flex items-center justify-center bg-primary/10 rounded-brand-16 py-[50px] px-3 relative">
                {/* circle */}
                <Image
                    src={'/assets/beforeFooterCircle.svg'}
                    alt="beforeFooterCircle.svg"
                    width={270}
                    height={205}
                    className="-z-10x w-[80px] md:w-[270px] h-[65px] md:h-[205px] absolute right-0 top-0"
                />

                <Image
                    src={'/assets/beforeFooterCircle.svg'}
                    alt="beforeFooterCircle.svg"
                    width={270}
                    height={205}
                    className="-z-10x w-[80px] md:w-[270px] h-[65px] md:h-[205px] absolute left-0 bottom-0 rotate-180 opacity-75"
                />

                <div className="flex flex-col gap-4 items-center justify-center">
                    <Image
                        src={'/assets/headerLogo.svg'}
                        alt="logo"
                        width={80}
                        height={80}
                        className="hover:-translate-y-0.5 default-transition"
                    />

                    <h2 className="heading-h2 font-extrabold leading-10 text-center tracking-[-0.9px]">
                        Ready to file your taxes the smart way?
                    </h2>

                    <p className="para-base text-text-secondary-muted text-center md:max-w-[576px]">
                        Get expert help with tax filing, registration and compliance. Fast, secure and reliable  become a filer today.
                    </p>

                    <Button>
                        Become a filer
                        <ArrowRight size={20} />
                    </Button>
                </div>
            </div>
        </SectionContainer>
    )
}

export default BeforeFooter