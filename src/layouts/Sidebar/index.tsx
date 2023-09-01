import SidebarMenuItem from "@/components/SidebarMenuItem"
import SidebarMenuWrapper from "@/components/SidebarMenuWrapper"
import SidebarToggleButton from "@/components/SidebarOpenButton"
import { useGlobalContext } from "@/context/global"


const MenuItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
]

const Sidebar = () => {

    const {states} = useGlobalContext()

    return (
        <nav className="sidebar bg-light-gray">
            {
                JSON.stringify(states)
            }
            <SidebarToggleButton />

            <SidebarMenuWrapper>
                {
                    MenuItems.map( item => <SidebarMenuItem key={item}>{item}</SidebarMenuItem> )
                }
                
            </SidebarMenuWrapper>
        </nav>
    )
}

export default Sidebar