import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type DataPointWhereInput = {
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  intensity?: IntNullableFilter;
  likelihood?: IntNullableFilter;
  region?: StringNullableFilter;
  relevance?: IntNullableFilter;
  topics?: StringNullableFilter;
  year?: IntNullableFilter;
};
