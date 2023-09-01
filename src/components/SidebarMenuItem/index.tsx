import React from 'react'

type Props = React.PropsWithChildren & {}

const SidebarMenuItem = ({children} : Props) => {
  return (
    <button className='w-full btn-teal btn-pad text-md text-uppercase fw-semi-bold'>{children}</button>
  )
}

export default SidebarMenuItem