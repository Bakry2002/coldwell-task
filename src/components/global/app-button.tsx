import { cn } from "@/lib/utils";

interface AppButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  className?: string;
}

const variants = {
  gradient: "bg-gradient-to-r from-[#FF9898] to-[#8054FF] text-white",
  primary: "bg-neutral-900 text-white",
  secondary: "bg-secondary-500 text-white",
  outline: "border border-gray-300 text-gray-700",
  ghost: "bg-transparent text-gray-700",
};

export const AppButton = ({
  children,
  onClick,
  variant = "primary",
  className,
}: AppButtonProps) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-sm transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.99]",
        variants[variant],
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
