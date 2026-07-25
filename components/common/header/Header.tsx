import MenuBar from "./MenuBar"
import TopBar from "./TopBar"

type Props = {}

const Header = (props: Props) => {
    return (<>
        <TopBar />
        
        <MenuBar />
    </>)
}

export default Header