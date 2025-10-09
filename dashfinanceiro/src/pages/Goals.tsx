import { useState } from "react";
import { GoalForm } from "../components/GoalForm";
import { GoalList } from "../components/GoalList";

export interface Goal {
  nome: string;
  valor: string;
  inicio: string;
  fim: string;
}

export function Goals() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function adicionarMeta(novaMeta: Goal) {
    setGoals((prev) => [...prev, novaMeta]);
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <GoalForm onAdd={adicionarMeta} />
      <GoalList goals={goals} />
    </div>
  );
}
