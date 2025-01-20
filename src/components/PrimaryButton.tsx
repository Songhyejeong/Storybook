type PrimaryButtonTheme = 'dark' | 'light' | 'social' | 'text';

interface PrimaryButtonProps {
  theme: PrimaryButtonTheme;
  isDisabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
}

const dark = 'bg-primary text-white';
const light = 'bg-white text-primary';
const social = 'bg-social text-white';
const text = 'bg-mono200 text-white';
const disabled = 'disabled:bg-mono300 text-mono200';

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

const PrimaryButton = ({
  theme,
  onClick,
  children,
  isDisabled,
}: PrimaryButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={`w-full h-[59px]  rounded-primary-button ${disabled} ${color[theme]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
