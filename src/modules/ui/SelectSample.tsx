import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

interface IPropsSelectComp {
  optionsToDisplay: string[] | undefined;
  onChange: (value: string) => void;
  selectedSample: string | null;
}

export const SelectSample = ({
  optionsToDisplay,
  onChange,
  selectedSample,
}: IPropsSelectComp) => {
  return (
    <Select
      onChange={(e) => onChange(e.target.value as string)}
      value={selectedSample || ""}
    >
      {optionsToDisplay?.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};
