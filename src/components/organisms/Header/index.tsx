import { useCompanies } from "../../../services/companies";
import { useCompanyStore } from "../../../store/company";
import Filters from "../../molecules/Filters";

const Header = ({ children }: React.PropsWithChildren) => {
  const { data } = useCompanies();

  const { name, addCompany } = useCompanyStore();

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
                  onClick={() => addCompany(item)}
                  className={`px-2 py-1  text-white font-semibold text-xs flex 
                  items-center gap-2 rounded-sm ${
                    name === item.name ? "bg-blue-500" : "bg-blue-600"
                  }`}
                >
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
                {name !== "" && (
                  <span className="text-gray-600 text-sm">/ {name}</span>
                )}
              </div>
              <Filters />
            </header>
            {children}
          </section>
        </main>
      </div>
    </>
  );
};

export default Header;
