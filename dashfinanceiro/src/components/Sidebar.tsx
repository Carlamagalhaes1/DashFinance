import { FaSignOutAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { GiTargetPrize } from "react-icons/gi";
import { RiDashboardFill } from "react-icons/ri";

export default function Sidebar() {
  return (
    <aside className="bg-[#381CD5] w-56 h-screen flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-6">
          <img src="images/logo2.svg" alt="RegistraAí" className="w-10 h-10" />
        
        </div>

        {/* Menu */}
        <nav className="flex flex-col mt-4">
          <a href="#" className="flex items-center gap-2 px-4 py-2 bg-[#604BEE] text-xl font-bold text-[#0C0073] rounded-r-full">
            <FaRegFileAlt /> Transações
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 font-bold text-xl text-white hover:bg-[#604BEE] rounded-r-full">
            <RiDashboardFill /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 font-bold text-xl text-white hover:bg-[#604BEE] rounded-r-full">
            <IoMdColorPalette /> Tema
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 font-bold text-xl text-white hover:bg-[#604BEE] rounded-r-full">
            <GiTargetPrize /> Metas
          </a>
        </nav>
      </div>

      {/* Sair */}
      <div className="flex items-center gap-2 px-4 py-4 text-white cursor-pointer hover:bg-[#604BEE]">
        <FaSignOutAlt /> Sair
      </div>
    </aside>
  );
}
