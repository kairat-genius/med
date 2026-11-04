"use client";
import Icon from "@/shared/icon";
import { useRef, useState } from "react";
import type { SelectProps } from "./select.type";
import { cn } from "@/shared/utils/clsx";
import { useClickOutside } from "@/shared/hooks/useClickOutside";

const Select = ({
  items,
  value,
  onChange,
  className,
  placeholder,
  disabled,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => setIsOpen(false));
  const selectedLabel =
    items.find((item) => item.slug === value)?.title || placeholder;

  return (
    <div
      className={cn("relative min-w-50 max-w-100", className)}
      ref={containerRef}
    >
      {/* --- Trigger --- */}
      <button
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls="select-options"
        aria-haspopup="listbox"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={cn(
          "cursor-pointer h-11 xl:h-13 gap-6 w-full flex items-center justify-between px-4 border border-background bg-background rounded-2xl",
          disabled && "cursor-not-allowed",
        )}
      >
        <span
          className="pointer-events-none text-16 truncate"
          title={selectedLabel}
        >
          {selectedLabel}
        </span>
        <Icon
          icon="chevron-down"
          className={cn(
            "w-5 h-5 xl:w-[24px] xl:h-[24px] transition-transform duration-300 shrink-0",
            isOpen && "rotate-180",
          )}
        />
      </button>
      {/* --- Dropdown --- */}
      <div
        className={cn(
          "z-40 w-full overflow-hidden bg-background transition-all duration-150 rounded-2xl border border-secondary-20 pt-4 pb-4 pl-4",
          "absolute top-[calc(100%+var(--spacing-2))] left-0",
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-1",
        )}
        aria-hidden={!isOpen}
      >
        <ul className="w-full flex flex-col max-h-59.75 gap-1 text-16 scrollbar">
          {items.length > 0 ? (
            items.map((item, index) => {
              const isSelected = item.slug === value;
              return (
                <li
                  key={index}
                  onClick={() => {
                    onChange(item.slug);
                    setIsOpen(false);
                  }}
                  title={item.title}
                  className={cn(
                    "h-9 hover:text-accent flex items-center cursor-pointer gap-4 justify-between",
                    !isSelected && "pr-5 xl:pr-[24px]",
                  )}
                >
                  <span className="truncate">{item.title}</span>
                  {isSelected && (
                    <Icon
                      icon="check"
                      strokeWidth="1.5"
                      className="h-5 w-5 xl:h-[24px] xl:w-[24px]"
                    />
                  )}
                </li>
              );
            })
          ) : (
            <li className="text-center text-[14px]">Nothing found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Select;
