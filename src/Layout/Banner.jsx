import {Card, CardBody, CardFooter,Typography,Button,} from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import "../App.css"
import HoverUnderline from "../Components/HoverUnderline";
import HoverHiddenShoData from "../Components/HoverHiddenShoData";
import Flex from '../Components/Flex'
import ScaleImg from "../Components/ScaleImg";
import BannerRightPart from "../Components/BannerRightPart";
import Container from "../Components/Container";

export default function Banner() {
  return (
    <section className="bg-[#f0f2f5]">
      <Container className=" max-w-container mx-auto py-24">
       <Flex className=" gap-x-8">
        {/* left side design section  */}
       <div className=" relative w-[50%] group">
          <div className="overflow-hidden rounded-lg">
            <ScaleImg src="https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/post-seo-grid-01.jpg" alt="banner"/>
          </div>
          <Card className="mt-6 w-[580px] pb-5 absolute top-[60%] left-14 ">
            <CardBody>
              <HoverHiddenShoData dataText="RESEARCH" text="RESEARCH" />
              <HoverUnderline text="How to write a title with an optimal width for SEO" />
            </CardBody>
            <CardFooter className="pt-0">
              <div className=" flex items-center justify-between ">
                <div className="flex gap-x-3">
                  <img className=" w-30 rounded-full" src="https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/author/author-image-2.png" alt="" />
                  <div>
                    <HoverHiddenShoData dataText="Rahabi Khan" text="Rahabi Khan" />
                    <p>Feb 17, 2019 300k Views</p>
                  </div>
                </div>
                <div className=" flex gap-x-4 ">
                  <FaFacebook />
                  <FaInstagram />
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* right side design section  */}
       <div className=" w-[47%]">
     <BannerRightPart />
     
       </div>
       </Flex>
      </Container>
    </section>
  )
}
