interface IPropsWrapperDisplayResults {
  selectedMethods: string[];
}

export const WrapperDisplayResults = ({
  selectedMethods,
}: IPropsWrapperDisplayResults) => {
  return (
    <ol>
      {selectedMethods.map((method, index) => (
        <li key={method + index}>{methodsNamesListArray[method]}</li>
      ))}
    </ol>
  );
};
