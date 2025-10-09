import { useState } from "react";
import { Modal } from "../components/Modal";
import { ChevronDown } from "lucide-react";
import FundoImage from "../assets/fundo.png"; // <-- Caminho da imagem

interface Transacao {
  nome: string;
  data: string;
  tipo: string;
  valor: string;
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transacao[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addTransaction(novaTransacao: Transacao) {
    setTransactions((prev) => [...prev, novaTransacao]);
  }

  return (
    <div className="flex flex-col items-center justify-center flex-1 relative p-6">
      <div className="w-full flex justify-end mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Nova transação
        </button>
      </div>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={addTransaction} />

      {transactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <img src={FundoImage} alt="Sem transações" className="w-40 h-40 mb-4" />
          <p className="text-gray-600 italic">você não possui nenhuma transação ainda....</p>
        </div>
      ) : (
        <div className="bg-gray-100 rounded-2xl p-4 shadow-md w-full max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-lg text-gray-800">Histórico de transações:</h2>
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-1 bg-gray-200 px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-300 transition">
              Filtrar por
              <ChevronDown size={16} className={`transition-transform ${filterOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          <div className="grid grid-cols-4 text-sm font-semibold text-gray-700 px-2">
            <span>NOME</span>
            <span>DATA</span>
            <span>TIPO</span>
            <span className="text-right">VALOR</span>
          </div>

          <div className="mt-2 flex flex-col gap-2 max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-gray-200">
            {transactions.map((t, index) => (
              <div
                key={index}
                className="grid grid-cols-4 items-center bg-indigo-100 text-gray-800 rounded-lg px-3 py-2 shadow-sm border border-indigo-200">
                <span>{t.nome}</span>
                <span>{t.data}</span>
                <span>{t.tipo}</span>
                <span className="text-right font-medium">{t.valor}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
