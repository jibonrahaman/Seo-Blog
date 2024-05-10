import React, { Children } from 'react'

export default function NavIconStyle({className,children}) {
  return (
    <div className={`p-2 bg-white rounded-full hover:bg-[#3858f6] hover:text-white duration-500 ${className}`}>
      {children}
    </div>
  )
}
