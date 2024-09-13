import { useQuery } from "@tanstack/react-query";
import { baseApi } from "../../libs/axios";
import { Company } from "./types";
import { createUseCompanies } from "./keys";

export const useCompanies = () => {
  return useQuery({
    queryKey: createUseCompanies(),
    queryFn: async () => {
      const url = `/companies`;

      const { data } = await baseApi.get<Company[]>(url);

      return data;
    },
    retry: false,
  });
};
