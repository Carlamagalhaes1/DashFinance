import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Usuario {
  nome: string;
  senha: string;
  salario: string;
}

export default function LoginPage() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const usuariosSalvos: Usuario[] = JSON.parse(localStorage.getItem("usuarios") || "[]");

    const usuarioEncontrado = usuariosSalvos.find(
      (u) => u.nome === nome && u.senha === senha
    );

    if (!usuarioEncontrado) {
      alert("Usuário ou senha incorretos!");
      return;
    }

    // Aqui salvamos o usuário logado com 'salario' e também um campo 'saldo'
    const usuarioLogado = {
      ...usuarioEncontrado,
      saldo: parseFloat(usuarioEncontrado.salario),
    };

    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));

    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-2xl shadow-lg w-80 flex flex-col gap-3"
      >
        <h2 className="text-lg font-semibold text-indigo-700">Entrar</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border rounded-md p-2"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="border rounded-md p-2"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white rounded-md py-2 hover:bg-indigo-700 transition"
        >
          Entrar
        </button>
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="text-indigo-500 text-sm"
        >
          Criar nova conta
        </button>
      </form>
    </div>
  );
}
