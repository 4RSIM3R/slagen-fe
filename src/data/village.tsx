import { DataTableRowActions } from "@/pages/tasks/components/data-table-row-actions";
import { ColumnDef } from "@tanstack/react-table";

export type Village = {
    id: number,
    name: string,
    district: string,
    total: number,
    coordinator: number,
    spend: number,
    last_update: string,
}

export const village: Village[] = [
    {
        id: 1,
        name: 'Wonorejo',
        district: 'Wonorejo',
        coordinator: 15,
        total: 500,
        spend: Math.floor(Math.random() * 950_000) + Math.random() * 600_000,
        last_update: '03/05/2024',
    },
    {
        id: 2,
        name: 'Cobansari',
        district: 'Wonorejo',
        coordinator: 7,
        total: 350,
        spend: Math.floor(Math.random() * 950_000) + Math.random() * 600_000,
        last_update: '03/05/2024',
    },
    {
        id: 3,
        name: 'Karangasem',
        district: 'Wonorejo',
        coordinator: 10,
        total: 500,
        spend: Math.floor(Math.random() * 950_000) + Math.random() * 600_000,
        last_update: '03/05/2024',
    },
    {
        id: 4,
        name: 'Pakingan',
        district: 'Wonorejo',
        coordinator: 15,
        total: 1250,
        spend: Math.floor(Math.random() * 950_000) + Math.random() * 600_000,
        last_update: '03/05/2024',
    },
    {
        id: 4,
        name: 'Kluwut',
        district: 'Wonorejo',
        coordinator: 15,
        total: 1250,
        spend: Math.floor(Math.random() * 950_000) + Math.random() * 600_000,
        last_update: '03/05/2024',
    }
];


export const villageColumn: ColumnDef<Village>[] = [
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
        id: 'district',
        accessorKey: "district",
        header: "Kecamatan",
        enableSorting: false,
        enableHiding: false,
        cell: ({ row }) => {
            return (
                <a className="text-blue-500" >{row.original.district}</a>
            )
        }
    },
    {
        id: 'coordinator',
        accessorKey: "coordinator",
        header: "Koordinator",
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