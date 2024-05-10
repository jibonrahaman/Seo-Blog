import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

export default function Home() {
  return (
 <>
   <section className="  bg-slate-200">
    <nav className=" max-w-container mx-auto flex justify-between items-center py-3">
    <div className=" flex gap-x-4">
    <FaFacebook />
    <FaInstagram />
    <FaTwitter />
    <FaLinkedin />
    </div>
<div>
    <img src="https://new.axilthemes.com/demo/template/blogar/assets/images/logo/logo-black.png" alt="nav" />
</div>
<div>
<button>4 November, 2022</button>
<button>Advertisement</button>
<button>About</button>
<button>Contact
</button>
</div>
    </nav>
   </section>
   <section className="max-w-container mx-auto">

<div className=" flex  justify-between items-center py-2">
<ul className=" flex text-[#cbc8c8] text-xl font-semibold gap-x-10">
<button>Home</button>
<button>Posts</button>
<button>Mega Menu</button>
<button>Pages</button>
<button>Lifestyle</button>
<button>Gadgets</button>
</ul>
<div className=" flex  items-center gap-x-5">
<div className=" relative ">
  <input type="text" placeholder="search" className=" bg-slate-200 py-2 pl-10 rounded-full outline-orange-400" />
  <FaSearch className=" absolute top-[12px] left-2 pl-1"  size={20}/>
</div>
<IoBookmark size={ 20}/>
<IoIosNotifications size={ 20}/>
<img src="https://new.axilthemes.com/demo/template/blogar/assets/images/others/author.png" alt="img" />
</div>
</div>
   </section>
   </>
  )
}
