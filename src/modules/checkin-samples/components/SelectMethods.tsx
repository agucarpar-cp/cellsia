import { useState } from "react";
import { methodsNamesListArray } from "../../../utils/libs/lib";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export const SelectMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState<string[] | null>(null);
  const handleSelectMethod = (methodName: string[]) => {
    setSelectedMethod(methodName as string[]);
    console.log(`Selected method: ${methodName}`);
  };

  return (
    <Select
      onChange={(e) => handleSelectMethod(e.target.value as string[])}
      value={selectedMethod || []}
      multiple
    >
      {methodsNamesListArray.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};
