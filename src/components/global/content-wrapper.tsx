export const ContentWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`mx-auto container px-4 md:px-12 lg:px-24 xl:px-48 ${className}`}
    >
      {children}
    </div>
  );
};
