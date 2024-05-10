import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
export default function Banner() {
  return (
    <section className="   bg-[#f0f2f5]">
   
   <div className=" max-w-container mx-auto py-20">
   <div>
    <img className=" rounded-lg" src="https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/post-seo-grid-01.jpg" alt="banner" />
    <Card className="mt-6 w-[580px]">
    <CardBody>
        <a className=" text-[#da474e] cursor-pointer py-3">RESEARCH</a>
       <h4 className="pt-3 font-semibold text-3xl text-black">How to write a title with an optimal width for SEO</h4>
      </CardBody>

      <CardFooter className="pt-0">
     <div className=" flex gap-3">
      <img  className=" w-30 rounded-full" src="https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/author/author-image-2.png" alt="" />
      <div>
        <h5>Rahabi Khan</h5>
        <p>Feb 17, 2019 300k Views</p>
      </div>
     </div>
      </CardFooter>
    </Card>
   </div>
   </div>
    </section>
  )
}
