import type { QueryKey } from "@tanstack/react-query";

export const createUseFetchAssets = (companyId: string): QueryKey => [
  companyId,
];
