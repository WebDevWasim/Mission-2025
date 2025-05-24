import { StyledButton } from "./Botton.styled";

export type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  variant?: ButtonVariant;
  name?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  style?: React.CSSProperties;
};

export const Button = ({
  name,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
  style,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={style}
      {...props}
    >
      {icon && <>{icon}</>}
      {name && name}
    </StyledButton>
  );
};
