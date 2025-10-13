import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Usuario {
  nome: string;
  senha: string;
  salario: string;
}

export default function RegisterPage() {
  const [form, setForm] = useState<Usuario>({ nome: "", senha: "", salario: "" });
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const usuariosSalvos: Usuario[] = JSON.parse(localStorage.getItem("usuarios") || "[]")
    if (usuariosSalvos.some((u) => u.nome === form.nome)) {
      alert("Usuário já existe!");
      return;
    }

    // Adiciona novo usuário
    usuariosSalvos.push(form);
    localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));

    alert("Cadastro realizado com sucesso!");
    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-80 flex flex-col gap-3"
      >
        <h2 className="text-lg font-semibold text-indigo-700">Criar conta</h2>
        <input
          type="text"
          placeholder="Nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          className="border rounded-md p-2"
        />
        <input
          type="password"
          placeholder="Senha"
          value={form.senha}
          onChange={(e) => setForm({ ...form, senha: e.target.value })}
          className="border rounded-md p-2"
        />
        <input
          type="text"
          placeholder="Salário (ex: 3500)"
          value={form.salario}
          onChange={(e) => setForm({ ...form, salario: e.target.value })}
          className="border rounded-md p-2"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white rounded-md py-2 hover:bg-indigo-700 transition"
        >
          Cadastrar
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-indigo-500 text-sm"
        >
          Já tem conta? Faça o login aqui
        </button>
      </form>
    </div>
  );
}
