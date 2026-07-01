import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const HomePage = lazy(() => import('@/pages/HomePage'));
const CatalogPage = lazy(() => import('@/pages/CatalogPage'));
const ProductDetailPage = lazy(() => import('@/pages/ProductDetailPage'));
const SwapListPage = lazy(() => import('@/pages/SwapListPage'));
const AuthPage = lazy(() => import('@/pages/AuthPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="grid min-h-screen place-items-center bg-cream">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gold/30 border-t-gold" />
          </div>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:productId" element={<ProductDetailPage />} />
            <Route path="/swap-list" element={<SwapListPage />} />
          </Route>
          <Route path="/login" element={<AuthPage mode="login" />} />
          <Route path="/register" element={<AuthPage mode="register" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
