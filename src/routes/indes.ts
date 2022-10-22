import ExactPost from '../pages/ExactPost';
import Login from '../pages/Login';
import Main from '../pages/Main';

export enum RouterPaths {
  MAIN = '/posts',
  LOGIN = '/login',
  EXACTPOST = '/posts/:id',
}

export const routes = [
  { path: RouterPaths.MAIN, element: Main },
  { path: RouterPaths.LOGIN, element: Login },
  { path: RouterPaths.EXACTPOST, element: ExactPost },
];
