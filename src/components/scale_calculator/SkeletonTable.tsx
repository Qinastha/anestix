export const SkeletonTable = () => {
  return (
    <div className="p-4 animate-pulse">
      <div className="h-8 w-1/2 bg-sidebar mb-4" />
      <div className="space-y-4">
        <div className="h-10 bg-sidebar rounded" />
        <div className="h-10 bg-sidebar rounded" />
        <div className="h-10 bg-sidebar rounded" />
      </div>
    </div>
  );
};
