import MainContent from "@/layouts/MainContent"
import Sidebar from "@/layouts/Sidebar"

const HomePage = () => {
    return (
        <div className="homepage">
            <Sidebar />
            <MainContent />
        </div>
    )
}

export default HomePage