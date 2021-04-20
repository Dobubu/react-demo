import { Home, Books, Electronics, Mobile, Desktop } from './Pages';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    breadcrumbName: 'Home'
  },
  {
    path: '/books',
    component: Books,
    breadcrumbName: 'Book'
  },
  {
    path: '/electronics',
    component: Electronics,
    breadcrumbName: 'Electronics',
    routes: [
      {
        path: '/electronics/mobile',
        component: Mobile,
        breadcrumbName: 'Mobile Phone'
      },
      {
        path: '/electronics/desktop',
        component: Desktop,
        breadcrumbName: 'Desktop PC'
      },
    ]
  }
]

export default routes