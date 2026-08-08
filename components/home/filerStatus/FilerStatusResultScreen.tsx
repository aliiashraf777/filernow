import { FilerCheckResponseTy } from "@/lib/types/filerStatus/types"
import { cn } from "@/utils/cn"
import { CheckCircle2, HelpCircle, XCircle } from "lucide-react"

export const FilerStatusResultScreen = ({
    result,
    onCheckAnother,
}: {
    result: FilerCheckResponseTy
    onCheckAnother: () => void
}) => {
    const isActive = result.status === "active"
    const isNotFound = result.status === "not_found"

    const config = isActive
        ? { icon: CheckCircle2, tone: "text-secondary", bg: "bg-secondary/10", label: "Active Taxpayer" }
        : isNotFound
            ? { icon: HelpCircle, tone: "text-text-secondary", bg: "bg-border-clr/20", label: "Not Found in ATL" }
            : { icon: XCircle, tone: "text-primary", bg: "bg-primary/10", label: "Not Active" }

    const Icon = config.icon

    return (
        <div className="flex flex-col items-center gap-4 text-center">
            <span className={cn("grid place-items-center w-16 h-16 rounded-full", config.bg, config.tone)}>
                <Icon size={32} />
            </span>

            <h3 className="heading-h4 font-bold text-text-dark">
                {isNotFound ? "No matching record" : "Status result ready"}
            </h3>

            <div className={cn("w-full rounded-brand-16 border p-5 text-left", config.bg, "border-transparent")}>
                <p className={cn("para-small font-medium", config.tone)}>Filer status</p>
                <p className={cn("heading-h3 font-extrabold mt-1", config.tone)}>{config.label}</p>
                <p className={cn("para-small mt-1.5 opacity-80", config.tone)}>
                    CNIC / NTN ending in {result.lastFour}
                </p>
            </div>

            <p className="para-small text-text-secondary">
                Preview result only. Connect an approved FBR data service to return live taxpayer records.
            </p>

            <button
                type="button"
                onClick={onCheckAnother}
                className="para-small font-bold text-primary hover:underline"
            >
                Check another ID
            </button>
        </div>
    )
}