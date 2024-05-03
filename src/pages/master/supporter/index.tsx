import { Layout, LayoutBody } from "@/components/custom/layout"
import { supporter, supporterColumn } from "@/data/supporter"
import { DataTable } from "@/pages/tasks/components/data-table"

export default function Supporter() {
    return (
        <Layout>
            <LayoutBody className='flex flex-col' fixedHeight>
                <div className='mb-2 flex items-center justify-between space-y-2'>
                    <div>
                        <h2 className='text-2xl font-bold tracking-tight'>Data Pendukung</h2>
                        <p className='text-muted-foreground'>
                            List Data Pendukung
                        </p>
                    </div>
                </div>
                <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
                    <DataTable data={supporter} columns={supporterColumn} />
                </div>
            </LayoutBody>
        </Layout>
    )
}