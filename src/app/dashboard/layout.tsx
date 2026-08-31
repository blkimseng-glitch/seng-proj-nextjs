'use client';

import { ErrorBoundary } from "react-error-boundary";
import ErorrHandleNoDataFound from "@/components/errorhandl"; 

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  
    <ErrorBoundary fallback={<ErorrHandleNoDataFound />}>
      <div className="bg-red-500">This is dashboard</div>
      {children}
    </ErrorBoundary>
  );
}