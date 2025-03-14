import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 0;
  padding: 0;
  background-color: var(--primary-white);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
export const CardHeader = styled.div`
  height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--secondary-white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const CardTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
`;
export const CardBody = styled.div`
  padding: 20px;
`;

export const ActionButton = styled.button`
  background-color: none;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  color: var(--secondary-grey);
  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
