import { Navigate, useRoutes } from "react-router-dom";
import LoginForm from "../pages/Outlets/loginForm";
import Dashboard from "../pages/Outlets/dashboard";
import Profile from "../pages/Outlets/profile";
import OutletDetailPage from "../pages/Outlets/outletDetailPage";
import EditOutlets from "../pages/Outlets/editOutlets";
import OutletLogin from "../pages/Resources/outletLogin";
import OutletList from "../pages/Outlets/outletList";
import ResourceDashboard from "../pages/Resources/resourceDashboard";
import ResourcesList from "../pages/Resources/resourcesList";

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
     {
      path: "/outletLogin",
      element: getlocalToken ? <OutletLogin /> : <Navigate to="/login"/>, 
      errorElement: <div>Oops! There was an error.</div>,
    },
    {
      path: "/addResources",
      element: getlocalToken ? <ResourceDashboard /> : <Navigate to="/login"/>,
      errorElement: <div>Oops! There was an error.</div>,
    },
    {
      path: "/resourcesList",
      element: getlocalToken ? <ResourcesList /> : <Navigate to="/login"/>,
      errorElement: <div>Oops! There was an error.</div>,
    },
  ])
  return routes;
}
