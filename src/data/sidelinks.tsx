import {
  IconApps,
  IconBuildingArch,
  IconChecklist,
  IconLayoutDashboard,
  IconReportMoney,
  IconSettings,
  IconUserCircle,
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Master',
    label: '',
    href: 'master',
    icon: <IconChecklist size={18} />,
    sub: [
      {
        title: 'Kecamatan',
        label: '',
        href: 'master/district',
        icon: <IconBuildingArch size={18} />,
      },
      {
        title: 'Desa',
        label: '',
        href: 'master/village',
        icon: <IconBuildingArch size={18} />,
      },
      {
        title: 'Penanggung Jawab',
        label: '',
        href: 'master/responsible',
        icon: <IconUserCircle size={18} />,
      },
      {
        title: 'Koordinator',
        label: '',
        href: 'master/coordinator',
        icon: <IconUserCircle size={18} />,
      },
      {
        title: 'Pendukung',
        label: '',
        href: 'master/supporter',
        icon: <IconUserCircle size={18} />,
      },
    ],
  },
  {
    title: 'Pengeluaran',
    label: '',
    href: 'spend',
    icon: <IconReportMoney size={18} />,
  },
  {
    title: 'Analytic',
    label: '',
    href: 'analytic',
    icon: <IconApps size={18} />,
    sub: [
      {
        title: 'Pengeluaran',
        label: '',
        href: 'analytic/spend',
        icon: <IconReportMoney size={18} />,
      },
      {
        title: 'Penanggung Jawab',
        label: '',
        href: 'analytic/responsible',
        icon: <IconUserCircle size={18} />,
      },
      {
        title: 'Koordinator',
        label: '',
        href: 'analytic/coordinator',
        icon: <IconUserCircle size={18} />,
      },
      {
        title: 'Pendukung',
        label: '',
        href: 'analytic/supporter',
        icon: <IconUserCircle size={18} />,
      },
    ],
  },
  {
    title: 'Setting',
    label: '',
    href: 'setting',
    icon: <IconSettings size={18} />,

  },
]
