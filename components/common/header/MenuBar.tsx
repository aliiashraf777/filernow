import Button from "@/components/btns/Button"
import SectionContainer from "../section/SectionContainer"
import Image from "next/image"
import { FileBadge, Menu } from "lucide-react"
import Link from "next/link"
import DeskMenu from "./DeskMenu"

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
                        priority
                        className="-ml-1"
                    />
                </Link>

                <DeskMenu />

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