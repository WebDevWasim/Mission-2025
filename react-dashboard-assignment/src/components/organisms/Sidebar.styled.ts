import styled from "styled-components";

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? "250px" : "0")};
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
`;

export const MenuItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${(props) => (props.isActive ? "#EBF8FF" : "transparent")};
  color: ${(props) => (props.isActive ? "#2B6CB0" : "#4A5568")};

  &:hover {
    background: #f7fafc;
  }
`;

export const MenuIcon = styled.span`
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

export const MenuText = styled.span`
  font-size: 14px;
`;

export const MenuList = styled.div`
  margin-top: 16px;
`;
