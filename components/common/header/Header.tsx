import SectionContainer from "../section/SectionContainer"
import TopBar from "./TopBar"

type Props = {}

const Header = (props: Props) => {
    return (<>
        <TopBar />
        
        <SectionContainer>
            Header
        </SectionContainer>
    </>)
}

export default Header