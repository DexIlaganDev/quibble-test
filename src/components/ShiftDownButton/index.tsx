import { useGlobalContext } from "@/context/global"

const ShiftDownButton = () => {

    // Context
    const {states,setStates} = useGlobalContext()

    // Events
    const handleShiftDownClick = () => {
        setStates( {...states, shiftState : 'down'} )
    }

    return (
        <button 
        onClick={ () => handleShiftDownClick() }
        className="btn-primary text-uppercase text-center fw-semi-bold btn-min-w">Shift Down</button>
    )
}

export default ShiftDownButton