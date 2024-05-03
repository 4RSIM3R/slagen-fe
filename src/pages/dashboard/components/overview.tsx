import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 9_500_000) + Math.random() * 6000_000,
  },
  {
    name: 'Feb',
    total: Math.floor(Math.random() * 9_500_000) + Math.random() * 6000_000,
  },
  {
    name: 'Mar',
    total: Math.floor(Math.random() * 9_500_000) + Math.random() * 6000_000,
  },
  {
    name: 'Apr',
    total: Math.floor(Math.random() * 9_500_000) + Math.random() * 6000_000,
  },
  {
    name: 'May',
    total: Math.floor(Math.random() * 9_500_000) + Math.random() * 6000_000,
  },
  {
    name: 'Jun',
    total: 0,
  },
  {
    name: 'Jul',
    total: 0,
  },
  {
    name: 'Aug',
    total: 0,
  },
  {
    name: 'Sep',
    total: 0,
  },
  {
    name: 'Oct',
    total: 0,
  },
  {
    name: 'Nov',
    total: 0,
  },
  {
    name: 'Dec',
    total: 0,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${(value / 1_000_000).toLocaleString('id-ID', { maximumFractionDigits: 0 })} JT`}
        />
        <Bar
          dataKey='total'
          fill='currentColor'
          radius={[4, 4, 0, 0]}
          className='fill-primary'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
