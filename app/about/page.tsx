import AboutHero from "@/components/about/AboutHero"
import AboutHighlights from "@/components/about/AboutHighlights"
import WhatWeDo from "@/components/about/WhatWeDo"
import WhyChooseFilernow from "@/components/about/WhyChooseFilernow"

type Props = {}

const About = (props: Props) => {
  return (
    <main className="min-h-[40vh]">
      <AboutHero />
      <WhatWeDo />
      <AboutHighlights />
      <WhyChooseFilernow />
    </main>
  )
}

export default About