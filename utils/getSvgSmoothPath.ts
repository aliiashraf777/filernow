type Point = { x: number, y: number }

export function getSvgSmoothPath(points: Point[]): string {
    if (points.length < 2) return ""
    const at = (i: number) => points[Math.max(0, Math.min(points.length - 1, i))]

    let d = `M ${points[0].x},${points[0].y}`

    for (let i = 0; i < points.length - 1; i++) {
        const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2)
        const c1x = p1.x + (p2.x - p0.x) / 6
        const c1y = p1.y + (p2.y - p0.y) / 6
        const c2x = p2.x - (p3.x - p1.x) / 6
        const c2y = p2.y - (p3.y - p1.y) / 6
        d += ` C ${c1x},${c1y} ${c2x},${c2y} ${p2.x},${p2.y}`
    }

    return d
}