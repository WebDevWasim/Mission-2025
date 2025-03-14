import styled from "styled-components";

export const CurrencyInputContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: var(--primary-grey);
  font-weight: 600;
`;

export const StyledInput = styled.input<{
  isReadonly: boolean;
}>`
  width: 150px;
  border: none;
  padding: 8px 0;
  font-size: 1.5rem;
  font-weight: 600;
  outline: none;
  border-radius: 4px;
  background: none;
  cursor: auto;
  color: var(--primary-grey);
  ${({ isReadonly }) =>
    !isReadonly &&
    ` padding: 8px 4px;
      background-color: #fff;
      border: 1px dashed var(--secondary-grey);
  `};
`;
