import { cn } from "@/shared/utils/clsx";
import type { ReactNode } from "react";

interface FormFieldProps {
  error?: string | (string | undefined)[];
  children: ReactNode;
  className?: string;
}

const FormField = ({ error, children, className }: FormFieldProps) => {
  let errorMessages: string[] = [];

  if (Array.isArray(error)) {
    errorMessages = error.filter(Boolean) as string[];
  } else if (error) {
    errorMessages = [error];
  }

  return (
    <div className={cn("flex flex-col gap-2 relative", className, errorMessages.length > 0 ? "mb-10" : "mb-6")}>
      {children}

      {errorMessages.length > 0 && (
        <div className="text-[12px] text-error font-semibold leading-none px-2 truncate left-0 top-[calc(100%+2px)] absolute">
          {errorMessages.map((msg, idx) => (
            <p key={idx}>{msg}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormField;
