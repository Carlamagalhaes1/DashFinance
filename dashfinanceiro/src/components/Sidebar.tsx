import { FaSignOutAlt } from "react-icons/fa";
import { FaRegFileAlt, FaChartPie } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { GiTargetPrize } from "react-icons/gi";

export default function Sidebar() {
  return (
    <aside className="bg-[#2E12E4] w-56 h-screen flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-6">
          <img src="/logo.svg" alt="RegistraAí" className="w-6 h-6" />
          <span className="text-white font-bold text-lg">RegistraAí</span>
        </div>

        {/* Menu */}
        <nav className="flex flex-col mt-4">
          <a href="#" className="flex items-center gap-2 px-4 py-2 bg-[#604BEE] text-white rounded-r-full">
            <FaRegFileAlt /> Transações
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 text-white hover:bg-[#604BEE] rounded-r-full">
            <FaChartPie /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 text-white hover:bg-[#604BEE] rounded-r-full">
            <IoMdColorPalette /> Tema
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 text-white hover:bg-[#604BEE] rounded-r-full">
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
