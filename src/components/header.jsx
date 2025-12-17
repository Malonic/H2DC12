import { NavLink } from "react-router-dom";

export default function Header() {
  const navItem =
    "h-full flex items-center px-6 text-[13px] tracking-[0.2em] uppercase transition";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[80px]">

          {/* LEFT: Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="H2DC12 Avenue"
              className="h-[48px] w-auto object-contain"
            />
          </div>

          {/* CENTER: Navigation */}
          <nav className="hidden md:flex h-full">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${navItem} ${
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-700 hover:text-slate-900"
                }`
              }
            >
              Homepage
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${navItem} ${
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-700 hover:text-slate-900"
                }`
              }
            >
              Products & Services
            </NavLink>

            <NavLink
              to="/ip"
              className={({ isActive }) =>
                `${navItem} ${
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-700 hover:text-slate-900"
                }`
              }
            >
              IPs
            </NavLink>

            <NavLink
              to="/team"
              className={({ isActive }) =>
                `${navItem} ${
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-700 hover:text-slate-900"
                }`
              }
            >
              Team
            </NavLink>
          </nav>

          {/* RIGHT: Contact */}
          <NavLink
            to="/contact"
            className="hidden md:flex items-center h-full px-6 text-[13px] tracking-[0.2em] uppercase text-slate-700 hover:text-slate-900"
          >
            Contact
          </NavLink>

        </div>
      </div>
    </header>
  );
}
