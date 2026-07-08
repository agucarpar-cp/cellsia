import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller, type Control } from "react-hook-form";

interface IPropsSelectSample {
  optionsToDisplay: string[] | undefined;
  control: Control<TypeFormValues>;
}

type TypeFormValues = {
  selectedSample: string;
  selectedMethods: string[];
};

export const SelectSample = ({
  control,
  optionsToDisplay,
}: IPropsSelectSample) => {
  return (
    <Controller
      name="selectedSample"
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          onChange={(e) => field.onChange(e.target.value as string)}
          value={field.value || ""}
        >
          {optionsToDisplay?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
};
