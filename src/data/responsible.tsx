import { DataTableRowActions } from "@/pages/tasks/components/data-table-row-actions";
import { ColumnDef } from "@tanstack/react-table";

export type Responsible = {
    id: number,
    name: string,
    district: string,
    referal: number,
    coordinator: number,
    spend: number,
}

export const responsible: Responsible[] = [
    {
        id: 1,
        name: 'Mat Jaiz',
        district: 'Wonorejo',
        coordinator: 15,
        referal: 500,
        spend: Math.floor(Math.random() * 900_000) + Math.random() * 500_000,
    },
    {
        id: 2,
        name: 'Mat Wajib',
        district: 'Wonorejo',
        coordinator: 7,
        referal: 350,
        spend: Math.floor(Math.random() * 900_000) + Math.random() * 500_000,
    },
    {
        id: 3,
        name: 'Rohim',
        district: 'Wonorejo',
        coordinator: 10,
        referal: 500,
        spend: Math.floor(Math.random() * 900_000) + Math.random() * 500_000,
    },
];


export const responsibleColumn: ColumnDef<Responsible>[] = [
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
        header: "Koordinator Bawahan",
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'referal',
        accessorKey: "referal",
        header: "Referal Pendukung",
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'spend',
        accessorKey: "spend",
        header: "Uang Diserahkan",
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