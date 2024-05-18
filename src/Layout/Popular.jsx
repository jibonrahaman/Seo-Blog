import { useState } from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import Heading from "../Components/Heading";
import ScaleImg from "../Components/ScaleImg";
import HoverHiddenShoData from "../Components/HoverHiddenShoData";
import HoverUnderline from "../Components/HoverUnderline";
import PopularMixi from "../Data/PopularMixi";

export default function Popular() {
  const [Datas,setDatas]  = useState(PopularMixi)
  const [Data,setData] = useState([])
  console.log(Data);
  const [activeBtn, setactiveBtn] = useState("Keyword");
  const handleClickMixi = (name) => {
    setactiveBtn(name)
  const filt = Datas.filter((item)=>{
    if(item.title === name){
      return item
    }
  })
  setData(filt)
  }
  return (
    <section className=" bg-[#f0f2f5]">
      <Container className=" mx-auto py-14">
        <Heading text="Most Popular" />
        <Flex className=" gap-x-8 py-10">
          <button onClick={() => handleClickMixi("Keyword")} className={`px-8 cursor-pointer py-3 bg-white text-black rounded-lg   ${activeBtn == "Keyword" ? "shadow-shadow" : "border border-gray-400"}`}>Keyword Research</button>
          <button onClick={() => handleClickMixi("Link")} className={`px-8 cursor-pointer py-3 bg-white text-black rounded-lg   ${activeBtn == "Link" ? "shadow-shadow" : "border border-gray-400 "}`}>Link Building</button>
          <button onClick={() => handleClickMixi("Website")} className={`px-8 cursor-pointer py-3 bg-white text-black rounded-lg   ${activeBtn == "Website" ? "shadow-shadow" : "border border-gray-400"}`}>Website Traffic</button>

        </Flex>

       {Data.map((item)=>{
        <div key={index}>

        </div>
       })}
      </Container>
    </section>
  )
}
