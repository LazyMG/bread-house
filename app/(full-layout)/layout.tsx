const FullLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="h-full mx-auto w-full">{children}</div>;
};

export default FullLayout;
