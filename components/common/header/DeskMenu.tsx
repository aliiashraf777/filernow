"use client"
import { menuData } from '@/data/appData'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {}

const DeskMenu = (props: Props) => {
    const pathname = usePathname();
    return (
        <div className="hidden md:flex items-center gap-9">
            {
                menuData.map((menu, idx) => (
                    <Link
                        key={menu.id}
                        href={menu.link}
                        className={cn(
                            "para-small text-text-secondary font-medium hover:text-primary", pathname === menu.link && "text-primary"
                        )}
                    >
                        {menu.label}
                    </Link>
                ))
            }
        </div>
    )
}

export default DeskMenu