import { useEffect, useState, useMemo } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { useGetUserByIdQuery } from "../../services/usersApi";
import { AccountType } from "../../schema/accountSchema";
import AccountSkeletonLoader from "./AccountSkeletonLoader";

type ContextType = {
  account: AccountType;
  loading: boolean;
};

export default function Account() {
  const [link, setLink] = useState("");
  const [display, setDisplay] = useState("");

  const { id } = useParams();
  const location = useLocation();
  const filter: string | null = useMemo(
    () => (location.state ? location.state.filter : null),
    [],
  );
  const { data, isLoading } = useGetUserByIdQuery(id as string);

  useEffect(() => {
    if (filter) {
      if (filter === "odd") {
        setLink("?filter=odd");
        setDisplay("Odd Id");
      } else {
        setLink("?filter=even");
        setDisplay("Even Id");
      }
    } else {
      setDisplay("all");
    }
  }, [filter]);

  const underline = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "rounded-xl border px-2 py-1 font-bold bg-neutral-800"
      : "rounded-xl border px-2 py-1";

  if (data && !isLoading) {
    return (
      <div className="flex w-screen flex-col items-center">
        <div className="mb-4 text-sm font-bold lg:text-base">
          <NavLink
            to={`/accounts${link}`}
          >{`<-  Back to ${display} Accounts`}</NavLink>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">{data.username}</h1>
          <p className="italic">{data.name}</p>
        </div>
        <div className="my-2 flex flex-row gap-x-2">
          <NavLink end to="." className={underline}>
            General
          </NavLink>
          <NavLink to="business" className={underline}>
            Business
          </NavLink>
          <NavLink to="address" className={underline}>
            Address
          </NavLink>
        </div>
        <div className="flex h-64 items-center">
          <Outlet
            context={{ account: data as AccountType, loading: isLoading }}
          />
        </div>
        <button className="rounded-lg border px-4 py-2 text-2xl font-bold transition-all duration-100 [word-spacing:-3px] hover:bg-emerald-400 hover:text-black active:bg-emerald-600">
          Buy Account
        </button>
      </div>
    );
  }

  return <AccountSkeletonLoader />;
}

export function useAccountContext() {
  return useOutletContext<ContextType>();
}
