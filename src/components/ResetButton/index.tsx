import { useGlobalContext } from "@/context/global"

const ResetButton = () => {

    // Context
    const {states,setStates} = useGlobalContext()

    // Events
    const handleResetClick = () => {
        setStates( {...states, shiftState : 'default'} )
    }

    return (
        <button 
        onClick={ () => handleResetClick() }
        className="reset-btn btn-primary text-uppercase text-center fw-semi-bold btn-min-w">Reset</button>
    )
}

export default ResetButton