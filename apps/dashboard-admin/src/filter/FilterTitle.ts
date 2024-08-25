import { Filter as TFilter } from "../api/filter/Filter";

export const FILTER_TITLE_FIELD = "city";

export const FilterTitle = (record: TFilter): string => {
  return record.city?.toString() || String(record.id);
};
