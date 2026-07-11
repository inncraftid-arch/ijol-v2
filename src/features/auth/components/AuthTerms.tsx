import { useTranslation } from 'react-i18next';

const AuthTerms = () => {
  const { t } = useTranslation('auth');
  return (
    <p className="mx-auto max-w-105 pb-10 text-sm leading-7 text-muted lg:pb-12">
      {t('terms.prefix')} <a className="font-bold text-gold">{t('terms.service')}</a> {t('terms.and')}{' '}
      <a className="font-bold text-gold">{t('terms.privacy')}</a> {t('terms.suffix')}
    </p>
  );
};

export default AuthTerms;
