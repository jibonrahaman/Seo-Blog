import Container from "../Components/Container"
import Flex from "../Components/Flex"
import Heading from "../Components/Heading"
import HoverHiddenShoData from "../Components/HoverHiddenShoData"
import HoverUnderline from "../Components/HoverUnderline"
import ScaleImg from "../Components/ScaleImg"
export default function BlogerMixitup() {
  return (
    <section>
        <Container className=" mx-auto py-5">
         <Heading text="What's new at Bloger"/>
         <Flex className=" gap-x-8 py-10">
            <button className="px-8 cursor-pointer py-3 bg-white text-black rounded-lg shadow-shadow border">Search Engines</button>
            <button className="px-8 cursor-pointer py-3 bg-white text-black rounded-lg shadow-shadow border">Research</button>
            <button className="px-8 cursor-pointer py-3 bg-white text-black rounded-lg shadow-shadow border">Marketing</button>
            <button className="px-8 cursor-pointer py-3 bg-white text-black rounded-lg shadow-shadow border">Branding</button>
         </Flex>
         <Flex className=" gap-x-10 justify-between">

          <div className=" bg-[#f0f2f5]  group rounded-xl ">
          <div className=" p-10 flex flex-col w-[400px] items-center">
                <HoverHiddenShoData dataText="GADGETS"  text='GADGETS' />
                <HoverUnderline  className=" text-center group-hover:before:w-[300px]" text="Search improvements in Content Explorer" />
            </div>
            <div className=" relative overflow-hidden">
                <img className="w-full absolute top-0 left-0 z-10 block" src="https://new.axilthemes.com/demo/template/blogar/assets/images/icons/shape-01.png" alt="a" />
                <ScaleImg className=" w-full" src="https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/post-column-11.jpg" alt="mixi-1" />
            </div>
          </div>

         </Flex>
                 </Container>
    </section>
  )
}
