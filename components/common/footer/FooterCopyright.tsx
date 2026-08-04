import SectionContainer from '../section/SectionContainer'
import TopBarContactItem from '@/components/ui-custom/TopBarContactItem'
import { FaUserShield } from 'react-icons/fa'
import { Handshake } from 'lucide-react'

type Props = {}

const FooterCopyright = (props: Props) => {
    return (
        <SectionContainer
            sectionClass='border-t border-border-clr text-text-muted'
            containerClass='py-6'
        >
            <div className="flex items-center justify-center md:justify-between">
                <p className="para-tiny">
                    © {new Date().getFullYear()} FilerNow. All Rights Reserved.

                </p>

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
            </div>
        </SectionContainer>
    )
}

export default FooterCopyright