import styled from "styled-components";
import { Button } from "../../atoms/Botton";

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? "250px" : "50px")};
  background-color: var(--primary-white);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavItems = styled.nav<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .active {
    font-weight: 800;
    background-color: var(--secondary-white);
    color: var(--primary-grey);
  }

  a {
    color: var(--secondary-grey);
    padding: 10px;
    font-weight: 600;
    text-decoration: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    ${({ isOpen }) => !isOpen && `justify-content: center;`};
    transition: width 0.3s ease;

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`;

export const ToggleSidebarButton = styled(Button)`
  align-self: flex-end;
  padding: 8px;
  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`;
