import React from 'react'

type Props = React.PropsWithChildren & {}

const SidebarMenuWrapper = ({children}: Props) => {
    return (
        <div className='sidebar-menu-wrapper'>
            {children}
        </div>
    )
}

export default SidebarMenuWrapper