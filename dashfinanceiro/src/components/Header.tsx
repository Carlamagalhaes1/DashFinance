import { useEffect, useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const [nome, setNome] = useState<string>("");

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuarioLogado");
    if (usuarioSalvo) {
      const usuario = JSON.parse(usuarioSalvo);
      setNome(usuario.nome || "");
    }
  }, []);

  return (
    <header className="relative flex items-center justify-between bg-[#d3d1f08f] px-6 py-4">
      <h1 className="font-bold text-lg text-[#0C0073]">{title}</h1>

      {/* campo de pesquisa */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <div className="relative">
          <FaSearch className="absolute right-5 top-3 text-[#0C0073]" />
          <input
            type="text"
            placeholder="Pesquisar transação"
            className="bg-[#D3D1F0] w-[500px] rounded-full py-2 pl-6 focus:outline-none"
          />
        </div>
      </div>

      {/* nome do usuário */}
      <div className="flex items-center gap-2 text-[#2E12E4]">
        <FaUserCircle size={28} />
        <span className="pr-2">{nome}</span>
      </div>
    </header>
  );
}