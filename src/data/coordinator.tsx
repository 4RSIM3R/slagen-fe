import { DataTableRowActions } from "@/pages/tasks/components/data-table-row-actions";
import { ColumnDef } from "@tanstack/react-table";

export type Coordinator = {
    id: number,
    name: string,
    district: string,
    village: string,
    responsible: string,
    referal: number,
    phone_number: string,
}

export const coordinator: Coordinator[] = [
    {
        id: 1,
        name: 'Abdul Halim',
        district: 'Wonorejo',
        village: 'Pakijangan',
        responsible: 'Mat Jaiz',
        referal: 500,
        phone_number: '08xxxxxxxx',
    },
    {
        id: 2,
        name: 'Abdul Rohim',
        district: 'Wonorejo',
        village: 'Pakijangan',
        responsible: 'Mat Jaiz',
        referal: 350,
        phone_number: '08xxxxxxxx',
    },
    {
        id: 3,
        name: 'Rohman',
        district: 'Wonorejo',
        village: 'Pakijangan',
        responsible: 'Mat Jaiz',
        referal: 500,
        phone_number: '08xxxxxxxx',
    },
];


export const coordinatorColumn: ColumnDef<Coordinator>[] = [
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
        id: 'referal',
        accessorKey: "referal",
        header: "Referal",
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'phone_number',
        accessorKey: "phone_number",
        header: "NO HP",
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'actions',
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]