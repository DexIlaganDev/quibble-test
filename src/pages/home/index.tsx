import MainContent from "@/layouts/MainContent"
import Sidebar from "@/layouts/Sidebar"

import { useGlobalContext } from "@/context/global"

const HomePage = () => {

    // Global State
    const {states} = useGlobalContext()
    const {menuState, shiftState} = states

    return (
        <div className={`homepage ${menuState} ${shiftState}`}>
            <Sidebar />
            <MainContent />
        </div>
    )
}

export default HomePage