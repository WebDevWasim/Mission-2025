import { useState } from "react";
import routes from "../../../constants/routes";
import {
  SidebarContainer,
  NavItems,
  ToggleSidebarButton,
} from "./Sidebar.styled";
import { RiSidebarFoldLine, RiSidebarUnfoldFill } from "react-icons/ri";
import { NavLink } from "react-router";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <SidebarContainer isOpen={isOpen}>
      <NavItems isOpen={isOpen}>
        {routes.map(({ name, path, icon }) => {
          const Icon = icon;
          return (
            <NavLink to={path} end>
              <Icon />
              {isOpen && <span>{name}</span>}
            </NavLink>
          );
        })}
      </NavItems>
      <ToggleSidebarButton
        icon={isOpen ? <RiSidebarFoldLine /> : <RiSidebarUnfoldFill />}
        onClick={() => setIsOpen(!isOpen)}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
