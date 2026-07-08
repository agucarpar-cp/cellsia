import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { methodsNamesList } from "../../../utils/libs/lib";

interface IPropsSelectMethod {
  onChange: (value: string[]) => void;
  selectedMethods: string[] | null;
}

export const SelectMethods = ({
  onChange,
  selectedMethods,
}: IPropsSelectMethod) => {
  return (
    <Select
      onChange={(e) => onChange(e.target.value as string[])}
      value={selectedMethods || []}
      multiple
      renderValue={(selectedMethods) =>
        selectedMethods
          ?.map(
            (method) => methodsNamesList.find((m) => m.value === method)?.label,
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
  );
};
