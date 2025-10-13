
import { useEffect, useState } from "react";
import { Modal } from "../components/Modal";
import { useNavigate } from "react-router-dom";
import '../assets/fundo.png'
import { ChevronDown, Plus } from "lucide-react";

interface Transacao {
  nome: string;
  data: string;
  tipo: string;
  valor: string;
}

interface Usuario {
  nome: string;
  senha: string;
  salario: string;
}

export default function TransactionsPage() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const usuarioLogado: Usuario | null = JSON.parse(
    localStorage.getItem("usuarioLogado") || "null"
  );


  useEffect(() => {
    if (!usuarioLogado) {
      navigate("/");
      return;
    }
    const chave = `transacoes_${usuarioLogado.nome}`;
    const salvas: Transacao[] = JSON.parse(localStorage.getItem(chave) || "[]");
    setTransacoes(salvas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleAdd(transacao: Transacao) {
    if (!usuarioLogado) return;
    const chave = `transacoes_${usuarioLogado.nome}`;
    const atualizadas = [...transacoes, transacao];
    setTransacoes(atualizadas);
    localStorage.setItem(chave, JSON.stringify(atualizadas));
  }

  

  return (
    <div className="flex flex-col items-center justify-center flex-1 relative p-6">
      <div className="w-full flex justify-end mb-4">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-[#0C0073] flex text-white font-bold mr-2 px-4 py-2 rounded-lg hover:bg-blue-900 transition"
        >
          NOVA TRANSAÇÃO
          <Plus size={19} strokeWidth={3} className="ml-2 mt-0.5" />
        </button>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} onAdd={handleAdd} />

      {transacoes.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <img src="fundo.png" alt="Sem transações" className="w-40 h-40 mb-4" />
          <p className="text-gray-600 italic">Você não possui nenhuma transação ainda...</p>
        </div>
      ) : (
        <div className="bg-[#EBEBEB] mt-24 rounded-2xl p-4 shadow-md w-full max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-lg text-[#000D43]">Histórico de transações:</h2>
            <button
              
              className="flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-300 transition"
            >
              Filtrar por
              <ChevronDown size={16}  />
            </button>
          </div>

          <div className="grid grid-cols-4 text-sm font-semibold text-gray-700 px-4">
            <span>NOME</span>
            <span>DATA</span>
            <span>TIPO</span>
            <span className="text-right">VALOR</span>
          </div>

          <div className="mt-2 flex flex-col gap-2 max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-gray-200">
            {transacoes.map((t, index) => (
              <div
                key={index}
                className="grid grid-cols-4 items-center bg-[#BFB8FF] text-[#000D43] rounded-2xl px-5 py-2 shadow-2xl"
              >
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


 