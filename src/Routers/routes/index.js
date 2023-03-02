import { lazy } from "react";

const RoutesPaths = [
  {
    path: "/",
    component: lazy(() => import("../../Pages/card")),
  },
  {
    path: "/shopsdefault",
    component: lazy(() => import("../../Pages/carddetails")),
  },
];

export { RoutesPaths };
