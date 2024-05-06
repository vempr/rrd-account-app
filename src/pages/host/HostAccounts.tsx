import HostAccountCard from "./HostAccountCard";
import { Link } from "react-router-dom";
import { useAccountContext } from "./Host";

export default function Dashboard() {
  const { accounts } = useAccountContext();
  return (
    <div className="mx-10 flex flex-row flex-wrap gap-6">
      {accounts.map((account) => (
        <HostAccountCard account={account} />
      ))}
      {accounts.length === 0 ? (
        <h1 className="-translate-y-2">
          You don't have any accounts. Head over to the{" "}
          <Link to="/accounts" className="font-bold underline">
            accounts page
          </Link>{" "}
          to buy an account!
        </h1>
      ) : null}
    </div>
  );
}
