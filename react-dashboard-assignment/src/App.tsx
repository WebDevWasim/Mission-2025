import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/templates/appLayout/AppLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Projects from "./pages/projects/Projects";
import routes from "./constants/routes";
import Settings from "./pages/settings/Settings";

const App = () => {
  const { dashboard, settings, projects } = routes;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to={dashboard} />} />
          <Route path={dashboard} element={<Dashboard />} />
          <Route path={projects} element={<Projects />} />
          <Route path={settings} element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
