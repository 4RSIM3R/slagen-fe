import { DataTableRowActions } from "@/pages/tasks/components/data-table-row-actions";
import { ColumnDef } from "@tanstack/react-table";

export type Spend = {
    title: string,
    district: string,
    responsible: string,
    village: string,
    total: number,
    created_at: string,
}


export const spend: Spend[] = [
    {
        title: 'Acara 1',
        district: 'Wonorejo',
        village: 'Pakijangan',
        responsible: 'Mat Jaiz',
        total: Math.floor(Math.random() * 500_000) + Math.random() * 600_000,
        created_at: '01/03/2024'
    },
    {
        title: 'Turun Kampanye Cobansari',
        district: 'Wonorejo',
        village: 'Cobansari',
        responsible: 'Mat Jaiz',
        total: Math.floor(Math.random() * 500_000) + Math.random() * 600_000,
        created_at: '01/03/2024'
    },
];


export const spendColumn: ColumnDef<Spend>[] = [
    {
        id: 'title',
        accessorKey: "title",
        header: "Judul",
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
        id: 'village',
        accessorKey: "village",
        header: "Desa",
        enableSorting: false,
        enableHiding: false,
        cell: ({ row }) => {
            return (
                <a className="text-blue-500" >{row.original.village}</a>
            )
        }
    },
    {
        id: 'responsible',
        accessorKey: "responsible",
        header: "Penanggung Jawab",
        enableSorting: false,
        enableHiding: false,
        cell: ({ row }) => {
            return (
                <a className="text-blue-500" >{row.original.responsible}</a>
            )
        }
    },
    {
        id: 'total',
        accessorKey: "total",
        header: "Pengeluaran",
        enableSorting: false,
        enableHiding: false,
        cell: ({ row }) => {
            return (
                <span>RP {row.original.total.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</span>
            )
        }
    },
    {
        id: 'created_at',
        accessorKey: "created_at",
        header: "Tanggal",
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'actions',
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]