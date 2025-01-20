interface ErrorMessageProps {
  children: string;
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <p className="text-xs text-error">{children}</p>;
};
