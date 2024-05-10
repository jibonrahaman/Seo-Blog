import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import NavIconStyle from "../Components/NavIconStyle";

export default function Home() {
  return (
    <>
      <section className="  bg-[#f0f2f5]">
        <nav className=" max-w-container mx-auto flex justify-between items-center py-7">
          <div className=" flex gap-x-4 text-xl">
          <NavIconStyle><FaFacebook/></NavIconStyle>
          <NavIconStyle><FaInstagram/></NavIconStyle>  
          <NavIconStyle><FaTwitter/></NavIconStyle>
           <NavIconStyle><FaLinkedin/></NavIconStyle>
          </div>
          <div>
            <img className=" w-36" src="https://new.axilthemes.com/demo/template/blogar/assets/images/logo/logo-black.png" alt="nav" />
          </div>
          <div className=" text-[#bca8a2] flex gap-x-7">
            <button>4 November, 2022</button>
            <button>Advertisement</button>
            <button>About</button>
            <button>Contact
            </button>
          </div>
        </nav>
      </section>
      <section className="max-w-container mx-auto">

        <div className=" flex  justify-between items-center py-6">
          <ul className=" flex text-[#918c88] text-lg font-semibold gap-x-10">
            <button>Home</button>
            <button>Posts</button>
            <button>Mega Menu</button>
            <button>Pages</button>
            <button>Lifestyle</button>
            <button>Gadgets</button>
          </ul>
          <div className=" flex  items-center gap-x-5">
            <div className=" relative ">
              <input type="text" placeholder="search" className=" bg-[#f0f2f5] py-2 pl-10 rounded-full outline-[#3858f6]" />
              <FaSearch className=" absolute top-[12px] left-2 pl-1" size={20} />
            </div>
            <NavIconStyle><IoBookmark size={20} /></NavIconStyle>
        <NavIconStyle><IoIosNotifications size={20}/></NavIconStyle>
        
            <img src="https://new.axilthemes.com/demo/template/blogar/assets/images/others/author.png" alt="img" />
          </div>
        </div>
      </section>
    </>
  )
}
