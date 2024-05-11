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
import PrevArrow from "../Components/PrevArrow"
import NextArrow from "../Components/NextArrow"

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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:  <PrevArrow/> ,
        nextArrow : <NextArrow/> ,
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
         {
            Data.length ?

           (
            Data.map((item,index)=>{                
                const {test,dataText,underline,img} = item
               return <div  className="">
                <div key={index}  className="w-[400px] bg-[#f0f2f5]  group rounded-xl ">
              <div className=" p-10 flex flex-col w-[400px] items-center">
                <HoverHiddenShoData dataText={dataText}  text={test} />
                <HoverUnderline  className={underline} />
            </div>
            <div className=" relative overflow-hidden">
                <img className="w-full absolute top-0 left-0 z-10 block" src="https://new.axilthemes.com/demo/template/blogar/assets/images/icons/shape-01.png" alt="a" />
                <ScaleImg className=" w-full" src={img} alt="mixi-1" />
            </div>
          </div>
               </div>
            })
           )
           :
           (
            Datas.map((item,index)=>{                
                const {test,dataText,underline,img} = item
              if(item.title === "Search"){
                return <div key={index} >
                <div  className="w-[400px] bg-[#f0f2f5]  group rounded-xl ">
              <div className=" p-10 flex flex-col w-[400px] items-center">
                <HoverHiddenShoData dataText={dataText}  text={test} />
                <HoverUnderline  className={underline} />
            </div>
            <div className=" relative overflow-hidden">
                <img className="w-full absolute top-0 left-0 z-10 block" src="https://new.axilthemes.com/demo/template/blogar/assets/images/icons/shape-01.png" alt="a" />
                <ScaleImg className=" w-full" src={img} alt="mixi-1" />
            </div>
          </div>
               </div>
              }
            })
           )
         }
        
       </Slider>
        
        
                 </Container>
    </section>
  )
}
