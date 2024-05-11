
export default function HoverUnderline({text,className}) {
  return (
    <h4 className= {`pt-3   font-semibold text-3xl text-black  duration-300 relative after:content-[''] after:bg-black after:absolute after:top-[46px] after:left-0 after:w-0 group-hover:after:w-[93%] group-hover:after:duration-300 after:h-[2px]  
    before:content-[''] before:bg-black before:absolute before:top-20 before:left-0 before:w-0 group-hover:before:w-48 before:h-[2px] group-hover:before:duration-300  ${className}`}>{text}</h4>
  )
}
