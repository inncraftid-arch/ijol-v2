import { Link } from 'react-router-dom';
import { IconDonate, IconRecycle, IconSwap } from '@/assets/icons/auth';
import { cn } from '@/lib/cn';
import AuthPanelFrame from './AuthPanelFrame';
import GoogleAuthButton from './GoogleAuthButton';
import { ROUTES } from '@/constants/routes';
import { useTranslation } from 'react-i18next';

const authActions = [
  { labelKey: 'login.actions.swap', Icon: IconSwap, color: 'text-brown' },
  { labelKey: 'login.actions.donate', Icon: IconDonate, color: 'text-gold' },
  { labelKey: 'login.actions.recycle', Icon: IconRecycle, color: 'text-[#FFC56D]' },
] as const;

const SignInPanel = () => {
  const { t } = useTranslation('auth');
  return (
    <AuthPanelFrame>
      <h1 className="mx-auto text-center font-display text-[32px] font-normal leading-10 tracking-normal text-brown">
        <span className="block">{t('login.titleFirst')}</span>
        <span className="block">{t('login.titleSecond')}</span>
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">{t('login.description')}</p>

      <div className="mx-auto mt-28 flex max-w-2xl justify-center gap-20">
        {authActions.map(({ labelKey, Icon, color }) => (
          <div key={labelKey} className="text-center">
            <div className={cn('mx-auto grid h-20 w-20 place-items-center rounded-full bg-cream', color)}>
              <Icon className="h-12 w-12" aria-hidden="true" />
            </div>
            <p className={cn('mt-2 font-display text-sm font-extralight leading-3', color)}>{t(labelKey)}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-36 max-w-md">
        <GoogleAuthButton />
        <p className="mt-4 text-muted">
          {t('login.noAccount')}{' '}
          <Link to={ROUTES.register} className="font-bold text-gold">
            {t('login.register')}
          </Link>
        </p>
      </div>
    </AuthPanelFrame>
  );
};

export default SignInPanel;
