import { CheckCircle2, FileBadge } from "lucide-react"
import Button, { LinkBtn } from "@/components/common/btns/Button"
import SectionContainer from "@/components/common/section/SectionContainer"
import type { IServiceDetail } from "@/lib/types/services/types"
import { cn } from "@/utils/cn"
import { FaWhatsapp } from "react-icons/fa"

type Props = {
    heading: string,
    para: string,
    boxes: IServiceDetail["needProvidedBoxes"],
}

const ServiceNeedProvidedSection = ({ heading, para, boxes }: Props) => (
    <SectionContainer containerClass="container-y-padding">
        <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-h2">{heading}</h2>
            <p className="para-base text-text-secondary mt-3">{para}</p>
        </div>

        <div className="flex flex-col gap-6">
            {boxes.map((box, i) => (
                <div
                    key={box.title}
                    className={cn(
                        "rounded-brand-16 border p-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center",
                        // alternating white / primary-tinted, per box index — as requested
                        i % 2 === 0 ? "bg-background border-border-clr" : "bg-primary/5 border-primary/20",
                    )}
                >
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="grid place-items-center w-12 h-12 rounded-brand-8 bg-primary/10 shrink-0">
                                {box.icon}
                            </span>
                            <h3 className="heading-h4 font-bold">{box.title}</h3>
                        </div>
                        <p className="para-small text-text-secondary mt-3">{box.description}</p>

                        <ul className="mt-4 flex flex-col gap-2.5">
                            {box.items.map((item) => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                                    <span className="para-small text-text-dark">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-5 w-full lg:w-56 shrink-0">
                        <LinkBtn
                            href="/become-a-filer"
                            label="Become A Filer"
                            icon={<FileBadge size={16} />}
                            variant="primary"
                            size="full"
                            attentionGrabbing
                            className="justify-center hover:-translate-y-0.5 icon-pulsex ring-sweepx capsule-breathe"
                        />
                        <LinkBtn
                            href="https://wa.me/923041110555"
                            label="Talk to an Expert"
                            icon={<FaWhatsapp size={16} className="text-secondary" />}
                            variant="white"
                            size="full"
                            attentionGrabbing
                            openOnNewTab
                            className="justify-center hover:-translate-y-0.5 number-floatx"
                        />
                    </div>
                </div>
            ))}
        </div>
    </SectionContainer>
)

export default ServiceNeedProvidedSection