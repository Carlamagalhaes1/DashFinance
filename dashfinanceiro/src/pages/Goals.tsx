import { useState, useEffect } from "react";
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

  useEffect(() => {
    const metasSalvas = localStorage.getItem("metas");
    if (metasSalvas) {
      setGoals(JSON.parse(metasSalvas));
    }
  }, []);

  function adicionarMeta(novaMeta: Goal) {
    const novasMetas = [...goals, novaMeta];
    setGoals(novasMetas);
    localStorage.setItem("metas", JSON.stringify(novasMetas));
  }

  return (
    <div className="max-w-5xl mx-auto">
      <GoalForm onAdd={adicionarMeta} />
      <GoalList goals={goals} />
    </div>
  );
}
