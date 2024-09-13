export type TreeObject = {
  id: string;
  name: string;
  parentId: string | null;
  sensorType?: string | null;
  status?: string | null;
  locationId?: string | null;
};


export type FetchAssetsResponse = {
  locations: TreeObject[];
  assets: TreeObject[];
}