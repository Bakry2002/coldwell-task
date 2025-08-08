export const ContentWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`mx-auto container px-4 md:px-12 bg-black lg:px-24 xl:px-48 ${className}`}
    >
      {children}
    </div>
  );
};
