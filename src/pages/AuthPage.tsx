import AuthSideImage from '@/components/auth/AuthSideImage';
import SignInPanel from '@/components/auth/SignInPanel';
import SignUpPanel from '@/components/auth/SignUpPanel';
import type { AuthMode } from '@/types/auth.types';

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
