import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
interface IPropsCheckinSampleDisplayData {
  dataSample: number[] | undefined;
}

export const CheckinSampleDisplayData = ({
  dataSample,
}: IPropsCheckinSampleDisplayData) => {
  return (
    <Stack>
      <Typography variant="h6">This is the selected sample:</Typography>
      <Typography>[{dataSample?.join(", ")}]</Typography>
    </Stack>
  );
};
