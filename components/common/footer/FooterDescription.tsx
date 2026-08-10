"use client"

import { AnchorBtn } from '@/components/common/btns/Button';
import { footerSocialLinks } from '@/data/appData';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

const FooterDescription = (props: Props) => {
    return (
        <div className="flex flex-col gap-5">
            <Link
                href={'/'}
            >
                <Image
                    src={'/assets/headerLogo.svg'}
                    alt='footerLogo'
                    width={58}
                    height={58}
                    className='hover:-translate-y-0.5 default-transition'
                />
            </Link>

            <p className="para-small text-text-secondary-muted leading-[22.7px]">
                File your taxes the smart way with FilerNow. From
                NTN registration to company setup, tax returns and
                business compliance we make the process fast,
                easy and reliable. Grow as a filer and enjoy all the
                benefits you deserve.
            </p>

            <div className="flex gap-3">
                {footerSocialLinks.map((social) => (
                    <AnchorBtn
                        key={social.id}
                        href={social.link}
                        icon={social.icon}
                        variant='primary-light'
                        className='border-transparent p-2.5 hover:-translate-y-0.5'
                    />
                ))}
            </div>
        </div>
    )
}

export default FooterDescription