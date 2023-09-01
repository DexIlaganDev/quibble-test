import SidebarMenuItem from "@/components/SidebarMenuItem"
import SidebarMenuWrapper from "@/components/SidebarMenuWrapper"
import SidebarToggleButton from "@/components/SidebarOpenButton"

const MenuItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
]

const Sidebar = () => {
    return (
        <nav className="sidebar bg-light-gray">
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