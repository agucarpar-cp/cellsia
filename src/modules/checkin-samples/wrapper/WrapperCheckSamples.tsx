import { useQuery } from "@tanstack/react-query";
import { dummyGetAllCellMethods } from "../../../services/cellMethods";

export const WrapperCheckSamples = () => {
  const {
    data: availableSamples,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["availableSamples"],
    queryFn: dummyGetAllCellMethods,
  });

  if (isLoading) return <div>Cargando muestras disponibles...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <h2>Muestras disponibles</h2>
      <ul>
        {availableSamples?.map((sample) => (
          <li key={sample}>{sample}</li>
        ))}
      </ul>
    </div>
  );
};
