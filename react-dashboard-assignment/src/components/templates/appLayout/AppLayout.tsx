import { Outlet } from "react-router";
import { AppContainer, AppContent, AppHeader } from "./AppLayout.styled";
import Sidebar from "../../organisms/Sidebar";

const Layout = () => {
  return (
    <AppContainer>
      <AppHeader>Header</AppHeader>
      <AppContent>
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </AppContent>
    </AppContainer>
  );
};

export default Layout;
