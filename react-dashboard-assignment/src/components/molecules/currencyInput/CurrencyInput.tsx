import { LuDollarSign } from "react-icons/lu";
import { CurrencyInputContainer, StyledInput } from "./CurrencyInput.styled";

interface CurrencyInputProps {
  value: number;
  onChange: (newValue: number) => void;
  isEdit?: boolean;
  required?: boolean;
}

const CurrencyInput = ({
  value,
  onChange,
  isEdit = false,
  required = true,
}: CurrencyInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <CurrencyInputContainer>
      $
      <StyledInput
        type="number"
        value={value}
        onChange={handleChange}
        readOnly={!isEdit}
        required={required}
        isReadonly={!isEdit}
      />
    </CurrencyInputContainer>
  );
};

export default CurrencyInput;
