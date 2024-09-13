import { useCompanies } from "../../../services/companies";

const Header = ({ children }: React.PropsWithChildren) => {
  //TODO: CONTEXT API OU ZUSTAND PARA SELECIONAR O ID DO COMPANY

  //TODO: Utilizar o header com o children pode ser perigoso, pois vai renderizar toda a arvore
                  // caso tenha useState aqui, o que provavelmente vai ter para o isActive
                  
  const { data } = useCompanies();

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex items-center justify-between bg-blue-950 h-12 p-3">
          <img src="/logo-tractian.png" width="100" />
          <div className="flex items-center gap-[10px]">
            {data &&
              data?.map((item) => (
                <button
                  key={item.id}
                  className="px-2 py-1  text-white font-semibold text-xs flex items-center gap-2 rounded-sm 
          bg-blue-600"
                >
                  {/* TODO: isActive */}
                  <img src="/company.png" width="12" />
                  {item.name}
                </button>
              ))}
          </div>
        </div>

        <main className="flex p-2 min-h-[93%] flex-1">
          <section className="bg-white flex-1 p-4 border rounded space-y-3 flex flex-col">
            <header className="flex items-center justify-between h-8">
              <div className="flex items-center gap-2">
                <h1 className="text-gray-950 font-semibold text-xl">Ativos</h1>
                {/* TODO: Company Name */}
                <span className="text-gray-600 text-sm">/ Apex Unit</span>
              </div>
              <div className="flex gap-2">
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 border rounded font-semibold text-sm 
              "text-gray-600
              }`}
                >
                  {/* TODO: selected isActive */}
                  <img src="/energy.png" width="14" />
                  Sensor de Energia
                </button>
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 border rounded font-semibold text-sm 
              "text-gray-600
              }`}
                >
                  {/* TODO: selected isActive */}
                  <img src="/critic.png" width="14" />
                  Crítico
                </button>
              </div>
            </header>
            {children}
          </section>
        </main>
      </div>
    </>
  );
};

export default Header;
