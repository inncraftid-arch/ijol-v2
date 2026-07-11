import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '@/constants/assets';
import AuthTerms from './AuthTerms';
import { ROUTES } from '@/constants/routes';
import { useTranslation } from 'react-i18next';

type AuthPanelFrameProps = {
  children: ReactNode;
};

const AuthPanelFrame = ({ children }: AuthPanelFrameProps) => {
  const { t } = useTranslation('common');
  return (
    <section className="flex min-h-screen items-stretch justify-center overflow-y-auto bg-white px-5 py-5 lg:h-full lg:min-h-0 lg:py-5">
      <div className="grid min-h-full w-full max-w-2xl grid-rows-[1fr_auto] text-center">
        <div className="pt-16 lg:pt-20">
          <Link to={ROUTES.home} className="mb-10 inline-block lg:hidden" aria-label={t('aria.home')}>
            <img src={assets.logoLight} alt="IJOL" className="mx-auto h-9 w-auto" />
          </Link>

          {children}
        </div>

        <AuthTerms />
      </div>
    </section>
  );
};

export default AuthPanelFrame;
