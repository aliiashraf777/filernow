import Button from "@/components/btns/Button"
import SectionContainer from "../section/SectionContainer"
import Image from "next/image"
import { FileBadge, Menu } from "lucide-react"
import { menuData } from "@/data/appData"
import Link from "next/link"

type Props = {}

const MenuBar = (props: Props) => {
    return (
        <SectionContainer
            sectionClass="bg-white"
            containerClass="py-1.5"
        >
            <div className="flex justify-between items-center">
                <Link
                    href={'/'}
                    className="hover:-translate-y-0.5 default-transition"
                >
                    <Image
                        src={'/assets/headerLogo.svg'}
                        alt="header_logo"
                        width={58}
                        height={58}
                        className="-ml-1"
                    />
                </Link>

                <div className="hidden md:flex items-center gap-9">
                    {
                        menuData.map((menu, idx) => (
                            <Link
                                key={menu.id}
                                href={menu.link}
                                className={`para-small text-text-secondary font-medium ${idx === 0 && "text-primary"} hover:text-primary`}
                            >
                                {menu.label}
                            </Link>
                        ))
                    }
                </div>

                <Button
                    className="hidden md:flex"
                >
                    Become a filer
                    <FileBadge
                        size={16}
                    />
                </Button>

                <Button
                    variant="primary-light"
                    className="border-transparent p-2 flex md:hidden"
                >
                    <Menu size={20} />
                </Button>
            </div>
        </SectionContainer>
    )
}

export default MenuBar