import { useState } from "react"
import Container from "../Components/Container"
import Flex from "../Components/Flex"
import Heading from "../Components/Heading"
import HoverHiddenShoData from "../Components/HoverHiddenShoData"
import HoverUnderline from "../Components/HoverUnderline"
import ScaleImg from "../Components/ScaleImg"
import BlogerMixi from "../Data/Blogmixi"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function BlogerMixitup() {
    const [Datas,setDatas] = useState(BlogerMixi)
    const [Data,setData] = useState([])
   
    const handleClickMixi = (name)=>{
      const filt =  Datas.filter((item)=>{
            if(item.title === name){
               return item
            }
        })
        setData(filt)    
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    return (
    <section>
        <Container className=" mx-auto py-5">
         <Heading text="What's new at Bloger"/>
         <Flex className=" gap-x-8 py-10">
            <button onClick={()=>handleClickMixi("Search")} className="px-8 cursor-pointer py-3 bg-white text-black rounded-lg shadow-shadow border">Search Engines</button>
            <button onClick={()=>handleClickMixi("Research")} className="px-8 cursor-pointer py-3 bg-white text-black rounded-lg shadow-shadow border">Research</button>
            <button onClick={()=>handleClickMixi("Marketing")} className="px-8 cursor-pointer py-3 bg-white text-black rounded-lg shadow-shadow border">Marketing</button>
            <button onClick={()=>handleClickMixi("Branding")} className="px-8 cursor-pointer py-3 bg-white text-black rounded-lg shadow-shadow border">Branding</button>
         </Flex>
        
        
         <Slider {...settings}>
         <div >
         <div className="w-[400px] bg-[#f0f2f5]  group rounded-xl ">
          <div className=" p-10 flex flex-col w-[400px] items-center">
                <HoverHiddenShoData dataText="GADGETS"  text='GADGETS' />
                <HoverUnderline  className=" text-center group-hover:before:w-[300px]" text="Search improvements in Content Explorer" />
            </div>
            <div className=" relative overflow-hidden">
                <img className="w-full absolute top-0 left-0 z-10 block" src="https://new.axilthemes.com/demo/template/blogar/assets/images/icons/shape-01.png" alt="a" />
                <ScaleImg className=" w-full" src="https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/post-column-11.jpg" alt="mixi-1" />
            </div>
          </div>
         </div>
          <div >
         <div className="mx-3 w-[400px] bg-[#f0f2f5]  group rounded-xl ">
          <div className=" p-10 flex flex-col w-[400px] items-center">
                <HoverHiddenShoData dataText="GADGETS"  text='GADGETS' />
                <HoverUnderline  className=" text-center group-hover:before:w-[300px]" text="Search improvements in Content Explorer" />
            </div>
            <div className=" relative overflow-hidden">
                <img className="w-full absolute top-0 left-0 z-10 block" src="https://new.axilthemes.com/demo/template/blogar/assets/images/icons/shape-01.png" alt="a" />
                <ScaleImg className=" w-full" src="https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/post-column-11.jpg" alt="mixi-1" />
            </div>
          </div>
         </div>
          <div >
         <div className="mx-3 w-[400px] bg-[#f0f2f5]  group rounded-xl ">
          <div className=" p-10 flex flex-col w-[400px] items-center">
                <HoverHiddenShoData dataText="GADGETS"  text='GADGETS' />
                <HoverUnderline  className=" text-center group-hover:before:w-[300px]" text="Search improvements in Content Explorer" />
            </div>
            <div className=" relative overflow-hidden">
                <img className="w-full absolute top-0 left-0 z-10 block" src="https://new.axilthemes.com/demo/template/blogar/assets/images/icons/shape-01.png" alt="a" />
                <ScaleImg className=" w-full" src="https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/post-column-11.jpg" alt="mixi-1" />
            </div>
          </div>
         </div>
       </Slider>
        
        
                 </Container>
    </section>
  )
}
