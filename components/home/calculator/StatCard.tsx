export const StatCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
    <div className="group rounded-brand-8 bg-background border border-border-clr/30 p-3 text-center">
        <span className="grid place-items-center w-9 h-9 rounded-brand-8 bg-primary/10 text-primary mx-auto mb-2 group-hover:scale-105 default-transition">
            {icon}
        </span>
        <p className="para-tiny text-text-secondary-muter">
            {label}
        </p>
        <p className="para-small font-bold text-text-dark">
            {value}
        </p>
    </div>
)