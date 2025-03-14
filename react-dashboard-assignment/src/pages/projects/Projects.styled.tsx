import styled from "styled-components";

export const GridWrapper = styled.div`
  height: calc(100vh - 110px);
  width: 100%;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: var(--primary-white);
  border-radius: 2px;
`;

export const ProgressBar = styled.div<{ value: number }>`
  width: ${({ value }) => value}%;
  background-color: ${(props) => props.color};
  height: 20px;
  text-align: right;
  color: white;
  line-height: 20px;
  border-radius: 2px;
  font-size: 12px;
`;
