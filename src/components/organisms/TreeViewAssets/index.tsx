import { useMemo } from "react";
import { useCompanyStore } from "../../../store/company";
import { buildTree } from "../../../utils/build-tree";
import Accordion from "../../atoms/Accordion";
import { TextField } from "../../atoms/Input";
import { useFetchAssets } from "../../../services/assets";
import { TreeObject } from "../../../services/assets/types";

function TreeViewAssets() {
  const { id } = useCompanyStore();

  const { data } = useFetchAssets(id);

  const treeAssets: TreeObject[] = useMemo(() => {
    return data && buildTree(data.locations, data.assets);
  }, [data]);

  //TODO: A treeAssets vai ter que ficar na Store, os filtros vão ser com base nela

  return (
    <div className="border basis-1/3 rounded-sm flex flex-col">
      <TextField
        placeholder="Buscar Ativo ou Local"
        maxLength={256}
        endAdornment={<img src="search.svg" />}
      />
      {treeAssets &&
        treeAssets.map((item, index) => <Accordion key={index} node={item} />)}
    </div>
  );
}

export default TreeViewAssets;
