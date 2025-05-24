import styled from "styled-components";

export const AppHeader = styled.header`
  height: 70px;
  color: var(--primary-white);
  background-color: var(--primary-grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.h1`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 1.6rem;
  color: var(--primary-white);
  span {
    height: 1.6rem;
  }
`;
export const SaveButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;
