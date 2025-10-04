import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Modal } from "../components/Modal";
import { TransactionsList } from "../components/TransactionsList";

export default function TransactionsPage() {
  return (
    <div className="flex h-screen">
     
      <Sidebar />

      
      <div className="flex-1 flex flex-col">
        <Header />

        
        <div className="flex flex-col items-center justify-center flex-1 relative">
            <Modal></Modal>
            <TransactionsList></TransactionsList>

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
