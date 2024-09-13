import { Company } from "../../services/companies/types";

export type CompanyStore = {
  id: string;
  name: string;
  addCompany: (company: Company) => void;
};
