import { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

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

export default function Dash() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [totalGasto, setTotalGasto] = useState(0);
  const [salario, setSalario] = useState(0);
  const [pieData, setPieData] = useState<{ name: string; value: number }[]>([]);
  const [lineData, setLineData] = useState<{ name: string; valor: number }[]>([]);
  
  // Guardamos também o "mês anterior" simulado
  const [totalMesPassado, setTotalMesPassado] = useState(0);

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#8E44AD", "#2ECC71", "#E67E22"];

  useEffect(() => {
    const usuarioLogado: Usuario | null = JSON.parse(localStorage.getItem("usuarioLogado") || "null");
    if (!usuarioLogado) return;

    setUsuario(usuarioLogado);

    // Busca as transações desse usuário
    const chave = `transacoes_${usuarioLogado.nome}`;
    const salvas: Transacao[] = JSON.parse(localStorage.getItem(chave) || "[]");
    setTransacoes(salvas);

    if (salvas.length > 0) {
      const total = salvas.reduce(
        (acc, t) => acc + parseFloat(t.valor.replace(",", ".")),
        0
      );
      setTotalGasto(total);

      // Salário atual - gastos = saldo
      const salarioNum = parseFloat(usuarioLogado.salario.replace(",", "."));
      setSalario(salarioNum - total);

      // Exemplo: mês passado = 80% do total atual (simulação)
      const mesAnterior = total * 0.8;
      setTotalMesPassado(mesAnterior);

      // Agrupar por tipo de gasto (pra pizza e linha)
      const porCategoria: Record<string, number> = {};
      salvas.forEach((t) => {
        porCategoria[t.tipo] =
          (porCategoria[t.tipo] || 0) + parseFloat(t.valor.replace(",", "."));
      });

      const pieArr = Object.entries(porCategoria).map(([name, value]) => ({ name, value }));
      setPieData(pieArr);

      const lineArr = Object.entries(porCategoria).map(([name, valor]) => ({ name, valor }));
      setLineData(lineArr);
    }

  
  }, []);

  // Cálculo das porcentagens dinâmicas
  const variacaoGastos = totalMesPassado
    ? ((totalGasto - totalMesPassado) / totalMesPassado) * 100
    : 0;

  const variacaoSaldo = usuario
    ? ((salario - parseFloat(usuario.salario)) / parseFloat(usuario.salario)) * 100
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col gap-5 font-sans text-xs md:text-sm">

      {/* Cards principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* GASTOS NO MÊS */}
        <div className="bg-[#EBEBEB] rounded-xl shadow p-3 flex flex-col">
          <h2 className="text-gray-600 font-semibold text-md">Gastos no mês</h2>
          <p className="text-lg font-semibold text-gray-900">
            R$ {totalGasto.toFixed(2)}
          </p>
          <span className={`text-[11px] mt-1 ${variacaoGastos >= 0 ? "text-red-500" : "text-green-500"}`}>
            {variacaoGastos >= 0 ? "+" : ""}
            {variacaoGastos.toFixed(1)}% desde o mês passado
          </span>
        </div>

        {/* TOTAL DE TRANSAÇÕES */}
        <div className="bg-[#EBEBEB] rounded-xl shadow p-3 flex flex-col">
          <h2 className="text-gray-600 font-semibold text-md">Total de Transações</h2>
          <p className="text-lg font-semibold text-gray-900">{transacoes.length}</p>
          <span className="text-blue-500 text-[11px] mt-1">
            {(transacoes.length * 3.2).toFixed(1)}% desde o mês passado
          </span>
        </div>

        {/* SALDO SALÁRIO */}
        <div className="bg-[#EBEBEB] rounded-xl shadow p-3 flex flex-col">
          <h2 className="text-gray-600 font-semibold text-md">Saldo Salário</h2>
          <p
            className={`text-lg font-semibold ${
              salario >= 0 ? "text-gray-900" : "text-red-600"
            }`}
          >
            R$ {salario.toFixed(2)}
          </p>
          <span className={`text-[11px] mt-1 ${variacaoSaldo >= 0 ? "text-green-500" : "text-red-500"}`}>
            {variacaoSaldo.toFixed(1)}% em relação ao salário base
          </span>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Pizza */}
        <div className="bg-[#EBEBEB] rounded-xl shadow p-3">
          <h2 className="text-gray-800 font-semibold mb-2 text-md">Categoria de Gastos</h2>
          <div className="flex justify-center">
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  dataKey="value"
                >
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="flex flex-wrap justify-center gap-1 mt-2 text-[11px] text-gray-600">
            {pieData.map((item, i) => (
              <li key={i}>
                <span
                  className="inline-block w-2.5 h-2.5 mr-1 rounded"
                  style={{ backgroundColor: COLORS[i % COLORS.length] }}
                ></span>
                {item.name} — R$ {item.value.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>

        {/* Linha */}
        <div className="bg-[#EBEBEB] rounded-xl shadow p-3">
          <h2 className="text-gray-800 font-semibold mb-2 text-md">Despesas por categoria</h2>
          <ResponsiveContainer width="100%" height={190}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Line type="monotone" dataKey="valor" stroke="#121E3E" strokeWidth={1.5} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
