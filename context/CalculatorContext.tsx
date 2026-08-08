"use client"
import { createContext, useContext, useMemo, useReducer, type PropsWithChildren } from "react"

type CalculatorStateTy = { isCalculatorOpen: boolean }

const calculatorInitialState: CalculatorStateTy = { isCalculatorOpen: false }

type CalculatorActionsU =
    | { type: 'OPEN_CALCULATOR' }
    | { type: 'CLOSE_CALCULATOR' }
    | { type: 'TOGGLE_CALCULATOR' }

const calculatorReducerFn = (state: CalculatorStateTy, action: CalculatorActionsU) => {
    switch (action.type) {
        case 'OPEN_CALCULATOR': return { ...state, isCalculatorOpen: true }
        case 'CLOSE_CALCULATOR': return { ...state, isCalculatorOpen: false }
        case 'TOGGLE_CALCULATOR': return { ...state, isCalculatorOpen: !state.isCalculatorOpen }
        default: return state
    }
}

type CalculatorContextValueTy = CalculatorStateTy & {
    openCalculator: () => void
    closeCalculator: () => void
    toggleCalculator: () => void
}

export const CalculatorContext = createContext<CalculatorContextValueTy | undefined>(undefined)

export const CalculatorContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(calculatorReducerFn, calculatorInitialState)

    const calculatorDispatchActions = useMemo(
        () => ({
            openCalculator: () => dispatch({ type: 'OPEN_CALCULATOR' }),
            closeCalculator: () => dispatch({ type: 'CLOSE_CALCULATOR' }),
            toggleCalculator: () => dispatch({ type: 'TOGGLE_CALCULATOR' }),
        }), []
    )

    const value = useMemo(() => ({ ...state, ...calculatorDispatchActions }), [state, calculatorDispatchActions])

    return (
        <CalculatorContext.Provider value={value}>
            {children}
        </CalculatorContext.Provider>
    )
}

export const useCalculatorContext = () => {
    const context = useContext(CalculatorContext)
    if (!context) throw new Error("useCalculatorContext must be used inside CalculatorContextProvider")
    return context
}