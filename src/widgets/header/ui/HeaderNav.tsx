import Link from "next/link";

import { HeaderNavDropdown } from "./HeaderNavDropdown";
import { navItems } from "../data/header-nav.data";

export const HeaderNav = () => {
  return (
    <nav className="hidden xl:block">
      <ul className="flex items-center gap-10 text-[14px]">
        {navItems.map((item) => (
          <li key={item.label}>
            {item.type === "link" ? (
              <Link href={item.href}>
                {item.label}
              </Link>
            ) : (
              <HeaderNavDropdown item={item} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};