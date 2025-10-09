import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Dash() {
  const pieData = [
    { name: "Alimentação", value: 10 },
    { name: "Compras pessoais", value: 10 },
    { name: "Transporte", value: 10 },
    { name: "Saúde", value: 10 },
    { name: "Casa", value: 10 },
    { name: "Outros", value: 50 },
  ];

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#8E44AD", "#2ECC71", "#E67E22"];

  const lineData = [
    { name: "Alimen.", valor: 1000 },
    { name: "Comp. P", valor: 2500 },
    { name: "Transp", valor: 1800 },
    { name: "Saúde", valor: 1500 },
    { name: "Casa", valor: 2200 },
    { name: "Out", valor: 2900 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-3 flex flex-col gap-3 font-sans text-xs md:text-sm">
      {/* Cards superiores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-[#EBEBEB] rounded-xl shadow p-3 flex flex-col">
          <h2 className="text-gray-600 text-xs">Gastos no mês</h2>
          <p className="text-lg font-semibold text-gray-900">R$ 1000,00</p>
          <span className="text-green-500 text-[11px] mt-1">+23,3% desde o mês passado</span>
        </div>

        <div className="bg-[#EBEBEB] rounded-xl shadow p-3 flex flex-col">
          <h2 className="text-gray-600 text-xs">Total de Transações</h2>
          <p className="text-lg font-semibold text-gray-900">20</p>
          <span className="text-blue-500 text-[11px] mt-1">+6,2% desde o mês passado</span>
        </div>

        <div className="bg-[#EBEBEB] rounded-xl shadow p-3 flex flex-col">
          <h2 className="text-gray-600 text-xs">Saldo salário</h2>
          <p className="text-lg font-semibold text-gray-900">R$ 230,00</p>
          <span className="text-red-500 text-[11px] mt-1">-17,6% desde o mês passado</span>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Pizza */}
        <div className="bg-[#EBEBEB] rounded-xl shadow p-3">
          <h2 className="text-gray-800 font-semibold mb-2 text-xs">Categoria de Gastos</h2>
          <div className="flex justify-center">
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={50}
                  fill="#8884d8"
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
                {item.name} {item.value}%
              </li>
            ))}
          </ul>
        </div>

        {/* Linha */}
        <div className="bg-[#EBEBEB] rounded-xl shadow p-3">
          <h2 className="text-gray-800 font-semibold mb-2 text-xs">Despesas Mensais</h2>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Line type="monotone" dataKey="valor" stroke="#121E3E" strokeWidth={1.5} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Metas pessoais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-[#EBEBEB] rounded-xl shadow p-3 md:col-span-2">
          <h2 className="text-gray-800 font-semibold mb-2 text-xs">Metas pessoais</h2>
          <div className="flex flex-col gap-2">
            <div className="bg-purple-200 h-4 rounded-md w-3/4"></div>
            <div className="bg-purple-200 h-4 rounded-md w-2/3"></div>
            <div className="bg-purple-200 h-4 rounded-md w-1/2"></div>
          </div>
        </div>

        <div className="bg-[#EBEBEB] rounded-xl shadow p-3"></div>
      </div>
    </div>
  );
}
