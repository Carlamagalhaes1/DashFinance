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
    <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Histórico de metas:</h2>

      <div className="flex flex-col gap-3">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="bg-white border border-indigo-900 rounded-md p-2 text-gray-800 shadow-sm"
          >
            {goal.nome}
          </div>
        ))}
      </div>
    </div>
  );
}
