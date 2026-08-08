import SectionContainer from '../section/SectionContainer'
import TopBarContactItem from '@/components/ui-custom/TopBarContactItem'
import { FaUserShield } from 'react-icons/fa'
import { Handshake } from 'lucide-react'
import RevealOnScroll from '@/components/ui-custom/RevealOnScroll'

type Props = {}

const FooterCopyright = (props: Props) => {
    return (
        <SectionContainer
            sectionClass='border-t border-border-clr text-text-muted'
            containerClass='py-6'
        >
            <div className="flex items-center justify-center md:justify-between">

                <RevealOnScroll delay={100}>
                    <p className="para-tiny">
                        © {new Date().getFullYear()} FilerNow. All Rights Reserved. Powered by Webtery

                    </p>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <div className="hidden md:flex items-center gap-6">
                        <TopBarContactItem
                            href='/privacy-policy'
                            icon={<FaUserShield size={15} />}
                            label='Privacy Policy'
                            anchorClass='text-text-muted'
                        />

                        <TopBarContactItem
                            href='/terms-conditions'
                            icon={<Handshake size={15} />}
                            label='Terms & Conditions'
                            anchorClass='text-text-muted'
                        />
                    </div>
                </RevealOnScroll>
            </div>
        </SectionContainer>
    )
}

export default FooterCopyright