import { FiMessageCircle } from "react-icons/fi"
import SectionContainer from "../section/SectionContainer"

type Props = {}

const TopBar = (props: Props) => {
  return (
    <SectionContainer
      sectionClass="bg-text-dark"
    >
      <div className="w-full flex justify-between items-center text-white py-3">
        <div className="flex gap-2 items-center">
          <FiMessageCircle />
          Click here - WhatsApp
        </div>
      </div>
    </SectionContainer>
  )
}

export default TopBar