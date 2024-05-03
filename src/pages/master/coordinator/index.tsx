import { Layout, LayoutBody } from "@/components/custom/layout"
import { coordinator, coordinatorColumn } from "@/data/coordinator"
import { DataTable } from "@/pages/tasks/components/data-table"

export default function Coordinator() {
    return (
        <Layout>

            <LayoutBody className='flex flex-col' fixedHeight>
                <div className='mb-4 flex items-center justify-between space-y-2'>
                    <div>
                        <h2 className='text-2xl font-bold tracking-tight'>Data Koordinator</h2>
                        <p className='text-muted-foreground'>
                            List Data Koordinator (Desa)
                        </p>
                    </div>
                </div>
                <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
                    <DataTable data={coordinator} columns={coordinatorColumn} />
                </div>
            </LayoutBody>
        </Layout>
    )
}