import SectionContainer from "@/components/common/section/SectionContainer"
import { ArrowRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import HeroTextbox from "../home/hero/HeroTextbox"
import AboutHeroVisual from "./AboutHeroVisual"

type Props = {}

const AboutHero = (props: Props) => {
  return (
    <SectionContainer containerClass="relative">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
        <HeroTextbox
          infoBadgeLabel="Who We Are"
          heading={<>We Are Professional<br /><span className="text-primary">Filing Team</span></>}
          description="FilerNow.com is Pakistan's trusted platform for online tax filing, NTN registration, and business compliance services. Our mission is to simplify tax and business processes by offering user-friendly, affordable, and digital solutions for individuals and businesses across Pakistan."
          ctas={[
            { label: "File Now", icon: <ArrowRight size={18} />, variant: "primary" },
            { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white" },
          ]}
          bottomRow={{
            type: "stats",
            items: [
              { to: 95, suffix: "%", label: "Transparency" },
              { to: 92, suffix: "%", label: "Commitment" },
              { to: 99, suffix: "%", label: "Clients Satisfaction" },
            ],
          }}
        />

        <AboutHeroVisual />
      </div>

    </SectionContainer>
  )
}

export default AboutHero