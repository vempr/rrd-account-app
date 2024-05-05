import { useEffect, useState, useMemo } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { useGetUserByIdQuery } from "../../services/usersApi";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { buyAccount } from "../../store/features/host/hostSlice";
import { AccountType } from "../../schema/accountSchema";
import AccountSkeletonLoader from "./AccountSkeletonLoader";
import arrowBack from "../../images/arrow-back.svg";

type ContextType = {
  account: AccountType;
  loading: boolean;
};

export default function Account() {
  const [link, setLink] = useState("");
  const [display, setDisplay] = useState("");

  const accounts = useAppSelector((state) => state.host.accounts);
  const dispatch = useAppDispatch();

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

  const accountBought = accounts.some((account) => account.id === Number(id));
  const buy = () => {
    if (!accountBought && data) dispatch(buyAccount(data));
  };

  const underline = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "rounded-xl border px-2 py-1 font-bold bg-neutral-800"
      : "rounded-xl border px-2 py-1";

  if (data && !isLoading) {
    return (
      <div className="flex w-screen flex-col items-center">
        <div className="mb-4 text-sm font-bold lg:text-base">
          <NavLink
            to={`../accounts${link}`}
            className="flex flex-row items-center gap-x-2"
          >
            <img className="h-7" src={arrowBack} />
            <p>Back to {display} Accounts</p>
          </NavLink>
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
        <button
          onClick={buy}
          className={`${accountBought ? "bg-emerald-600 text-black" : ""} rounded-lg border px-4 py-2 text-2xl font-bold transition-all duration-100 hover:bg-emerald-400 hover:text-black active:bg-emerald-600`}
        >
          {accountBought ? "Account Bought!" : "Buy Account"}
        </button>
      </div>
    );
  }

  return <AccountSkeletonLoader />;
}

export function useAccountContext() {
  return useOutletContext<ContextType>();
}
