import { NavLink } from "react-router-dom";

export default function Header() {
  const underline = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-bold" : "";

  return (
    <header className="flex w-screen flex-row items-center justify-between p-8 pb-6">
      <NavLink to="/" className="text-4xl font-bold">
        AccStore
      </NavLink>
      <nav className="flex -translate-x-4 gap-x-6">
        <NavLink to="/" className={underline}>
          Home
        </NavLink>
        <NavLink to="/host" className={underline}>
          Host
        </NavLink>
        <NavLink to="/accounts" className={underline}>
          Accounts
        </NavLink>
        <NavLink to="/about" className={underline}>
          About
        </NavLink>
      </nav>
    </header>
  );
}
