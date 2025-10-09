import { useState } from "react";

interface Goal {
  nome: string;
  valor: string;
  inicio: string;
  fim: string;
}

interface GoalFormProps {
  onAdd: (goal: Goal) => void;
}

export function GoalForm({ onAdd }: GoalFormProps) {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome || !valor || !inicio || !fim) return;

    onAdd({ nome, valor, inicio, fim });

    // limpar campos
    setNome("");
    setValor("");
    setInicio("");
    setFim("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 rounded-2xl p-6 mb-8 shadow-md flex flex-wrap gap-4 items-end justify-between"
    >
      <div className="flex flex-col w-[35%]">
        <label className="text-sm font-semibold mb-1">NOME:</label>
        <input
          type="text"
          placeholder="ex: viajar para a praia"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="bg-indigo-100 p-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="flex flex-col w-[35%]">
        <label className="text-sm font-semibold mb-1">VALOR:</label>
        <input
          type="text"
          placeholder="ex: 500"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          className="bg-indigo-100 p-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="flex flex-col w-[25%]">
        <label className="text-sm font-semibold mb-1">INÍCIO:</label>
        <input
          type="date"
          value={inicio}
          onChange={(e) => setInicio(e.target.value)}
          className="bg-indigo-100 p-2 rounded-md outline-none"
        />
      </div>

      <div className="flex flex-col w-[25%]">
        <label className="text-sm font-semibold mb-1">FIM:</label>
        <input
          type="date"
          value={fim}
          onChange={(e) => setFim(e.target.value)}
          className="bg-indigo-100 p-2 rounded-md outline-none"
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-900 text-white px-4 py-2 rounded-md hover:bg-indigo-800 transition"
      >
        NOVA META +
      </button>
    </form>
  );
}
