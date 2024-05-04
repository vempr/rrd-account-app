import { NavLink } from "react-router-dom";

export default function Header() {
  const underline = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-bold shadow-white" : "";

  return (
    <footer className="my-10 flex flex-col bg-black text-center">
      <p className="text-2xl italic">
        AccStore<sup>&copy;</sup>
      </p>
      <nav className="flex justify-center gap-x-2 text-sm opacity-80">
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
    </footer>
  );
}
