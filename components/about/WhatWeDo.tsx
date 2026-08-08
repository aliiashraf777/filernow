// components/about/WhatWeDo.tsx
"use client"
import Image from "next/image"
import SectionContainer from "@/components/common/section/SectionContainer"
import SectionTitle from "@/components/ui-custom/SectionTitle"
import RevealOnScroll from "@/components/ui-custom/RevealOnScroll"
import { whatWeDoAboutItems } from "@/data/appData"

const CASCADE_STEP_MS = 250
const ENTRANCE_MS = 700
const T_LOGO = 0
const T_RING = 250
const T_CAPSULES_START = 500

// ring box — used ONLY for the ring/sweep, never for the arcs (that coupling was the bug)
// const RING_BOX = { left: "24%", top: "0%", width: "52%" }
const RING_BOX = { left: "19%", top: "-10%", width: "62%" }

// arc box — sized against the FULL container: 462px / 1005px real container width ≈ 46%,
// measured directly from your uploaded Ellipse_3/Ellipse_4 assets, not estimated
const ARC_WIDTH = "42%"
const ARC_LEFT = "30%"

const WhatWeDo = () => {
    return (
        <SectionContainer containerClass="container-y-padding">
            <RevealOnScroll delay={0}>
                <SectionTitle infoLabel="What We Do" heading="We offer end-to-end digital solutions for" />
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
                <div className="hidden lg:block relative mx-auto mt-16 w-full max-w-[1005px] aspect-[1005/523]">
                    {/* static ring */}
                    <div className="absolute" style={{ ...RING_BOX, aspectRatio: "1 / 1" }}>
                        <Image src="/assets/about/whatWeDo-ring.png" alt="" fill sizes="52vw" className="object-contain" />
                    </div>

                    {/* traveling sweep — same ring asset, same ring box, animated */}
                    {/* <div
                        className="absolute ring-sweep pointer-events-none"
                        style={{ ...RING_BOX, aspectRatio: "1 / 1", animationDelay: `${T_RING + ENTRANCE_MS}ms` }}
                    >
                        <Image src="/assets/about/whatWeDo-ring.png" alt="" fill sizes="52vw" className="object-contain" />
                    </div> */}

                    {/* top arc — own box, sized against the FULL container (46%), positioned
                        near the top, spanning between the top-left and top-right capsules.
                        Real aspect ratio from the actual PNG: 462×189 */}
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            left: ARC_LEFT, top: "-11%", width: ARC_WIDTH, aspectRatio: "462 / 189",
                            animation: `fade-scale-in ${ENTRANCE_MS}ms cubic-bezier(0.16,1,0.3,1) ${T_RING}ms both, arc-breathe 2.6s ease-in-out ${T_RING + ENTRANCE_MS}ms infinite`,
                        }}
                    >
                        <Image src="/assets/about/whatWeDo-arc-top.png" alt="" fill sizes="46vw" className="object-contain" />
                    </div>

                    {/* bottom arc — mirrored, real aspect ratio 462×187 */}
                    <div
                        className="absolute pointer-events-none -rotate-2"
                        style={{
                            left: ARC_LEFT, bottom: "-10%", width: ARC_WIDTH, aspectRatio: "462 / 187",
                            animation: `fade-scale-in ${ENTRANCE_MS}ms cubic-bezier(0.16,1,0.3,1) ${T_RING}ms both, arc-breathe 2.6s ease-in-out ${T_RING + ENTRANCE_MS}ms infinite`,
                        }}
                    >
                        <Image src="/assets/about/whatWeDo-arc-bottom.png" alt="" fill sizes="46vw" className="object-contain" />
                    </div>

                    {/* center logo */}
                    <div
                        className="absolute rounded-full bg-background shadow-[0px_4px_16px_0px_rgba(200,16,46,0.25)] outline outline-1 outline-rose-100 grid place-items-center z-10 orbit-ping"
                        style={{
                            left: "33.9%", top: "19.1%", width: "31.8%", aspectRatio: "1 / 1",
                            animation: `fade-scale-in ${ENTRANCE_MS}ms cubic-bezier(0.16,1,0.3,1) ${T_LOGO}ms both`,
                        }}
                    >
                        <Image src="/assets/headerLogo.svg" alt="FilerNow.com" width={138} height={138} className="w-[42%] h-auto" />
                    </div>
                    {/* center logo — only this element's animation value changes; nothing else touched */}
                    <div
                        className="absolute rounded-full bg-background shadow-[0px_4px_16px_0px_rgba(200,16,46,0.25)] outline outline-1 outline-rose-100 grid place-items-center z-10"
                        style={{
                            left: "33.9%", top: "19.1%", width: "31.8%", aspectRatio: "1 / 1",
                            animation: `fade-scale-in ${ENTRANCE_MS}ms cubic-bezier(0.16,1,0.3,1) ${T_LOGO}ms both, orbit-ping 2.6s cubic-bezier(0.16,1,0.3,1) ${T_LOGO + ENTRANCE_MS}ms infinite`,
                        }}
                    >
                        <Image src="/assets/headerLogo.svg" alt="FilerNow.com" width={138} height={138} className="w-[42%] h-auto" />
                    </div>

                    {/* services capsules — 57px pill height, 44px badge (w-11/h-11), 10px inset (p-2.5) */}
                    {whatWeDoAboutItems.map((item) => {
                        const entranceDelay = T_CAPSULES_START + item.row * CASCADE_STEP_MS
                        const breatheDelay = entranceDelay + ENTRANCE_MS
                        return (
                            <div
                                key={item.id}
                                className="absolute flex items-center gap-2.5 bg-background rounded-full outline outline-1 outline-primary/10 p-2.5 z-20"
                                style={{
                                    left: `${item.left}%`,
                                    top: `${item.top}%`,
                                    width: `${item.width}px`,
                                    height: "57px",
                                    justifyContent: item.side === "left" ? "flex-end" : "flex-start",
                                    animation: `fade-scale-in ${ENTRANCE_MS}ms cubic-bezier(0.16,1,0.3,1) ${entranceDelay}ms both, capsule-breathe 2.6s ease-in-out ${breatheDelay}ms infinite`,
                                }}
                            >
                                {item.side === "left" && (
                                    <span className="para-base text-text-dark whitespace-nowrap">{item.label}</span>
                                )}
                                <span className="grid place-items-center w-11 h-11 rounded-full bg-primary text-white shrink-0">
                                    {item.icon}
                                </span>
                                {item.side === "right" && (
                                    <span className="para-base text-text-dark whitespace-nowrap">{item.label}</span>
                                )}
                            </div>
                        )
                    })}
                </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
                <div className="lg:hidden grid grid-cols-2 gap-3 mt-2">
                    {whatWeDoAboutItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-2 bg-background border border-border-clr rounded-brand-8 px-3 py-3">
                            <span className="grid place-items-center w-8 h-8 rounded-full bg-primary text-white shrink-0 icon-pulse"
                                style={{ animationDelay: `${item.row * CASCADE_STEP_MS}ms` }}>
                                {item.icon}
                            </span>
                            <span className="para-tiny font-semibold text-text-dark">{item.label}</span>
                        </div>
                    ))}
                </div>
            </RevealOnScroll>
        </SectionContainer>
    )
}

export default WhatWeDo