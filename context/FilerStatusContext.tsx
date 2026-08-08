// context/FilerStatusContext.tsx
"use client"
import { createContext, useContext, useMemo, useReducer, type PropsWithChildren } from "react"

type FilerStatusStateTy = { isFilerStatusOpen: boolean }
const filerStatusInitialState: FilerStatusStateTy = { isFilerStatusOpen: false }

type FilerStatusActionsU =
    | { type: 'OPEN_FILER_STATUS' }
    | { type: 'CLOSE_FILER_STATUS' }

const filerStatusReducerFn = (state: FilerStatusStateTy, action: FilerStatusActionsU) => {
    switch (action.type) {
        case 'OPEN_FILER_STATUS': return { ...state, isFilerStatusOpen: true }
        case 'CLOSE_FILER_STATUS': return { ...state, isFilerStatusOpen: false }
        default: return state
    }
}

type FilerStatusContextValueTy = FilerStatusStateTy & {
    openFilerStatus: () => void
    closeFilerStatus: () => void
}

export const FilerStatusContext = createContext<FilerStatusContextValueTy | undefined>(undefined)

export const FilerStatusContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(filerStatusReducerFn, filerStatusInitialState)

    const actions = useMemo(() => ({
        openFilerStatus: () => dispatch({ type: 'OPEN_FILER_STATUS' }),
        closeFilerStatus: () => dispatch({ type: 'CLOSE_FILER_STATUS' }),
    }), [])

    const value = useMemo(() => ({ ...state, ...actions }), [state, actions])

    return (
        <FilerStatusContext.Provider value={value}>
            {children}
        </FilerStatusContext.Provider>
    )
}

export const useFilerStatusContext = () => {
    const ctx = useContext(FilerStatusContext)
    if (!ctx) throw new Error("useFilerStatusContext must be used inside FilerStatusContextProvider")
    return ctx
}