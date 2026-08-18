import SectionContainer from "@/components/common/section/SectionContainer"
import HeroTextbox from "../home/hero/HeroTextbox"
import AboutHeroVisual from "./AboutHeroVisual"
import { BreadcrumbItem } from "../ui-custom/Breadcrumb"
import { HeroBottomRow, HeroCtaItem } from "@/lib/types/hero/types"

type Props = {
  sectionClass?: string,
  paddingClass?: string,
  containerClass?: string,
  bgImage?: React.ReactNode,
  backgroundGradient?: string,

  breadcrumbItems?: BreadcrumbItem[],
  infoBadgeLabel: string,
  heading: React.ReactNode,
  description: string,
  ctas?: HeroCtaItem[],
  bottomRow?: HeroBottomRow,
  className?: string,
  headingClassName?: string,
  aboutHeroImg: string,
  redBlobHidden?: boolean,
  aboutHeroVisualClass?: string,
}

const AboutHero = ({ sectionClass, paddingClass, containerClass, bgImage, backgroundGradient, breadcrumbItems, infoBadgeLabel, heading, description, ctas, bottomRow, className, headingClassName, aboutHeroImg, redBlobHidden, aboutHeroVisualClass }: Props) => {
  return (
    <SectionContainer
      sectionClass={sectionClass}
      paddingClass={paddingClass}
      containerClass="relative"
      bgImage={bgImage}
      backgroundGradient={backgroundGradient}
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
        <HeroTextbox
          breadcrumbItems={breadcrumbItems}
          infoBadgeLabel={infoBadgeLabel}
          heading={heading}
          description={description}
          ctas={ctas}
          bottomRow={bottomRow}
          className={className}
          headingClassName={headingClassName}
        />

        <AboutHeroVisual
          aboutHeroImg={aboutHeroImg}
          redBlobHidden={redBlobHidden}
          aboutHeroVisualClass={aboutHeroVisualClass}
        />
      </div>

    </SectionContainer>
  )
}

export default AboutHero