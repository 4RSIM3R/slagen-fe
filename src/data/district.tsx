import { DataTableRowActions } from "@/pages/tasks/components/data-table-row-actions";
import { ColumnDef } from "@tanstack/react-table";

export type District = {
    id: number,
    name: string,
    total: number,
    responsible: number,
    coordinator: number,
    last_update: string,
    spend: number,
}

export const district: District[] = [
    {
        id: 1,
        name: 'Wonorejo',
        responsible: 2,
        coordinator: 15,
        total: 5000,
        last_update: '03/05/2024',
        spend: Math.floor(Math.random() * 9_500_000) + Math.random() * 6000_000,
    },
    {
        id: 2,
        name: 'Purwosari',
        responsible: 1,
        coordinator: 7,
        total: 3500,
        last_update: '04/04/2024',
        spend: Math.floor(Math.random() * 9_500_000) + Math.random() * 6000_000,
    },
    {
        id: 3,
        name: 'Kejayan',
        responsible: 2,
        coordinator: 10,
        total: 1500,
        last_update: '01/05/2024',
        spend: Math.floor(Math.random() * 9_500_000) + Math.random() * 6000_000,
    },
    {
        id: 4,
        name: 'Pandaan',
        responsible: 3,
        coordinator: 15,
        total: 2500,
        last_update: '02/05/2024',
        spend: Math.floor(Math.random() * 9_500_000) + Math.random() * 6000_000,
    },
    {
        id: 4,
        name: 'Bangil',
        responsible: 3,
        coordinator: 15,
        total: 2500,
        last_update: '02/05/2024',
        spend: Math.floor(Math.random() * 9_500_000) + Math.random() * 6000_000,
    }
];

export const districtColumn: ColumnDef<District>[] = [
    {
        id: 'id',
        accessorKey: "id",
        header: "ID",
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'name',
        accessorKey: "name",
        header: "Nama",
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'total',
        accessorKey: "total",
        header: "Total Pendukung",
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'responsible',
        accessorKey: "responsible",
        header: "Penanggunug Jawab",
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'coordinator',
        accessorKey: "coordinator",
        header: "Koordinator",
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'spend',
        accessorKey: "spend",
        header: "Pengeluaran",
        enableSorting: false,
        enableHiding: false,
        cell: ({ row }) => {
            return (
                <span>RP {row.original.spend.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</span>
            )
        }
    },
    {
        id: 'last_update',
        accessorKey: "last_update",
        header: "Update Terakhir",
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'actions',
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]