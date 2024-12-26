import { cn } from "@/app/lib/utils";

export function Input({ type, className, ...props }) {
  return (
    <div>
      <input type={type} className={cn("custom-input", className)} {...props} />
    </div>
  );
}