
export default function Container({className,children}) {
  return (
    <div className={`max-w-container ${className}`}>{children}</div>
  )
}
