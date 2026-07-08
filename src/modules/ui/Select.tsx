import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

interface IPropsSelectComp {
  optionsToDisplay?: string[];
}

export const SelectComp = ({ optionsToDisplay }: IPropsSelectComp) => {
  return (
    <Select>
      {optionsToDisplay?.map((option) => (
        <MenuItem key={option}>{option}</MenuItem>
      ))}
    </Select>
  );
};
