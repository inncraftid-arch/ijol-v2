import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { assets } from '@/constants/assets';
import { ROUTES } from '@/constants/routes';

const NotFoundPage = () => {
  const { t } = useTranslation('error');

  return (
    <main className="grid min-h-screen place-items-center bg-cream px-5 text-center">
      <div className="max-w-lg">
        <Link to={ROUTES.home} className="inline-flex justify-center" aria-label={t('aria.home', { ns: 'common' })}>
          <img src={assets.logoLight} alt="IJOL" className="h-10 w-auto" />
        </Link>
        <div className="mt-10 flex justify-center gap-4 font-display text-[clamp(5rem,18vw,9rem)] font-black leading-none text-gold">
          <span>4</span>
          <span className="animate-float text-brown">0</span>
          <span>4</span>
        </div>
        <h1 className="mt-8 font-display text-4xl font-black text-brown">{t('not_found.title')}</h1>
        <p className="mt-4 text-lg leading-8 text-brown/65">{t('not_found.description')}</p>
        <Link
          to={ROUTES.home}
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-brown px-7 text-sm font-bold text-white transition hover:bg-brown-deep"
        >
          ← {t('not_found.back_home')}
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
