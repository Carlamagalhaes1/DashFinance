import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function TransactionsPage() {
  return (
    <div className="flex h-screen">
      {/* Lateral */}
      <Sidebar />

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col">
        <Header />

        {/* Corpo */}
        <div className="flex flex-col items-center justify-center flex-1 relative">
          <button className="absolute top-6 right-6 bg-[#0C0073] hover:bg-[#1d0ab2] text-white font-bold px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
            ADICIONAR <span className="text-xl color-black">+</span>
          </button>

          <img
            src="/images/transacoeshomem.svg"
            alt="Sem transações"
            className="w-60 h-60"
          />
          <p className="mt-4 italic text-gray-600">
            Você não possui nenhuma transação ainda...
          </p>
        </div>
      </div>
    </div>
  );
}
