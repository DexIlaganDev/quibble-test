import React from 'react'
// ** Types
import { IGlobalStateHook } from '@/types/global-state'

export const GlobalContext = React.createContext<IGlobalStateHook | undefined>(undefined)

export const useGlobalContext = () => {
    const globalStateContext = React.useContext(GlobalContext)

    if( globalStateContext == undefined ) {
        throw new Error("must be used within a global context")
    }

    return globalStateContext

}