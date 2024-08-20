import { Skeleton } from '../ui/skeleton';

import React from 'react';

function LoadingTable({ rows = 5 }: { rows?: number }) {
  const tableRows = Array.from({ length: rows }, (_, index) => {
    return (
      <div className="mb-4" key={index}>
        <Skeleton className="w-full rounded" />
      </div>
    );
  });
  return <>{tableRows}</>;
}

export default LoadingTable;
