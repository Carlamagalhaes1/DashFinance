import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="relative flex items-center justify-between bg-[#EDEAFF] px-6 py-4">
      {/* Esquerda: Título */}
      <h1 className="font-bold text-lg text-[#2E12E4]">SUAS TRANSAÇÕES</h1>

      {/* Centro: Pesquisa */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar transação"
            className="bg-white w-80 rounded-full px-4 py-2 pl-10 focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Direita: Usuário */}
      <div className="flex items-center gap-2 text-[#2E12E4]">
        <FaUserCircle size={28} />
        <span>Carla</span>
      </div>
    </header>
  );
}
