import { Outlet } from "react-router";
import { AppContainer, AppContent, SidebarContent } from "./AppLayout.styled";
import Sidebar from "../../organisms/sidebar/Sidebar";
import Header from "../../organisms/header/Header";

const Layout = () => {
  return (
    <AppContainer>
      <Header />
      <AppContent>
        <Sidebar />
        <SidebarContent>
          <Outlet />
        </SidebarContent>
      </AppContent>
    </AppContainer>
  );
};

export default Layout;
