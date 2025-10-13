import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [salario, setSalario] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const novoUsuario = { nome, senha, salario };
    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios") || "[]");

    // 🔹 Evita duplicar nomes
    const jaExiste = usuariosSalvos.some((u: { nome: string }) => u.nome === nome);
    if (jaExiste) {
      alert("Esse nome de usuário já está cadastrado!");
      return;
    }

    usuariosSalvos.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));

    alert("Cadastro realizado com sucesso!");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0C0073]">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-full max-w-sm shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Cadastro
        </h1>

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
          <input
            type="number"
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
            placeholder="Salário"
            className="w-full px-3 py-2 rounded-lg border border-[#BFB8FF] bg-transparent text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#BFB8FF]"
            required
          />

          <button
            type="submit"
            className="mt-2 bg-[#BFB8FF] text-[#0C0073] font-semibold py-2 rounded-lg hover:bg-white transition"
          >
            Cadastrar
          </button>

          <p className="text-center text-white/70 text-sm mt-3">
            Já tem conta?{" "}
            <a href="/" className="text-[#BFB8FF] hover:underline">
              Faça login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
