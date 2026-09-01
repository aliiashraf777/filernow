import { ArrowRight } from "lucide-react"
import { AnchorBtn, LinkBtn } from "../common/btns/Button"
import SectionContainer from "../common/section/SectionContainer"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

type Props = {}

const BlogPostCta = (props: Props) => {
    return (
        <SectionContainer
            backgroundGradient="linear-gradient(90deg, var(--background) 0%, var(--text-tertiary) 100%)"
            bgImage={
                <>
                    <Image
                        src="/assets/blog/blogPostCtaBgBlog1.png"
                        alt=""
                        width={240}
                        height={240}
                        priority
                        className="-z-10 absolute top-0 right-0"
                        // style={{ objectFit: "contain", objectPosition: "top right" }}
                    />
                    <Image
                        src="/assets/blog/blogPostCtaBgBlog2.png"
                        alt=""
                        width={240}
                        height={240}
                        priority
                        className="-z-10 absolute bottom-0 left-0"
                    />
                </>
            }
        >
            <div className="flex flex-col items-center gap-5 px-[10px]x py-[50] md:py-[80px]">
                <h2 className="heading-h2 text-[44px]x text-center">
                    Ready to Get Started?
                </h2>
                <p className="para-18 text-text-secondary-muted text-center max-w-[760px] mx-auto">
                    Join thousands of learners and start your journey today. Register now for the best experience, or reach out on WhatsApp if you have any questions.
                </p>
                <LinkBtn
                    href="/become-filer"
                    label="Send Us Query"
                    icon={<ArrowRight size={20} />}
                    className="rounded-full orbit-pingx arc-breathe"
                />
                <p className="para-18 text-text-secondary-muted text-center max-w-[760px] mx-auto">
                    Need More Information? Contact Us On WhatsApp.
                </p>
                <AnchorBtn
                    href="https://wa.me/923041110555"
                    openOnNewTab
                    label="Talk to an Expert"
                    icon={<FaWhatsapp size={18} className="text-white" />}
                    className="bg-secondary rounded-full"
                />
            </div>
        </SectionContainer>
    )
}

export default BlogPostCta