export default {
    path: '/about',
    component: () => import('@/views/About'),
    meta: {
      displayName: 'ABOUT',
      defaultName: 'About:Education'
    },
    children: [
      {
        path: '',
        name: 'About:Education',
        component: () => import('@/views/About/Education')
      },
      {
      path: 'carrier',
      name: 'About:Carrier',
      component: () => import('@/views/About/Carrier')
    },
    {
        path: 'skills',
        name: 'About:Skills',
        component: () => import('@/views/About/Skills')
      },
    ]
  }
