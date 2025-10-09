import { FaSignOutAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { GiTargetPrize } from "react-icons/gi";
import { RiDashboardFill } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Sidebar() {

  const [colapsada, setColapsada] = useState(false)


  return (
    <aside className={`bg-[#381CD5] ${colapsada ? "w-20" : "w-56"} h-screen flex flex-col justify-between transition-all duration-300`}>

      <div>

        <div className="flex items-center gap-2 px-4 py-6">
          {!colapsada && <h1>ASSIANAIA</h1>}

        </div>
        <div className="flex justify-items-center cursor-pointer" onClick={() => setColapsada(!colapsada)}> {colapsada ? <BsArrowLeft className=" transition-all duration-300" /> : <BsArrowLeft className="rotate-180 transition-all duration-300" />} </div>


        <nav className="flex flex-col mt-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 text-xl font-bold rounded-r-full transition-colors
       ${isActive ? "text-[#0C0073] bg-[#ffffffb7]" : "text-white hover:bg-[#604BEE]"}`
            }
          >
            {({ isActive }) => (
              <>
                <FaRegFileAlt color={isActive ? "#0C0073" : "white"} />
                {!colapsada && "Transações"}
              </>
            )}
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 text-xl font-bold rounded-r-full transition-colors
       ${isActive ? "text-[#0C0073] bg-[#ffffffb7]" : "text-white hover:bg-[#604BEE]"}`
            }
          >
            {({ isActive }) => (
              <>
                <RiDashboardFill color={isActive ? "#0C0073" : "white"} />
                {!colapsada && "Dashboard"}
              </>
            )}
          </NavLink>

          <NavLink
            to="/tema"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 text-xl font-bold rounded-r-full transition-colors
       ${isActive ? "text-[#0C0073] bg-[#ffffffb7]" : "text-white hover:bg-[#604BEE]"}`
            }
          >
            {({ isActive }) => (
              <>
                <IoMdColorPalette color={isActive ? "#0C0073" : "white"} />
                {!colapsada && "Tema"}
              </>
            )}
          </NavLink>

          <NavLink
            to="/goals"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 text-xl font-bold rounded-r-full transition-colors
       ${isActive ? "text-[#0C0073] bg-[#ffffffb7]" : "text-white hover:bg-[#604BEE]"}`
            }
          >
            {({ isActive }) => (
              <>
                <GiTargetPrize color={isActive ? "#0C0073" : "white"} />
                {!colapsada && "Metas"}
              </>
            )}
          </NavLink>
        </nav>

      </div>


      <div className="flex items-center gap-2 px-4 py-4 text-white cursor-pointer hover:bg-[#604BEE]">
        <FaSignOutAlt /> {!colapsada && "Sair"}
      </div>
    </aside>
  );
}
