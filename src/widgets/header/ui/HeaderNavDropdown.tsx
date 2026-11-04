"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "@/shared/icon";
import { cn } from "@/shared/utils/clsx";
import type { NavDropdownItem } from "../data/header-nav.data";

interface HeaderNavDropdownProps {
  item: NavDropdownItem;
}

export const HeaderNavDropdown = ({ item }: HeaderNavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="flex items-center cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onFocus={() => setIsOpen(true)}
      >
        {item.label}
        <Icon
          icon="chevron-down"
          width={16}
          height={16}
          className={cn(
            "ml-2 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {/* Мостик — pt-3 заполняет зазор, чтобы hover не пропадал */}
      <div
        className={cn(
          "absolute left-0 top-full pt-3 transition-opacity duration-200",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <ul className="bg-background rounded-3xl border border-secondary-20 p-6 min-w-70 flex flex-col gap-2">
          {item.items.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block text-[14px] hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};