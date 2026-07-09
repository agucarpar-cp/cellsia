interface IErrorMessageProps {
  errorMessage: string;
}

export const ErrorMessage = ({ errorMessage }: IErrorMessageProps) => {
  return <div>{errorMessage}</div>;
};
