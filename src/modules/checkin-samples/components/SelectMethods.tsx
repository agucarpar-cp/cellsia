import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { methodsNamesList } from "../../../utils/libs/lib";
import { Controller, type Control } from "react-hook-form";

interface IPropsSelectMethods {
  control: Control<TypeFormValues>;
}

type TypeFormValues = {
  selectedSample: string;
  selectedMethods: string[];
};

export const SelectMethods = ({ control }: IPropsSelectMethods) => {
  return (
    <Controller
      name="selectedMethods"
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          onChange={(e) => field.onChange(e.target.value as string[])}
          multiple
          renderValue={(selected: string[]) =>
            selected
              ?.map(
                (method) =>
                  methodsNamesList.find((m) => m.value === method)?.label,
              )
              .join(", ")
          }
        >
          {methodsNamesList.map((method) => (
            <MenuItem key={method.value} value={method.value}>
              {method.label}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
};
