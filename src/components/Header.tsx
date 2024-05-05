import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const underline = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-bold" : "";

  const lgNav = (
    <ul
      role="menubar"
      className="flex -translate-x-4 flex-col gap-x-6 lg:flex-row"
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
  );

  const mobileNavButton = (
    <button
      onClick={() => setHamburgerActive(!hamburgerActive)}
      className="flex flex-col gap-y-2"
    >
      <div className="h-1 w-10 rounded-lg bg-white"></div>
      <div className="h-1 w-10 rounded-lg bg-white"></div>
      <div className="h-1 w-10 rounded-lg bg-white"></div>
    </button>
  );

  const mobileNavMenu = (
    <ul
      role="menubar"
      className={`${hamburgerActive ? "absolute" : "hidden"} right-8 top-28 bg-white px-4 py-2 text-right text-2xl text-black shadow-2xl shadow-black`}
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
  );

  return (
    <header className="flex w-screen flex-row items-center justify-between p-8 pb-6">
      <NavLink to="/" className="text-4xl font-bold">
        AccStore
      </NavLink>
      <nav className="hidden lg:block">{lgNav}</nav>
      <nav className="block lg:hidden">
        <div className="flex items-center">{mobileNavButton}</div>
        {mobileNavMenu}
      </nav>
    </header>
  );
}
