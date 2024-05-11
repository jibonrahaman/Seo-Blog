import React from 'react'

export default function ScaleImg({className,src,alt}) {
  return (
<img className={`rounded-lg group-hover:scale-110 duration-300 ${className}`} src={src} alt={alt} />
  )
}
