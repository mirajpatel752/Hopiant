import {  Route, Routes } from "react-router-dom";

import { RoutesPaths } from "./routes/index";

const Router = () => {
  const FinalRoute = (props) => {
    const route = props?.route;
      return <route.component {...props} />;
  };

  return (
    <>
      <Routes>
        {RoutesPaths.map((route, index) => {
          return (
            <Route
              exact
              key={index}
              path={route?.path}
              element={<FinalRoute route={route} />}
            />
          );
        })}
      </Routes>
    </>
  );
};

export default Router;
