export interface IGlobalState {
    menuState : 'closed' | 'open'
    shiftState : 'up' | 'down' | 'default'
}

export interface IGlobalStateHook {
    states : IGlobalState
    setStates : React.Dispatch<React.SetStateAction<IGlobalState>>
}