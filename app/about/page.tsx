import AboutHero from "@/components/about/AboutHero"
import AboutHighlights from "@/components/about/AboutHighlights"
import WhatWeDo from "@/components/about/WhatWeDo"

type Props = {}

const About = (props: Props) => {
  return (
    <main className="min-h-[40vh]">
      <AboutHero />
      <WhatWeDo />
      <AboutHighlights />
    </main>
  )
}

export default About