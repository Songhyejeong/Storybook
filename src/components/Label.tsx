interface LabelProps {
  htmlFor: string;
  children: string;
}

export const Label = ({ htmlFor, children }: LabelProps) => {
  return (
    <label className="text-sm text-red" htmlFor={htmlFor}>
      {children}
    </label>
  );
};
