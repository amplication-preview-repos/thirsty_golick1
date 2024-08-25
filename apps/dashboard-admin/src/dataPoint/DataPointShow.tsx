import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DataPointShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Intensity" source="intensity" />
        <TextField label="Likelihood" source="likelihood" />
        <TextField label="Region" source="region" />
        <TextField label="Relevance" source="relevance" />
        <TextField label="Topics" source="topics" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Year" source="year" />
      </SimpleShowLayout>
    </Show>
  );
};
