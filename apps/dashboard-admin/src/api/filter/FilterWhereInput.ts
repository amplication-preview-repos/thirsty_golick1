import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FilterWhereInput = {
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  endYear?: IntNullableFilter;
  id?: StringFilter;
  pest?: StringNullableFilter;
  region?: StringNullableFilter;
  sector?: StringNullableFilter;
  source?: StringNullableFilter;
  swot?: StringNullableFilter;
  topics?: StringNullableFilter;
};
