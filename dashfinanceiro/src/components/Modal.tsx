import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Modal() {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [tipo, setTipo] = useState("");
  const [valor, setValor] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const novaTransacao = { nome, data, tipo, valor };
    console.log("Nova transação:", novaTransacao);

    setNome("");
    setData("");
    setTipo("");
    setValor("");
    setOpen(false);
  }

  return (
    <div>
      {/* Botão para abrir */}
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Nova Transação
      </button>

      {/* Animação de presença (entrada e saída do modal) */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Conteúdo do modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg p-6 w-full max-w-md relative"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Cadastrar Transação
              </h2>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Nome</label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    className="w-full border rounded-lg p-2 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Data</label>
                  <input
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    required
                    className="w-full border rounded-lg p-2 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Tipo</label>
                  <select
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    required
                    className="w-full border rounded-lg p-2 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecione</option>
                    <option value="entrada">Entrada</option>
                    <option value="saída">Saída</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Valor (R$)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    required
                    className="w-full border rounded-lg p-2 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Salvar
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
