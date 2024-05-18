
export default function HoverUnderline({text,className}) {
  return (
    // <h4 className= {`pt-3  font-semibold text-3xl text-black  duration-300 relative after:content-[''] after:bg-black after:absolute after:top-[46px] after:left-0 after:w-0 group-hover:after:w-[93%] group-hover:after:duration-300 after:h-[2px]  
    // before:content-[''] before:bg-black before:absolute before:top-20 before:left-0 before:w-0 group-hover:before:w-48 before:h-[2px] group-hover:before:duration-300  ${className}`}>{text}</h4>

    <h4 className= {`pt-3 hh  font-semibold text-3xl text-black group-hover:underline ${className}`}>{text}</h4>
  )
}


// export default function HoverUnderline({ text, className }) {
//   console.log(text);
//   let dataLength = text ? `${text.length}%` : 0;
//   console.log(dataLength);

//   return (
//     <h4 className={`pt-3 font-semibold text-3xl text-black duration-300 relative after:content-[''] after:bg-black after:absolute after:top-[46px] after:left-0 after:w-0 hover:after:w-${text ? `${text.length}%` : 0} group-hover:after:duration-300 after:h-[2px]  
//     before:content-[''] before:bg-black before:absolute before:top-20 before:left-0 before:w-0 group-hover:before:w-48 before:h-[2px] group-hover:before:duration-300 ${className}`}>
//       {text}
//     </h4>
//   );
// }













// import { useState } from "react";
// export default function HoverUnderline({ text, className }) {
//   const [Hover,setHover] = useState(false)
//   const widths = text.length * 7;
//   console.log(widths);
// const HanleMousehover = ()=>{
//   setHover(true)
// }
// const handleMouseLeave = ()=>{
//   setHover(false)
// }
//   return (
//    <div className="w-[300px]">
//     <div className={className} onMouseOver={HanleMousehover} onMouseLeave={handleMouseLeave} style={{position:"relative"}}>
//      <div style={{position:"absolute", top:"20px", left:"0",height:"2px", color:"black", width:`${Hover ? widths : 0}px`, background:"green", transition:'0.5s ease'}}> 
//     </div> 
//      {text}
//    </div>
//    </div>
//   );
// }



// https://new.axilthemes.com/demo/template/blogar/home-seo-blog.html?fbclid=IwZXh0bgNhZW0CMTAAAR1DUA1vpboxLA3H8K-7P5rMZGWZYHNjFYzrBiTVY3MatvGJ65eFmQU2ojw_aem_AdxvMSnbGfhBQ85pAIXAmgeovyCeme4BkAv1Go5jtuC3zQF_6feotlMIqDU-N3mOeI6R4bdS2honQN-mMC3FsZOE#