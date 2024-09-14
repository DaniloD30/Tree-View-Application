export type TreeObject = {
  id: string;
  name: string;
  parentId: string | null;
  sensorType?: string | null;
  sensorId?: string | null;
  status?: string | null;
  locationId?: string | null;
  children?: TreeObject[];
};


export type FetchAssetsResponse = {
  locations: TreeObject[];
  assets: TreeObject[];
}