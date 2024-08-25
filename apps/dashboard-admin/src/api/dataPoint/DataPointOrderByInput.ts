import { SortOrder } from "../../util/SortOrder";

export type DataPointOrderByInput = {
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  intensity?: SortOrder;
  likelihood?: SortOrder;
  region?: SortOrder;
  relevance?: SortOrder;
  topics?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
