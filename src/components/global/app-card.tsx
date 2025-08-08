import { cn } from "@/lib/utils";

interface AppCardProps {
  children?: React.ReactNode;
  className?: string;
  // add more props as needed
}

export const AppCard = ({ children, className }: AppCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-neutral-900 gap-4 rounded-lg border p-4 drop-shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
};
