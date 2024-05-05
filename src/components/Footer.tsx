import { Link, NavLink } from "react-router-dom";
import ghLogo from "../images/github-logo.png";

export default function Header() {
  const underline = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-bold shadow-white" : "";

  return (
    <footer className="my-10 flex flex-col items-center gap-y-1 bg-black">
      <div className="flex flex-row items-center gap-x-2">
        <p className="text-2xl italic">
          AccStore<sup>&copy;</sup>
        </p>
        <Link to="https://github.com/vempr/rrd-account-app" target="_blank">
          <img src={ghLogo} className="h-10 w-10" alt="GitHub Logo" />
        </Link>
      </div>
      <nav>
        <ul
          className="flex justify-center gap-x-4 text-sm opacity-80"
          role="menubar"
        >
          <li role="none">
            <NavLink role="menuitem" to="/" className={underline}>
              Home
            </NavLink>
          </li>
          <li role="none">
            <NavLink role="menuitem" to="/host" className={underline}>
              Host
            </NavLink>
          </li>
          <li role="none">
            <NavLink role="menuitem" to="/accounts" className={underline}>
              Accounts
            </NavLink>
          </li>
          <li role="none">
            <NavLink role="menuitem" to="/about" className={underline}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
