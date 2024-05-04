import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-[20vw] flex flex-row gap-x-4">
      <h1 className="text-9xl font-bold">Oops!</h1>
      <p>
        It seems like the page you're looking for has wandered off into the
        digital wilderness. Let's try navigating back to safety together. How
        about starting from the{" "}
        <span className="font-bold underline">
          <Link to="/">home page</Link>
        </span>
        ?
      </p>
    </div>
  );
}
