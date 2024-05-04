import { Link } from "react-router-dom";
import type { AccountType } from "../../schema/accountSchema";

interface CardProps {
  user: AccountType;
  filter: string | null;
}

export default function UserCard({ user, filter }: CardProps) {
  return (
    <Link to={`/account/${user.id}`} state={{ filter: filter }}>
      <section className="w-[calc(100vw-75px)] rounded-lg border p-6 transition-opacity hover:opacity-80 lg:w-96">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">{user.username}</p>
            <p className="text-sm italic opacity-80">{user.name}</p>
          </div>
          <p className="text-5xl opacity-30">{user.id}</p>
        </div>
        <hr className="my-5 opacity-40"></hr>
        <div>
          <p className="text-xl font-semibold">{user.company.name}</p>
          <p className="text-xs">{user.company.bs}</p>
        </div>
      </section>
    </Link>
  );
}
