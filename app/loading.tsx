import Loader from "@/components/ui-custom/Loader"

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-background">
            <Loader size={96} label="Loading FilerNow" />
        </div>
    )
}