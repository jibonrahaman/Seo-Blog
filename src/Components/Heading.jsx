import React from 'react'

export default function Heading({className,text}) {
  return (
    <h2 className={`text-3xl font-semibold ${className}`}>{text}</h2>
  )
}
