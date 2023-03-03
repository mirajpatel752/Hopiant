import { lazy } from "react";

const RoutesPaths = [
  {
    path: "/",
    component: lazy(() => import("../../Pages/card")),
  },
  {
    path: "/card-details",
    component: lazy(() => import("../../Pages/carddetails")),
  },
];

export { RoutesPaths };
