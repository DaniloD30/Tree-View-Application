import { baseApi } from "../../libs/axios";
import { createUseFetchAssets } from "./keys";
import { TreeObject, FetchAssetsResponse } from "./types";
import { useQuery } from "@tanstack/react-query";

async function getAssets(companyId: string): Promise<TreeObject[]> {
  const { data } = await baseApi.get(`/companies/${companyId}/assets`);
  return data;
}

async function getLocations(companyId: string): Promise<TreeObject[]> {
  const { data } = await baseApi.get(`/companies/${companyId}/locations`);
  return data;
}

async function getCompanyAssets(companyId: string) {
  return Promise.all([getAssets(companyId), getLocations(companyId)])
    .then(([assets, locations]) => {
      return { assets, locations };
    })
    .catch(() => {
      return { assets: [], locations: [] };
    });
}

export function useFetchAssets(companyId: string) {
  return useQuery<FetchAssetsResponse>({
    queryKey: createUseFetchAssets(companyId),
    queryFn: () => getCompanyAssets(companyId),
    enabled: companyId !== "",
  });
}
