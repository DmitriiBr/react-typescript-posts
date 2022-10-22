import Login from '../pages/Login';
import Main from '../pages/Main';

export enum RouterPaths {
  MAIN = '/',
  LOGIN = '/login',
}

export const routes = [
  { path: RouterPaths.MAIN, element: Main },
  { path: RouterPaths.LOGIN, element: Login },
];
