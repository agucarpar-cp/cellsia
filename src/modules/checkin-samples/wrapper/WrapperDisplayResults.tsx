import { methodsNamesList } from "../../../utils/libs/lib";

interface IPropsWrapperDisplayResults {
  selectedMethods: string[];
}

export const WrapperDisplayResults = ({
  selectedMethods,
}: IPropsWrapperDisplayResults) => {
  return (
    <ol>
      {selectedMethods.map((method, index) => (
        <li key={method + index}>
          {methodsNamesList.find((m) => m.value === method)?.label}
        </li>
      ))}
    </ol>
  );
};
