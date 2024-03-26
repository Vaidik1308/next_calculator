'use client'

import { CalculatorContextProvider } from "@/context"
import { ReactNode } from "react"

export const Providers = ({children}:{children:ReactNode}) => {
    return (
        <CalculatorContextProvider>
            {children}
        </CalculatorContextProvider>
    )
}