import { DataTableRowActions } from "@/pages/tasks/components/data-table-row-actions";
import { ColumnDef } from "@tanstack/react-table";

export type Supporter = {
    nik: string,
    name: string,
    district: string,
    village: string,
    coordinator: string,
    tps: string,
}

export const supporter: Supporter[] = [
    {
        nik: '351xxxxxxxxx0001',
        name: 'Pemilih 1',
        district: 'Wonorejo',
        village: 'Pakijangan',
        coordinator: 'Abdul Halim',
        tps: '04',
    },
    {
        nik: '351xxxxxxxxx0009',
        name: 'Pemilih 2',
        district: 'Wonorejo',
        village: 'Pakijangan',
        coordinator: 'Abdul Halim',
        tps: '01',
    },
    {
        nik: '351xxxxxxxxx0003',
        name: 'Pemilih 3',
        district: 'Wonorejo',
        village: 'Pakijangan',
        coordinator: 'Abdul Halim',
        tps: '04',
    },
    {
        nik: '351xxxxxxxxx0002',
        name: 'Pemilih 4',
        district: 'Wonorejo',
        village: 'Pakijangan',
        coordinator: 'Abdul Halim',
        tps: '04',
    },
];


export const supporterColumn: ColumnDef<Supporter>[] = [
    {
        id: 'nik',
        accessorKey: "nik",
        header: "NIK",
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
        cell: ({ row }) => {
            return (
                <a className="text-blue-500" >{row.original.coordinator}</a>
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
        id: 'tps',
        accessorKey: "tps",
        header: "TPS",
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'actions',
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]