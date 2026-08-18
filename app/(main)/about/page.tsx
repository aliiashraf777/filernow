import AboutHero from "@/components/about/AboutHero"
import AboutHighlights from "@/components/about/AboutHighlights"
import WhatWeDo from "@/components/about/WhatWeDo"
import WhyChooseFilernow from "@/components/about/WhyChooseFilernow"
import BeforeFooter from "@/components/common/footer/BeforeFooter"
import { ArrowRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

type Props = {}

const About = (props: Props) => {
  return (
    <main className="min-h-[40vh]">
      <AboutHero
        infoBadgeLabel="Who we are"
        heading={<>We Are Professional<br /><span className="text-primary">Filing Team</span></>}
        description="FilerNow.com is Pakistan's trusted platform for online tax filing, NTN registration, and business compliance services. Our mission is to simplify tax and business processes by offering user-friendly, affordable, and digital solutions for individuals and businesses across Pakistan."
        ctas={[
          { label: "File Now", icon: <ArrowRight size={18} />, variant: "primary", href: "/become-filer" },
          { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white", href: "https://wa.me/923041110555", },
        ]}
        bottomRow={{
          type: "stats",
          items: [
            { to: 95, suffix: "%", label: "Transparency" },
            { to: 92, suffix: "%", label: "Commitment" },
            { to: 99, suffix: "%", label: "Clients Satisfaction" },
          ],
        }}
        aboutHeroImg="/assets/about/aboutHeroPerson.png"
        aboutHeroVisualClass="-mt-[20%] md:mt-0 hidden md:block"
      />

      <WhatWeDo />
      <AboutHighlights />
      <WhyChooseFilernow />
      <BeforeFooter />
    </main>
  )
}

export default About