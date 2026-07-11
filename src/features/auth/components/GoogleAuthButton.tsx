import { useTranslation } from 'react-i18next';
import { assets } from '@/constants/assets';

const GoogleAuthButton = () => {
  const { t } = useTranslation('auth');

  return (
    <button
      type="button"
      className="relative flex h-12 w-full items-center justify-center rounded-full border border-line bg-white px-5 text-sm font-semibold text-brown transition hover:border-gold hover:shadow-sm"
    >
      <img src={assets.googleIcon} alt="" className="absolute left-4 h-5 w-5" />
      {t('google')}
    </button>
  );
};

export default GoogleAuthButton;
