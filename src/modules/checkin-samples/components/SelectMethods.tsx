import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

interface IPropsSelectMethod {
  optionsToDisplay: string[] | undefined;
  onChange: (value: string[]) => void;
  selectedMethods: string[] | null;
}

export const SelectMethods = ({
  optionsToDisplay,
  onChange,
  selectedMethods,
}: IPropsSelectMethod) => {
  return (
    <Select
      onChange={(e) => onChange(e.target.value as string[])}
      value={selectedMethods || []}
      multiple
    >
      {optionsToDisplay?.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};
