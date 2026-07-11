import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import AppProviders from '@/app/providers';
import { router } from '@/app/router';
import '@/locales/i18n';
import '@/styles/globals.css';

const App = () => {
  return (
    <AppProviders>
      <Suspense
        fallback={
          <div className="grid min-h-screen place-items-center bg-cream">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gold/30 border-t-gold" />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </AppProviders>
  );
};

export default App;



