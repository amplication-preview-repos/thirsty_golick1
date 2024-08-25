import { DataPoint as TDataPoint } from "../api/dataPoint/DataPoint";

export const DATAPOINT_TITLE_FIELD = "city";

export const DataPointTitle = (record: TDataPoint): string => {
  return record.city?.toString() || String(record.id);
};
