import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function TransactionsList() {
  const [filterOpen, setFilterOpen] = useState(false);

  const transactions = [
    { nome: "Abastecimento da moto", data: "01/09/2024", tipo: "Transporte", valor: "R$ 20,00" },
    { nome: "Compra de um vestido", data: "02/08/2024", tipo: "Compras pessoais", valor: "R$ 70,00" },
    { nome: "Compra de 2 arroz", data: "13/07/2024", tipo: "Alimento", valor: "R$ 8,00" },
    { nome: "Abastecimento do carro", data: "12/01/2024", tipo: "Transporte", valor: "R$ 30,00" },
    { nome: "Saída para o Barón", data: "14/12/2024", tipo: "Transporte", valor: "R$ 45,00" },
  ];

  return (
    <div className="bg-gray-100 rounded-2xl p-4 shadow-md w-full max-w-3xl mx-auto">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-lg text-gray-800">Histórico de transações:</h2>

        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="flex items-center gap-1 bg-gray-200 px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-300 transition"
        >
          Filtrar por
          <ChevronDown size={16} className={`transition-transform ${filterOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Cabeçalho da tabela */}
      <div className="grid grid-cols-4 text-sm font-semibold text-gray-700 px-2">
        <span>NOME</span>
        <span>DATA</span>
        <span>TIPO</span>
        <span className="text-right">VALOR</span>
      </div>

      {/* Linhas */}
      <div className="mt-2 flex flex-col gap-2">
        {transactions.map((t, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center bg-indigo-100 text-gray-800 rounded-lg px-3 py-2 shadow-sm border border-indigo-200"
          >
            <span>{t.nome}</span>
            <span>{t.data}</span>
            <span>{t.tipo}</span>
            <span className="text-right font-medium">{t.valor}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
