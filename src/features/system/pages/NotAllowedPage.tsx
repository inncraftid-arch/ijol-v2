import type { SVGProps } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { assets } from '@/constants/assets';
import { ROUTES } from '@/constants/routes';

const IconAccessDenied = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M32 5.5 52 13v15.4c0 13.1-8.2 24.7-20 30.1-11.8-5.4-20-17-20-30.1V13l20-7.5Z"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path
      d="M23.5 30.5v-5a8.5 8.5 0 0 1 17 0v5M21 30.5h22v16H21v-16Z"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M32 36.5v4" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

const NotAllowedPage = () => {
  const { t } = useTranslation('error');
  const navigate = useNavigate();

  const handleBack = () => {
    const historyState = window.history.state as { idx?: number } | null;

    if (historyState?.idx && historyState.idx > 0) {
      navigate(-1);
      return;
    }

    navigate(ROUTES.home, { replace: true });
  };

  return (
    <main className="grid min-h-screen place-items-center bg-hero-background px-5 py-12 text-center">
      <section className="w-full max-w-xl" aria-labelledby="not-allowed-title">
        <Link to={ROUTES.home} className="inline-flex justify-center" aria-label={t('aria.home', { ns: 'common' })}>
          <img src={assets.logoLight} alt="IJOL" className="h-10 w-auto" />
        </Link>

        <div className="mx-auto mt-12 grid h-28 w-28 place-items-center rounded-full border border-coral/25 bg-white text-coral shadow-soft">
          <IconAccessDenied className="h-16 w-16" aria-hidden="true" />
        </div>

        <p className="mx-auto mt-8 w-fit rounded-full border border-gold/35 bg-cream-pale px-3 py-1 text-xs font-extrabold text-gold">
          {t('not_allowed.eyebrow')}
        </p>
        <h1
          id="not-allowed-title"
          className="mt-5 font-display text-4xl font-normal tracking-normal text-brown sm:text-5xl"
        >
          {t('not_allowed.title')}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-brown/65 sm:text-lg">
          {t('not_allowed.description')}
        </p>

        <div className="mt-9 flex flex-col-reverse justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-brown px-7 text-sm font-bold text-brown transition hover:border-gold hover:text-gold"
          >
            {t('not_allowed.back')}
          </button>
          <Link
            to={ROUTES.home}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-brown px-7 text-sm font-bold text-white transition hover:bg-brown-deep"
          >
            {t('not_allowed.back_home')}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotAllowedPage;
