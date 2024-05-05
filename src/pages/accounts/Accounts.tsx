import { Link, useSearchParams } from "react-router-dom";
import { useGetAllUsersQuery } from "../../services/usersApi";
import { AccountType } from "../../schema/accountSchema";
import AccountsCard from "./AccountsCard";
import AccountsSkeletonCard from "./AccountsSkeletonCard";

export default function Accounts() {
  const [URLSearchParams] = useSearchParams();
  const filter = URLSearchParams.get("filter");
  const { data, isLoading } = useGetAllUsersQuery(null);

  const activeButton = (currentFilter: string) =>
    filter === currentFilter
      ? "rounded-md border px-2 py-1 bg-neutral-700"
      : "rounded-md border px-2 py-1";

  const filteredData = filter
    ? data?.filter((user: AccountType) =>
        filter === "odd" ? user.id % 2 !== 0 : user.id % 2 === 0,
      )
    : data;

  const userCardComponents = filteredData?.map((user: AccountType) => (
    <AccountsCard key={user.id} user={user} filter={filter} />
  ));

  const skeletonComponents = Array(10)
    .fill(null)
    .map((_, index) => <AccountsSkeletonCard key={index} />);

  if (isLoading) {
    return (
      <div className="mx-10 flex flex-row flex-wrap gap-6">
        {skeletonComponents}
      </div>
    );
  }

  return (
    <div className="mx-10">
      <div className="ultrawide:absolute ultrawide:left-10 ultrawide:top-36">
        <div className="flex -translate-y-4 flex-row items-center gap-x-2">
          <p>Filter by Id</p>
          <div className="flex flex-row gap-x-2 text-sm">
            <Link to="?filter=odd" className={activeButton("odd")}>
              Odd
            </Link>
            <Link to="?filter=even" className={activeButton("even")}>
              Even
            </Link>
            <Link to="" className={activeButton("")}>
              None
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-6">{userCardComponents}</div>
    </div>
  );
}
