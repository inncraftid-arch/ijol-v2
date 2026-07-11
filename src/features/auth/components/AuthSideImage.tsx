import { assets } from '@/constants/assets';
import type { AuthMode } from '@/features/auth/types';
import { useTranslation } from 'react-i18next';

type AuthSideImageProps = {
  mode: AuthMode;
};

const AuthSideImage = ({ mode }: AuthSideImageProps) => {
  const isLogin = mode === 'login';
  const { t } = useTranslation('auth');

  return (
    <section className="relative hidden min-h-0 overflow-hidden bg-sand lg:block lg:h-full">
      <img
        src={isLogin ? assets.signInBg : assets.signUpBg}
        alt={t(isLogin ? 'images.login' : 'images.register')}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-cream/75 via-cream/10 to-cream/80" />
    </section>
  );
};

export default AuthSideImage;
