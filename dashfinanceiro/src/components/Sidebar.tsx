import { FaSignOutAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { GiTargetPrize } from "react-icons/gi";
import { RiDashboardFill } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";


export default function Sidebar() {

  const [colapsada, setColapsada]= useState(false)

  
  return (
    <aside className={`bg-[#381CD5] ${colapsada ? "w-20" :  "w-56"} h-screen flex flex-col justify-between transition-all duration-300`}>
      
      <div>
       
        <div className="flex items-center gap-2 px-4 py-6">
          {!colapsada && <h1>ASSIANAIA</h1>}
        
        </div>
        <div className="flex justify-items-center cursor-pointer" onClick={() => setColapsada(!colapsada)}> {colapsada ? <BsArrowLeft className=" transition-all duration-300"  /> : <BsArrowLeft className="rotate-180 transition-all duration-300"/>} </div>
        
        
        <nav className="flex flex-col mt-4">
          
          <a href="#" className="flex items-center gap-2 px-4 py-2 bg-[#604BEE] text-xl font-bold text-[#0C0073] rounded-r-full">
            <FaRegFileAlt />{!colapsada && "Transações"}
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 font-bold text-xl text-white hover:bg-[#604BEE] rounded-r-full">
            <RiDashboardFill /> {!colapsada && "Dashboard"}
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 font-bold text-xl text-white hover:bg-[#604BEE] rounded-r-full">
            <IoMdColorPalette /> {!colapsada && "Tema"}
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 font-bold text-xl text-white hover:bg-[#604BEE] rounded-r-full">
            <GiTargetPrize /> {!colapsada && "Metas"}
          </a>
        </nav>
      </div>

      
      <div className="flex items-center gap-2 px-4 py-4 text-white cursor-pointer hover:bg-[#604BEE]">
        <FaSignOutAlt /> {!colapsada && "Sair"}
      </div>
    </aside>
  );
}
