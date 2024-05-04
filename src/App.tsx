import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Accounts from "./pages/accounts/Accounts";
import Account from "./pages/account/Account";
import AccountGeneral from "./pages/account/AccountGeneral";
import AccountAddress from "./pages/account/AccountAddress";
import AccountCompany from "./pages/account/AccountCompany";

const router = createHashRouter([
  {
    element: <Layout />,
    path: "#",
    children: [
      {
        path: "/",
        element: <Home />,
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
