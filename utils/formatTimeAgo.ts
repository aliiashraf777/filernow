// Deliberately no date-fns/dayjs dependency for a single relative-time
// string — this is the entire feature. Computed at render time from an
// ISO date so it's always correct, never a stale cached "5 days ago".

const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["week", 60 * 60 * 24 * 7],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
]

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" })

export function formatTimeAgo(isoDate: string): string {
    const diffSeconds = (Date.now() - new Date(isoDate).getTime()) / 1000

    if (diffSeconds < 60) return "just now"

    for (const [unit, secondsInUnit] of UNITS) {
        const value = Math.floor(diffSeconds / secondsInUnit)
        if (value >= 1) return rtf.format(-value, unit)
    }

    return "just now"
}