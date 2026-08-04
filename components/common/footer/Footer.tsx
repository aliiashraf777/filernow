import FooterMain from './FooterMain'
import FooterCopyright from './FooterCopyright'


type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="relative flex flex-col relative bg-background">
      <FooterMain />

      <FooterCopyright />
    </footer>
  )
}

export default Footer