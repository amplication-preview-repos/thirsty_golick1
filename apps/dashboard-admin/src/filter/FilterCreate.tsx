import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FilterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <NumberInput step={1} label="End Year" source="endYear" />
        <TextInput label="PEST" source="pest" />
        <TextInput label="Region" source="region" />
        <TextInput label="Sector" source="sector" />
        <TextInput label="Source" source="source" />
        <TextInput label="SWOT" source="swot" />
        <TextInput label="Topics" source="topics" />
      </SimpleForm>
    </Create>
  );
};
