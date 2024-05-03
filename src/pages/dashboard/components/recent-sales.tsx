import { district, districtColumn } from "@/data/district";
import { DataTable } from "@/pages/tasks/components/data-table";


export function RecentSales() {
  return (
    <div className='space-y-8'>
      <DataTable data={district} columns={districtColumn} />
    </div>
  )
}