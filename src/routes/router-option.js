import React from "react";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import { ROUTE_NAME } from "./router.constant";

export const RouteItems = [
    {
        id: 1,
        path: ROUTE_NAME.ROOT,
        exact: true,
        component: React.lazy(() => import("../pages/login/LoginPage")),
        element: <LoginPage/>
    },
    {
        id: 2,
        path: ROUTE_NAME.HOME,
        exact: true,
        component: React.lazy(() => import("../pages/home/HomePage")),
        element: <HomePage/>

    },
    {
        id: 3,
        path: "*",
        component: React.lazy(() => import("../pages/NotFoundPage")),
        element: <NotFoundPage/>

    },
  
]

