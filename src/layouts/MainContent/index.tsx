import Instructions from '@/components/Instructions'
import ResetButton from '@/components/ResetButton'
import ShiftDownButton from '@/components/ShiftDownButton'
import ShiftUpButton from '@/components/ShiftUpButton'

const MainContent = () => {
    return (
        <div className="main-content bg-azure">
            <ResetButton />
            <Instructions />

            <div className="shift-buttons-wrapper">
                <ShiftUpButton />
                <ShiftDownButton />
            </div>
        </div>
    )
}

export default MainContent