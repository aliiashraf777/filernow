// hooks/useBodyScrollLock.ts
"use client"

import { useEffect } from "react"

let lockCount = 0

export function useBodyScrollLock(isLocked: boolean) {
    useEffect(() => {
        if (!isLocked) return

        lockCount += 1
        if (lockCount === 1) {
            document.body.style.overflow = "hidden"
        }

        return () => {
            lockCount -= 1
            if (lockCount === 0) {
                document.body.style.overflow = ""
            }
        }
    }, [isLocked])
}