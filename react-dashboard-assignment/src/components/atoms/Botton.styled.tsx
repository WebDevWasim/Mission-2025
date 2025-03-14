import styled from "styled-components";
import { ButtonVariant } from "./Botton";

export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  font-size: 1rem;
  font-weight: 500;
  padding: 10px 15px 8px 15px;
  border-radius: 5px;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 5px;
  &:hover {
    opacity: 0.8;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `
          background-color: var(--secondary-grey);
          color: var(--primary-white);
        `;
      case "secondary":
        return `
          background-color: var(--secondary-white);
          color: var(--primary-grey);
        `;
      default:
        return "";
    }
  }}
`;
