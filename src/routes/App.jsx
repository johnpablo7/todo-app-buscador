import React from "react";
import { HashRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes";

export const Router = () => {
  const elements = useRoutes(routes);

  return elements;
};

export const App = () => {
  return (
    <>
      <HashRouter>
        <Router />
      </HashRouter>
    </>
  );
};
