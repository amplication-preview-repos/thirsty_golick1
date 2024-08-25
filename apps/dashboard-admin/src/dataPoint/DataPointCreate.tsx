import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const DataPointCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <NumberInput step={1} label="Intensity" source="intensity" />
        <NumberInput step={1} label="Likelihood" source="likelihood" />
        <TextInput label="Region" source="region" />
        <NumberInput step={1} label="Relevance" source="relevance" />
        <TextInput label="Topics" source="topics" />
        <NumberInput step={1} label="Year" source="year" />
      </SimpleForm>
    </Create>
  );
};
