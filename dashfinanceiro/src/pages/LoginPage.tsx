import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    // 🔹 Pega lista de usuários cadastrados
    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios") || "[]");

    // 🔹 Verifica se o nome e senha batem
    const usuarioEncontrado = usuariosSalvos.find(
      (u: { nome: string; senha: string }) => u.nome === nome && u.senha === senha
    );

    if (usuarioEncontrado) {
      // 🔹 Salva usuário logado e vai pra página de transações
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
      navigate("/transacoes");
    } else {
      setErro("Nome ou senha incorretos!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0C0073]">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-full max-w-sm shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            className="w-full px-3 py-2 rounded-lg border border-[#BFB8FF] bg-transparent text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#BFB8FF]"
            required
          />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            className="w-full px-3 py-2 rounded-lg border border-[#BFB8FF] bg-transparent text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#BFB8FF]"
            required
          />

          {erro && (
            <p className="text-red-400 text-sm text-center">{erro}</p>
          )}

          <button
            type="submit"
            className="mt-2 bg-[#BFB8FF] text-[#0C0073] font-semibold py-2 rounded-lg hover:bg-white transition"
          >
            Entrar
          </button>

          <p className="text-center text-white/70 text-sm mt-3">
            Não tem uma conta?{" "}
            <a href="/register" className="text-[#BFB8FF] hover:underline">
              Cadastre-se
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
