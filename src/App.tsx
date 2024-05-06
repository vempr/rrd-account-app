import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Home from "./pages/home/Home";
import Host from "./pages/host/Host";
import Dashboard from "./pages/host/Dashboard";
import HostAccounts from "./pages/host/HostAccounts";
import About from "./pages/about/About";
import Accounts from "./pages/accounts/Accounts";
import Account from "./pages/account/Account";
import AccountGeneral from "./pages/account/AccountGeneral";
import AccountAddress from "./pages/account/AccountAddress";
import AccountCompany from "./pages/account/AccountCompany";

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/host",
        element: <Host />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "accounts",
            element: <HostAccounts />,
          },
          {
            path: "account/:id",
            element: <Account />,
            children: [
              {
                index: true,
                element: <AccountGeneral />,
              },
              {
                path: "address",
                element: <AccountAddress />,
              },
              {
                path: "business",
                element: <AccountCompany />,
              },
            ],
          },
        ],
      },
      {
        path: "/accounts",
        element: <Accounts />,
      },
      {
        path: "/account/:id",
        element: <Account />,
        children: [
          {
            index: true,
            element: <AccountGeneral />,
          },
          {
            path: "address",
            element: <AccountAddress />,
          },
          {
            path: "business",
            element: <AccountCompany />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
