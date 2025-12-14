interface Goal {
  nome: string;
  valor: string;
  inicio: string;
  fim: string;
}

interface GoalListProps {
  goals: Goal[];
}

export function GoalList({ goals }: GoalListProps) {
  return (
    <div className="bg-[#EBEBEB] rounded-2xl p-6 shadow-md mt-8">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Histórico de metas:
      </h2>

      {goals.length === 0 ? (
        <p className="text-gray-500 text-sm">Nenhuma meta adicionada ainda...</p>
      ) : (
        <div className="flex flex-col gap-3">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-white border border-indigo-200 rounded-xl p-4 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-md transition"
            >
              {/* Nome da meta */}
              <div className="md:w-[20%] mb-2 md:mb-0">
                <h3 className="font-semibold text-indigo-900 text-lg truncate">
                  {goal.nome}
                </h3>
              </div>

              {/* Valor */}
              <div className="md:w-[20%] text-sm text-gray-700">
                <span className="font-semibold">Valor:</span>{" "}
                R$ {parseFloat(goal.valor).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </div>

              {/* Início */}
              <div className="md:w-[20%] text-sm text-gray-700">
                <span className="font-semibold">Início:</span> {goal.inicio}
              </div>

              {/* Fim */}
              <div className="md:w-[20%] text-sm text-gray-700">
                <span className="font-semibold">Fim:</span> {goal.fim}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
