import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";


export function Layout() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
      case "/transacoes":
        return "SUAS TRANSAÇÕES";
      case "/dashboard":
        return "DASHBOARD";
      case "/tema":
        return "TEMA";
      case "/goals":
        return "SUAS METAS";
      default:
        return "ASSIANAIA";
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header title={getTitle()} />
        <main className="p-6 bg-gray-50 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
