export default function TabWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-2 py-1 md:px-8 md:py-4 overflow-y-auto h-full">
      {children}
    </div>
  );
}
