import React from 'react'
import { IGlobalState } from '@/types/global-state'

const useGlobalHook = () => {

    const [globalState, setGlobalState] = React.useState<IGlobalState>({
        menuState : 'closed',
        shiftState : 'default'
    })


    return {globalState,setGlobalState}
}

export default useGlobalHook