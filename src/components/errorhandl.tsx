
"use client";

import { BarChart3 } from "lucide-react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

const ErrorHandleNoDataFound = () => ( 
  <Empty>
    <EmptyHeader>
      <EmptyMedia>
        <BarChart3 className="h-16 w-16 text-muted-foreground" />
      </EmptyMedia>
      <EmptyTitle>No data available</EmptyTitle>
      <EmptyDescription>
        There is no data to display in this chart yet.
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
);

export default ErrorHandleNoDataFound; 