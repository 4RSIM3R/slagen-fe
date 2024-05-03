import { createBrowserRouter } from 'react-router-dom'
import GeneralError from './pages/errors/general-error'
import NotFoundError from './pages/errors/not-found-error'
import MaintenanceError from './pages/errors/maintenance-error'

const router = createBrowserRouter([
  // Auth routes
  {
    path: '/',
    lazy: async () => ({
      Component: (await import('./pages/auth/sign-in')).default,
    }),
  },

  // Main routes
  {
    path: '/backoffice',
    lazy: async () => {
      const AppShell = await import('./components/app-shell')
      return { Component: AppShell.default }
    },
    errorElement: <GeneralError />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('./pages/dashboard')).default,
        }),
      },
      {
        path: 'master',
        children: [
          {
            path: 'district',
            lazy: async () => ({
              Component: (await import('@/pages/master/district/index')).default,
            }),
          },
          {
            path: 'village',
            lazy: async () => ({
              Component: (await import('@/pages/master/village/index')).default,
            }),
          },
          {
            path: 'responsible',
            lazy: async () => ({
              Component: (await import('@/pages/master/responsible/index')).default,
            }),
          },
          {
            path: 'coordinator',
            lazy: async () => ({
              Component: (await import('@/pages/master/coordinator/index')).default,
            }),
          },
          {
            path: 'supporter',
            lazy: async () => ({
              Component: (await import('@/pages/master/supporter/index')).default,
            }),
          },
        ]
      },
      {
        path: 'spend',
        lazy: async () => ({
          Component: (await import('@/pages/spend/index')).default,
        }),
      },
      {
        path: 'analytic',
        children: [
          {
            path: 'responsible',
            lazy: async () => ({
              Component: (await import('@/components/coming-soon')).default,
            }),
          },
          {
            path: 'coordinator',
            lazy: async () => ({
              Component: (await import('@/components/coming-soon')).default,
            }),
          },
          {
            path: 'supporter',
            lazy: async () => ({
              Component: (await import('@/components/coming-soon')).default,
            }),
          },
        ]
      },
      {
        path: 'setting',
        lazy: async () => ({
          Component: (await import('@/components/coming-soon')).default,
        }),
      },
    ],
  },

  // Error routes
  { path: '/500', Component: GeneralError },
  { path: '/404', Component: NotFoundError },
  { path: '/503', Component: MaintenanceError },

  // Fallback 404 route
  { path: '*', Component: NotFoundError },
])

export default router
