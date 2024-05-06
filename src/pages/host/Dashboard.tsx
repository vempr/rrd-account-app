import { useAccountContext } from "./Host";

export default function Dashboard() {
  const { accounts } = useAccountContext();
  return (
    <div className="mx-10 -translate-y-2">
      <h1 className="italic">No. Accounts</h1>
      <p className="text-9xl">{accounts.length}</p>
    </div>
  );
}
