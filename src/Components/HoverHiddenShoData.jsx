import React from 'react'

export default function HoverHiddenShoData({dataText,text,className}) {
  return (
    <h5 data-text={`${dataText}`} className={`relative text-sm name overflow-hidden cursor-pointer text-black h-6 ${className}`}>{text}</h5>
  )
}
