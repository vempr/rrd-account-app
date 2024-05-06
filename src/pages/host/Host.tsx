import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import { useAppSelector } from "../../hooks/storeHooks";
import { AccountType } from "../../schema/accountSchema";

type ContextType = {
  accounts: AccountType[];
};

export default function Host() {
  const accounts = useAppSelector((state) => state.host.accounts);

  const underline = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "rounded-xl border font-bold bg-neutral-800 px-2 py-2"
      : "rounded-xl border px-2 py-2";

  return (
    <div className="flex min-h-[calc(100vh-380px)] flex-col">
      <div className="mb-10">
        <nav
          aria-label="Navigate through the host page"
          className="absolute left-10 top-32"
        >
          <ul role="menubar" className="flex flex-row gap-x-4">
            <li role="none">
              <NavLink
                role="menuitem"
                relative="path"
                to="."
                end
                className={underline}
              >
                Dashboard
              </NavLink>
            </li>
            <li role="none">
              <NavLink role="menuitem" to="accounts" className={underline}>
                Accounts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet context={{ accounts: accounts }} />
    </div>
  );
}

export function useAccountContext() {
  return useOutletContext<ContextType>();
}
