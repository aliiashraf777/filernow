// components/auth/PasswordStrengthMeter.tsx
const RULES = [
    { label: "At least 10 characters long.", test: (p: string) => p.length >= 10 },
    { label: "At least one uppercase letter.", test: (p: string) => /[A-Z]/.test(p) },
    { label: "At least one digit.", test: (p: string) => /[0-9]/.test(p) },
    { label: "At least one special character.", test: (p: string) => /[^A-Za-z0-9]/.test(p) },
];

export function PasswordStrengthMeter({ password }: { password: string }) {
    const passed = RULES.filter((r) => r.test(password ?? "")).length;
    const strength = passed === 0 ? 0 : (passed / RULES.length) * 100;
    const label = passed <= 1 ? "Weak" : passed <= 3 ? "Medium" : "Strong";

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
                <div className="h-1.5 flex-1 rounded-full bg-gray-200">
                    <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${strength}%` }}
                    />
                </div>
                <span className="text-sm text-gray-500">{label}</span>
            </div>
            
            <ul className="flex flex-col gap-1.5">
                {RULES.map((rule) => {
                    const ok = rule.test(password ?? "");
                    return (
                        <li key={rule.label} className="flex items-center gap-2 text-sm">
                            <span
                                className={`flex h-4 w-4 items-center justify-center rounded-sm text-[10px] text-white ${ok ? "bg-primary" : "bg-gray-300"
                                    }`}
                            >
                                ✓
                            </span>
                            <span className={ok ? "text-text-dark" : "text-gray-400"}>{rule.label}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}