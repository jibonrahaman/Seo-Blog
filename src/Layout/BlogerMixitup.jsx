import Container from "../Components/Container"
import Flex from "../Components/Flex"
import Heading from "../Components/Heading"
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
                 </Container>
    </section>
  )
}
