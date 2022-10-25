import React from 'react';
import { Navigate } from 'react-router-dom';
import ExactPost from '../pages/ExactPost';
import Login from '../pages/Login';
import Main from '../pages/Main';

export enum RouterPaths {
  POSTS = '/posts',
  LOGIN = '/login',
  EXACTPOST = '/posts/:id',
  REDIRECT = '*',
}

export const routes = [
  { path: RouterPaths.POSTS, element: <Main /> },
  { path: RouterPaths.LOGIN, element: <Login /> },
  { path: RouterPaths.EXACTPOST, element: <ExactPost /> },
  { path: RouterPaths.REDIRECT, element: <Navigate to={RouterPaths.POSTS} /> },
];
