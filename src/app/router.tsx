import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import MainLayout from '@/layouts/MainLayout';

const HomePage = lazy(() => import('@/features/landing/pages/HomePage'));
const CatalogPage = lazy(() => import('@/features/product/pages/CatalogPage'));
const ProductDetailPage = lazy(() => import('@/features/product/pages/ProductDetailPage'));
const SwapListPage = lazy(() => import('@/features/swap/pages/SwapListPage'));
const WardrobePage = lazy(() => import('@/features/wardrobe/pages/WardrobePage'));
const AuthPage = lazy(() => import('@/features/auth/pages/AuthPage'));
const NotAllowedPage = lazy(() => import('@/features/system/pages/NotAllowedPage'));
const NotFoundPage = lazy(() => import('@/features/system/pages/NotFoundPage'));

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: ROUTES.catalog, element: <CatalogPage /> },
      { path: ROUTES.productPattern, element: <ProductDetailPage /> },
      { path: ROUTES.wardrobe, element: <WardrobePage /> },
      { path: ROUTES.swapList, element: <SwapListPage /> },
    ],
  },
  { path: ROUTES.login, element: <AuthPage mode="login" /> },
  { path: ROUTES.register, element: <AuthPage mode="register" /> },
  { path: ROUTES.notAllowed, element: <NotAllowedPage /> },
  { path: '*', element: <NotFoundPage /> },
]);
