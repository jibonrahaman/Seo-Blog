import { useState } from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import Heading from "../Components/Heading";
import ScaleImg from "../Components/ScaleImg";
import HoverHiddenShoData from "../Components/HoverHiddenShoData";
import HoverUnderline from "../Components/HoverUnderline";
import PopularMixi from "../Data/PopularMixi";

export default function Popular() {
  const [Datas, setDatas] = useState(PopularMixi)
  const [Data, setData] = useState([])
  console.log(Data);
  const [activeBtn, setactiveBtn] = useState("Keyword");
  const handleClickMixi = (name) => {
    setactiveBtn(name)
    const filt = Datas.filter((item) => {
      if (item.title === name) {
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

        {
        Data.map((item, index) => {
           const {test,dataText,underline,img,test2,dataText2,underline2,img2,test3,dataText3,underline3,img3} = item
          return <div key={index}>
            <Flex className=" gap-x-24">
              <div>
                <div className=" group relative">
                  <div className="overflow-hidden">
                    <ScaleImg src={img} alt={img} />
                  </div>
                  <div className=" bg-white w-[400px] absolute top-[190px] left-10 rounded-xl px-11 py-5">
                    <HoverHiddenShoData dataText={dataText} text={test} />
                    <HoverUnderline text="How to create white papers that convert" />
                  </div>
                </div>
                <div className=" group relative mt-20">
                  <div className="overflow-hidden">
                    <ScaleImg src={img2} alt={img2} />
                  </div>
                  <div className=" bg-white w-[400px] absolute top-[190px] left-10 rounded-xl px-11 py-5">
                    <HoverHiddenShoData dataText={dataText2} text={test2} />
                    <HoverUnderline text="Building agility with technology and talent" />
                  </div>
                </div>
              </div>

              <div className=" group   relative ">
                <div className="overflow-hidden">
                  <ScaleImg src={img3} alt="mixi-1" />
                </div>
                <div className=" bg-white w-[550px] absolute bottom-[-35px] left-20 rounded-xl px-14 py-5">
                  <HoverHiddenShoData dataText={dataText3} text={test3} />
                  <HoverUnderline className="py-3" text="A five-step framework for effective keyword targeting" />
                  <div className="flex gap-x-3 pt-3">
                    <img className=" w-30 rounded-full" src="https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/author/author-image-2.png" alt="" />
                    <div>
                      <HoverHiddenShoData dataText="Rahabi Khan" text="Rahabi Khan" />
                      <p>Feb 17, 2019 300k Views</p>
                    </div>
                  </div>
                </div>
              </div>
            </Flex>
          </div>
        })}
      </Container>
    </section>
  )
}
