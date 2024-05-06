import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-10 flex flex-col justify-center gap-x-4 lg:mx-[20vw] lg:flex-row">
      <h1 className="text-5xl font-bold lg:text-9xl">Oops!</h1>
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
