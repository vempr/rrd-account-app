import { Link } from "react-router-dom";
import type { AccountType } from "../../schema/accountSchema";

interface CardProps {
  account: AccountType;
}

export default function HostAccountCard({ account }: CardProps) {
  return (
    <Link to={`../account/${account.id}`}>
      <section className="w-[calc(100vw-75px)] rounded-lg border p-6 transition-opacity hover:opacity-80 lg:w-96">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">{account.username}</p>
            <p className="text-sm italic opacity-80">{account.name}</p>
          </div>
          <p className="text-5xl opacity-30">{account.id}</p>
        </div>
        <hr className="my-5 opacity-40"></hr>
        <div>
          <p className="text-xl font-semibold">{account.company.name}</p>
          <p className="text-xs">{account.company.bs}</p>
        </div>
      </section>
    </Link>
  );
}
