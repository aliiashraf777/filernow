import { cn } from "@/utils/cn"

type Props = {
    icon?: React.ReactNode,
    heading: string,
    description: string,
    align?: 'left' | 'center',
    className?: string,
}

const IconTextBlock = ({ icon, heading, description, align = 'left', className }: Props) => {
    return (
        <div className={cn(
            "group flex flex-col gap-2.5 default-transition",
            align === 'center' ? "items-center text-center" : "items-start text-left",
            className,
        )}>
            {icon && (
                <span className="flex items-center justify-center w-[44px] h-[44px] rounded-brand-12 bg-primary-lighter text-primary default-transition group-hover:scale-110 group-hover:-rotate-6">
                    {icon}
                </span>
            )}

            <h3 className="heading-h4 font-bold text-text-dark">
                {heading}
            </h3>

            <p className={cn(
                "para-small text-text-secondary-muted leading-[22.75px]",
                align === 'center' ? "max-w-[220px]" : "max-w-[380px]",
            )}>
                {description}
            </p>
        </div>
    )
}

export default IconTextBlock