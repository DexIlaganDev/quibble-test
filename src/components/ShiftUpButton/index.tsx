import { useGlobalContext } from "@/context/global"

const ShiftUpButton = () => {

    // Context
    const {states,setStates} = useGlobalContext()

    // Events
    const handleShiftUpClick = () => {
        setStates( {...states, shiftState : 'up'} )
    }

    return (
        <button 
        onClick={ () => handleShiftUpClick() }
        className="btn-primary text-uppercase text-center fw-semi-bold btn-min-w">Shift Up</button>
    )
}

export default ShiftUpButton