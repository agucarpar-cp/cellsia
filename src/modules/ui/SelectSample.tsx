import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

interface IPropsSelectSample {
  optionsToDisplay: string[] | undefined;
  onChange: (value: string) => void;
  selectedSample: string | null;
}

export const SelectSample = ({
  optionsToDisplay,
  onChange,
  selectedSample,
}: IPropsSelectSample) => {
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
