import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Modal } from "../components/Modal";
import { ChevronDown } from "lucide-react";

// Definição do tipo de transação
interface Transacao {
  nome: string;
  data: string;
  tipo: string;
  valor: string;
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transacao[]>([

  ]);

  const [filterOpen, setFilterOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para adicionar uma nova transação
  function addTransaction(novaTransacao: Transacao) {
    setTransactions((prev) => [...prev, novaTransacao]);
  }

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="flex flex-col items-center justify-center flex-1 relative p-6">
          {/* Botão abrir modal */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mb-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Nova transação
          </button>

          {/* Modal de cadastro */}
          <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={addTransaction} />

          {/* Container da tabela */}
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

            {/* Lista com scroll */}
            <div className="mt-2 flex flex-col gap-2 max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-gray-200">
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
        </div>
      </div>
    </div>
  );
}
