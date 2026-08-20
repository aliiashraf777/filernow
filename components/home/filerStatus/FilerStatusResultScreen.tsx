// components/home/filerStatus/FilerStatusResultScreen

"use client"

import { AlertTriangle, CheckCircle2, XCircle, type LucideIcon } from "lucide-react"
import type { FilerCheckResponseTy, FilerStatusTy } from "@/lib/types/filerStatus/types"
import { cn } from "@/utils/cn"
import { pickMatchedBusiness } from "@/lib/api/filerStatus"
import { useState } from "react"

type StatusConfig = {
    icon: LucideIcon
    tone: string
    bg: string
    border: string
    badgeBg: string
    label: string
    title: string
}

// struck_off / not_active stay defined but are unreachable until backend
// exposes a status column — see lib/types/filerStatus/types.ts.
const STATUS_CONFIG: Record<FilerStatusTy, StatusConfig> = {
    active: {
        icon: CheckCircle2, tone: "text-secondary", bg: "bg-secondary/5", border: "border-secondary/20",
        badgeBg: "bg-secondary/15", label: "Active Taxpayer", title: "Status result ready",
    },
    struck_off: {
        icon: AlertTriangle, tone: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200",
        badgeBg: "bg-amber-100", label: "Struck Off", title: "Status result ready",
    },
    not_active: {
        icon: AlertTriangle, tone: "text-primary", bg: "bg-primary/5", border: "border-primary/20",
        badgeBg: "bg-primary/10", label: "Non-Active Taxpayer", title: "Status result ready",
    },
    not_found: {
        icon: XCircle, tone: "text-primary", bg: "bg-primary/5", border: "border-primary/20",
        badgeBg: "bg-primary/10", label: "Not Registered", title: "No record found",
    },
}

export const FilerStatusResultScreen = ({
    result,
    onCheckAnother,
}: {
    result: FilerCheckResponseTy
    onCheckAnother: () => void
}) => {
    const config = STATUS_CONFIG[result.status]
    const Icon = config.icon;

    const { record, queriedValue } = result
    const { primary: matchedBusiness, matchedIndex } = record
        ? pickMatchedBusiness(record, queriedValue)
        : { primary: undefined, matchedIndex: -1 }
    const otherBusinesses = record ? record.businessNames.filter((_, i) => i !== matchedIndex) : []
    const [showAllBusinesses, setShowAllBusinesses] = useState(false)

    return (
        <div className="flex flex-col items-center gap-4 text-center">
            <span className={cn("grid place-items-center w-16 h-16 rounded-full", config.bg, config.tone)}>
                <Icon size={32} />
            </span>

            <h3 className="heading-h4 font-bold text-text-dark">{config.title}</h3>

            <div className={cn("w-full rounded-brand-16 border p-5 text-left flex flex-col gap-3", config.bg, config.border)}>
                <div className="flex items-center justify-between gap-3">
                    <p className="para-small text-text-secondary">Status</p>
                    <span className={cn("para-small font-bold px-3 py-1 rounded-full", config.badgeBg, config.tone)}>
                        {config.label}
                    </span>
                </div>

                {result.record?.name && <ResultRow label="Name" value={result.record.name} />}
                <ResultRow label="ID Card" value={result.record?.taxpayerId ?? result.queriedValue} />
                {/* {result.record && result.record.businessNames.length > 0 && (
                    <ResultRow label="Business Name" value={result.record.businessNames[0]} />
                )} */}

                {matchedBusiness && (
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between gap-3">
                            <p className="para-small text-text-secondary">Business Name</p>
                            <p className="para-small font-bold text-text-dark text-right">{matchedBusiness}</p>
                        </div>
                        {otherBusinesses.length > 0 && (
                            <button
                                type="button"
                                onClick={() => setShowAllBusinesses((v) => !v)}
                                className="self-end para-tiny font-medium text-primary"
                            >
                                {showAllBusinesses ? "Hide" : `View all (${record!.businessNames.length}) businesses`}
                            </button>
                        )}
                        {showAllBusinesses && (
                            <ul className="flex flex-col gap-1 pt-1">
                                {otherBusinesses.map((b) => (
                                    <li
                                        key={b}
                                        className="para-tiny text-text-secondary text-right">
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>

            {/* <p className="para-small text-text-secondary">
                Preview result only. Connect an approved FBR data service to return live taxpayer records.
            </p> */}

            <button type="button" onClick={onCheckAnother} className="para-small font-bold text-primary hover:underline">
                Check another ID
            </button>
        </div>
    )
}

const ResultRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-center justify-between gap-3">
        <p className="para-small text-text-secondary">{label}</p>
        <p className="para-small font-bold text-text-dark">{value}</p>
    </div>
)