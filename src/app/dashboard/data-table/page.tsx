"use client";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import type { Products } from "@/lib/table-data";
import useSWR from "swr";

const fetcher = async function getData(): Promise<Products[]> {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data");
  }

  return response.json();
};

export default  function DataTablePage() {
  const {data, error, isLoading} = useSWR<Products[]>('https://api.escuelajs.co/api/v1/products', fetcher);

  if(error) return <div>Failed to load products.</div>;
  if(isLoading) return <div>Loading...</div>
  if(!data) return null;

  return <DataTable columns={columns} data={data} />;
}

