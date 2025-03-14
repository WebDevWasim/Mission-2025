import { LuLayoutDashboard, LuSettings, LuTable } from "react-icons/lu";
import Dashboard from "../pages/dashboard/Dashboard";
import Settings from "../pages/settings/Settings";
import Projects from "../pages/projects/Projects";

type RouteProps = {
  name: string;
  path: string;
  icon: React.ElementType;
  component: React.FC;
};

export const dashboardPath = "/dashboard";

const routes: RouteProps[] = [
  {
    name: "Dashboard",
    path: dashboardPath,
    icon: LuLayoutDashboard,
    component: Dashboard,
  },
  { name: "Projects", path: "/projects", icon: LuTable, component: Projects },
  {
    name: "Settings",
    path: "/settings",
    icon: LuSettings,
    component: Settings,
  },
];

export default routes;
