import React from 'react'
import Flex from './Flex'
import ScaleImg from './ScaleImg'
import HoverHiddenShoData from './HoverHiddenShoData'
import HoverUnderline from './HoverUnderline'

export default function BannerRightPart() {
  return (
    <>
    <Flex className="group gap-x-5 ">
    <div className=" overflow-hidden rounded-lg">
    <ScaleImg src="https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/post-seo-sm-01.jpg" alt="left-1"/>
    </div>
      <div>
      <HoverHiddenShoData dataText="BUSINESS" text="BUSINESS" />
       <HoverUnderline className="group-hover:before:w-14" text="How to craft great page titles for SEO" />
      </div>
       </Flex>
       <p className=' border border-b-gray-700  py-2'></p>

       <Flex className="group gap-x-5 py-5">
    <div className=" overflow-hidden rounded-lg">
    <ScaleImg src="https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/post-seo-sm-02.jpg" alt="left-2"/>
    </div>
      <div>
      <HoverHiddenShoData dataText="MARKETING" text="MARKETING" />
       <HoverUnderline className="group-hover:before:w-[105px]" text="Learn What Marketing Is and How It Is Used" />
      </div>
       </Flex>
       <p className=' border border-b-gray-700  '></p>

       <Flex className="group gap-x-5 py-4">
    <div className=" overflow-hidden rounded-lg">
    <ScaleImg src="https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/post-seo-sm-03.jpg" alt="left-1"/>
    </div>
      <div>
      <HoverHiddenShoData dataText="DIGITAL SERVICE" text="DIGITAL SERVICE" />
       <HoverUnderline className="group-hover:before:w-[120px]" text="How to use your keyphrase in the SEO title" />
      </div>
       </Flex>
       <p className=' border border-b-gray-700  '></p>
       
       <Flex className="group gap-x-5 pt-3">
    <div className=" overflow-hidden rounded-lg">
    <ScaleImg src="https://new.axilthemes.com/demo/template/blogar/assets/images/post-images/post-seo-sm-04.jpg" alt="left-4"/>
    </div>
      <div>
      <HoverHiddenShoData dataText="BUSINSS KEY" text="BUSINSS KEY" />
       <HoverUnderline className="group-hover:before:w-48" text="Facebook for Business: Marketing on Facebook" />
      </div>
       </Flex>
    </>
  )
}
