import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/templates/appLayout/AppLayout";
import routes from "./constants/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to={routes[0].path} />} />
          {routes.map(({ path, component }, index) => {
            const Component = component;
            return <Route path={path} element={<Component />} key={index} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
