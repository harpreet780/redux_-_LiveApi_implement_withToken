import { Navigate, useRoutes } from "react-router-dom";
import LoginForm from "../pages/loginForm";
import Dashboard from "../pages/dashboard";
import Profile from "../pages/profile";
import OutletList from "../pages/outletList";
import OutletDetailPage from "../pages/outletDetailPage";
import EditOutlets from "../pages/editOutlets";

export const HandleRouters=()=> {
  const getlocalToken = localStorage.getItem("accessToken");

  let routes = useRoutes([
    {
      path: "/login",
      element: <LoginForm />,
      errorElement: <div>Oops! There was an error.</div>,
    },
    {
      path: "/dashboard",
      element: getlocalToken ? <Dashboard /> : <Navigate to="/login"/>,
      errorElement: <div>Oops! There was an error.</div>,
    },
    {
      path: "/profile",
      element: getlocalToken ? <Profile /> : <Navigate to="/login"/>,
      errorElement: <div>Oops! There was an error.</div>,
    },
    {
      path: "/outlets",
      element: getlocalToken ? <OutletList /> : <Navigate to="/login"/>,
      errorElement: <div>Oops! There was an error.</div>,
    },
    {
      path: "/outletsDetail",
      element: getlocalToken ? <OutletDetailPage /> : <Navigate to="/login"/>,
      errorElement: <div>Oops! There was an error.</div>,
    },
    {
      path: "/editOutlets",
      element: getlocalToken ? <EditOutlets /> : <Navigate to="/login"/>,
      errorElement: <div>Oops! There was an error.</div>,
    },
  ])
  return routes;
}
