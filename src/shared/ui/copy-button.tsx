"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "@/shared/icon";
import { cn } from "@/shared/utils/clsx";

interface CopyButtonProps {
  value: string;
  className?: string;
  /** сколько мс показывать check после копирования */
  resetDelay?: number;
  ariaLabel?: string;
}

export const CopyButton = ({
  value,
  className,
  resetDelay = 2000,
  ariaLabel = "Скопировать",
}: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // чистим таймер при размонтировании — иначе setState после unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      // современный API
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        // fallback для старых браузеров / http
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.append(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }

      setIsCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setIsCopied(false), resetDelay);
    } catch {
      // не удалось — можно показать тост
    }
  }, [value, resetDelay]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={isCopied ? "Скопировано" : ariaLabel}
      className={cn(
        "cursor-pointer transition-colors duration-200 shrink-0 flex items-center justify-center",
        isCopied ? "text-accent" : "hover:text-accent",
        className,
      )}
    >
      {/* обе иконки в DOM — переключаем через opacity/scale, чтобы была плавная анимация */}
      <span className="relative inline-flex w-[24px] h-[24px]">
        <Icon
          icon="copy"
          width={24}
          height={24}
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isCopied
              ? "opacity-0 scale-75 rotate-12"
              : "opacity-100 scale-100 rotate-0",
          )}
        />
        <Icon
          icon="check"
          width={24}
          height={24}
          strokeWidth="2"
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isCopied
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-75 -rotate-12",
          )}
        />
      </span>
    </button>
  );
};
