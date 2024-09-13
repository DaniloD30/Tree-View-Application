import ComponentDetail from "../organisms/ComponentDetail";
import Header from "../organisms/Header";
import TreeViewAssets from "../organisms/TreeViewAssets";

//TODO: Separar em páginas e responsabilidades
//TODO: Tomar cuidado com a escolha do gerenciador de estado
//TODO: Por conta das renderizações desnecessarias

function AssetsTemplate() {
  return (
    <div>
      <Header>
        <div className="flex gap-2 h-[96%]">
          <TreeViewAssets />
          <div className="border basis-2/3 rounded-sm">
            <ComponentDetail titleComponent="MOTOR RT COAL AF01" />
          </div>
        </div>
      </Header>
    </div>
  );
}

export default AssetsTemplate;
