import React from 'react'

export default function HoverHiddenShoData({dataText,text,className}) {
  return (
    <h5 data-text={`${dataText}`} className={`relative name overflow-hidden cursor-pointer text-lg text-black h-6 ${className}`}>{text}</h5>
  )
}
