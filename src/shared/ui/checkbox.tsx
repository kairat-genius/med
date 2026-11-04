"use client";

import { type ReactNode } from "react";
import Icon from "../icon";
import { cn } from "../utils/clsx";

interface CheckboxProps {
  checked?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const Checkbox = ({ onClick, children, checked, className }: CheckboxProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 cursor-pointer text-secondary hover:text-primary transition-colors duration-300",
        className,
      )}
    >
      <Icon
        icon={checked ? "square-check" : "square"}
        className="w-5 h-5 xl:w-[24px] xl:h-[24px]"
      />

      <div className="text-primary text-18 font-semibold text-start">
        {children}
      </div>
    </button>
  );
};

Checkbox.displayName = "Checkbox";

export default Checkbox;
