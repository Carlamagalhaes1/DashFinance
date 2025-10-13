import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Transacao {
  nome: string;
  data: string;
  tipo: string;
  valor: string;
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (transacao: Transacao) => void;
}

export function Modal({ open, onClose, onAdd }: ModalProps) {
  const [form, setForm] = useState<Transacao>({
    nome: "",
    data: "",
    tipo: "",
    valor: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.nome || !form.data || !form.tipo || !form.valor) return;
    onAdd(form);
    setForm({ nome: "", data: "", tipo: "", valor: "" });
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl shadow-xl p-6 w-96"
          >
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Nova Transação</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="border rounded-md p-2 focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="date"
                value={form.data}
                onChange={(e) => setForm({ ...form, data: e.target.value })}
                className="border rounded-md p-2 focus:ring-2 focus:ring-indigo-400"
              />
              <select
                value={form.tipo}
                onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                className="border rounded-md p-2 focus:ring-2 focus:ring-indigo-400"
              >
                <option value="">Selecione o tipo</option>
                <option value="alimentacao">Alimentação</option>
                <option value="compras">Compras Pessoais</option>
                <option value="transporte">Transporte</option>
                <option value="saude">Saúde</option>
                <option value="casa">Casa</option>
                <option value="outros">Outros</option>
              </select>
              <input
                type="text"
                placeholder="Valor (ex: R$ 50,00)"
                value={form.valor}
                onChange={(e) => setForm({ ...form, valor: e.target.value })}
                className="border rounded-md p-2 focus:ring-2 focus:ring-indigo-400"
              />
              <div className="flex justify-end gap-3 mt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  Salvar
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
