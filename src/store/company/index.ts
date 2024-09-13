import { create } from "zustand";
import { Company } from "../../services/companies/types";
import { CompanyStore } from "./types";

export const useCompanyStore = create<CompanyStore>((set) => ({
  id: "",
  name: "",
  addCompany: (company: Company) =>
    set(() => ({
      id: company.id,
      name: company.name,
    })),
}));
