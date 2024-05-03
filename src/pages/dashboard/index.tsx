import { Button } from '@/components/custom/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Layout, LayoutBody } from '@/components/custom/layout'
import { RecentSales } from './components/recent-sales'
import { Overview } from './components/overview'
import { IconDownload } from '@tabler/icons-react'

export default function Dashboard() {
  return (
    <Layout>

      <LayoutBody className='space-y-4'>
        <div className='flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
            Dashboard
          </h1>
          <div className='flex items-center space-x-2'>
            <Button>
              <IconDownload className="mr-2 h-4 w-4" />
              <span >Summary</span>
            </Button>
          </div>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total Pengeluaran [Akumulasi]
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>Rp 255.000.000</div>
              <p className='text-xs text-muted-foreground mt-1'>
                +Rp 5.000.000 Bulan ini
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total Pengeluaran [Bulan Ini]
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>+ Rp 5.000.000</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Pendukung [Akumulasi]</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>17.500</div>
              <p className='text-xs text-muted-foreground mt-1'>
                +1.500 Bulan ini
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Pendukung [Bulan Ini]
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>+1.500</div>
              <p className='text-xs text-muted-foreground mt-1'>
                +300 Minggu ini
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className='col-span-1 lg:col-span-4'>
          <CardHeader>
            <CardTitle>Overview Pengeluaran</CardTitle>
          </CardHeader>
          <CardContent className='pl-2'>
            <Overview />
          </CardContent>
        </Card>
        <Card className='col-span-1 lg:col-span-3'>
          <CardHeader>
            <CardTitle className='text-black' >Overview Dukungan</CardTitle>
            <CardDescription className='text-black' >
              Kecamatan <span className='font-bold' >Wonorejo</span> Memiliki Pendukung Terbanyak
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </LayoutBody>
    </Layout>
  )
}


