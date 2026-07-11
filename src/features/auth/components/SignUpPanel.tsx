import { Link } from 'react-router-dom';
import { authStats } from '@/features/auth/data/auth.data';
import AuthPanelFrame from './AuthPanelFrame';
import GoogleAuthButton from './GoogleAuthButton';
import { ROUTES } from '@/constants/routes';
import { useTranslation } from 'react-i18next';

const SignUpPanel = () => {
  const { t } = useTranslation('auth');
  return (
    <AuthPanelFrame>
      <h1 className="mx-auto text-center font-display text-[32px] font-normal leading-10 tracking-normal text-brown">
        {t('register.title')}
      </h1>

      <p className="mx-auto mt-5 max-w-md text-base leading-8 text-muted">{t('register.description')}</p>

      <div className="mx-auto mt-16 flex max-w-md justify-center gap-8">
        {authStats.map((stat) => (
          <div key={stat.value} className="relative h-56 w-29 shrink-0">
            <div className="absolute left-0 top-0 h-45 w-full rounded-full bg-[linear-gradient(180deg,#C99547_25.97%,#453421_100%)] px-2 pt-5.5 text-center text-white">
              <strong className="block text-2xl font-extrabold leading-6.5 tracking-[0.02em]">{stat.value}</strong>
              {stat.unit && (
                <span className="block text-[10px] font-bold uppercase leading-3 tracking-[0.08em]">{stat.unit}</span>
              )}
            </div>
            <div className="absolute left-1/2 top-15.5 h-29.5 w-29.5 -translate-x-1/2 rounded-full bg-white p-1">
              <img src={stat.image} alt="" className="h-full w-full rounded-full object-cover" />
            </div>
            <p className="absolute bottom-0 left-0 min-h-7.75 w-full rounded-full border border-line bg-white px-3 py-1.25 text-center font-jakarta text-[8px] font-bold leading-[120%] tracking-[0.15em] text-brown">
              {t(stat.labelKey)}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-24 max-w-md">
        <GoogleAuthButton />
        <p className="mt-4 text-muted">
          {t('register.hasAccount')}{' '}
          <Link to={ROUTES.login} className="font-bold text-gold">
            {t('register.login')}
          </Link>
        </p>
      </div>
    </AuthPanelFrame>
  );
};

export default SignUpPanel;
