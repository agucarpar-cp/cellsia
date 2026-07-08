import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  methodsNamesList,
  methodsNamesListArray,
  type MethodName,
} from "../../../utils/libs/lib";

interface IPropsSelectMethod {
  onChange: (value: MethodName[]) => void;
  selectedMethods: MethodName[] | null;
}

export const SelectMethods = ({
  onChange,
  selectedMethods,
}: IPropsSelectMethod) => {
  return (
    <Select
      onChange={(e) => onChange(e.target.value as MethodName[])}
      value={selectedMethods || []}
      multiple
      renderValue={(selectedMethods) =>
        selectedMethods
          ?.map((method) => methodsNamesList[method].label)
          .join(", ")
      }
    >
      {methodsNamesListArray.map((methodKey) => (
        <MenuItem key={methodKey} value={methodKey}>
          {methodsNamesList[methodKey].label}
        </MenuItem>
      ))}
    </Select>
  );
};
