import { NavLink } from '@client/types';
export const REDUX_STORE_KEY = '__SITE_STORE__';
export const NAV_LINKS: NavLink[] = [
  {
    label: 'With Redux',
    path: '/'
  },
  {
    label: 'With Graphql',
    path: '/with-graphql'
  }
];
