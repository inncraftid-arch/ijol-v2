import AuthSideImage from '@/features/auth/components/AuthSideImage';
import SignInPanel from '@/features/auth/components/SignInPanel';
import SignUpPanel from '@/features/auth/components/SignUpPanel';
import type { AuthMode } from '@/features/auth/types';

type AuthPageProps = {
  mode: AuthMode;
};

const AuthPage = ({ mode }: AuthPageProps) => {
  return (
    <main className="grid min-h-screen bg-white lg:h-screen lg:min-h-0 lg:overflow-hidden lg:grid-cols-[49.1%_50.9%]">
      <AuthSideImage mode={mode} />
      {mode === 'login' ? <SignInPanel /> : <SignUpPanel />}
    </main>
  );
};

export default AuthPage;
