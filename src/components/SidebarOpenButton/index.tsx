import { useGlobalContext } from "@/context/global"

const SidebarToggleButton = () => { 

    // Context
    const {states,setStates} = useGlobalContext()
    const {menuState} = states

    // Events
    const handleToggleButtonClick = () => {

        const toggleState = menuState == 'closed' ? 'open' : 'closed'
        setStates( {...states, menuState : toggleState} )
    }

    return (
        <button 
        onClick={ () => handleToggleButtonClick() }
        className="btn-primary text-md fw-semi-bold text-center rounded-circle toggle-menu">{ menuState === 'closed' && "Open" || 'open' && "Close" }</button>
    )
}

export default SidebarToggleButton