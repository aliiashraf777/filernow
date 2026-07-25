import { FiMessageCircle } from "react-icons/fi"
import SectionContainer from "../section/SectionContainer"
import { IoCallOutline, IoMailUnreadOutline } from "react-icons/io5"
import TopBarContactItem from "@/components/ui/TopBarContactItem"

type Props = {}

const TopBar = (props: Props) => {
  return (
    <SectionContainer
      sectionClass="bg-text-dark"
    >
      <div className="w-full flex justify-center md:justify-between items-center text-white py-3">
        <TopBarContactItem
          icon={<FiMessageCircle size={15} />}
          label="Click here - WhatsApp"
          href="https://wa.me/923041110555"
          openOnNewTab
        />

        <div className="hidden md:flex items-center gap-6">
          <TopBarContactItem
            icon={<IoMailUnreadOutline size={15} />}
            label="support@filernow.com"
            href="mailto:support@filernow.com"
          />
          <TopBarContactItem
            icon={<IoCallOutline size={15} />}
            label="0304 1110555"
            href="tel:+923041110555"
          />
        </div>
      </div>
    </SectionContainer>
  )
}

export default TopBar