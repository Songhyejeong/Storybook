import { useState } from 'react';
import { ErrorMessage } from './ErrorMessage';
import IconButton from './IconButton';

interface DefaultTextFieldProps {
  errormessage: string;
  iconAlt: string;
  iconPath: string;
  onIconClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  placeholder: string;
  onChange: () => void;
  value: string;
  isError: boolean;
  id: string;
}

const DefaultTextField = ({
  id,
  errormessage,
  iconAlt,
  iconPath,
  onIconClick,
  placeholder,
  onChange,
  value,
  isError,
}: DefaultTextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? 'border-secondary'
    : !value
    ? 'border-mono300'
    : 'border-primary';

  return (
    <div className="relative">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-primary 
    border-b 
    ${borderColor}`}
      >
        <input
          id={id}
          className="outline-none"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!!value && (
          <IconButton alt={iconAlt} iconPath={iconPath} onClick={onIconClick} />
        )}
      </div>
      {isError && <ErrorMessage>{errormessage}</ErrorMessage>}
    </div>
  );
};

export default DefaultTextField;
