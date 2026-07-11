import Container from '@/components/layout/Container';
import {
  IconFooterEmail,
  IconFooterInstagram,
  IconFooterLinkedin,
  IconFooterRecycle,
  IconFooterThreads,
} from '@/assets/icons/footer';
import { assets } from '@/constants/assets';
import { contactEmailUrl } from '@/config/contact';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('common');
  const marqueeItems = Array.from({ length: 6 }, (_, index) => index);
  const socialLinks = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/ijol.in?igsh=MWVoMW5remN5ZWh2Zw==',
      Icon: IconFooterInstagram,
    },
    {
      label: 'Threads',
      href: 'https://www.threads.net/@ijol.in',
      Icon: IconFooterThreads,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/ijol/',
      Icon: IconFooterLinkedin,
    },
    {
      label: 'Email',
      href: contactEmailUrl,
      Icon: IconFooterEmail,
    },
  ];
  const footerColumns = [
    {
      title: t('footer.services'),
      links: [t('footer.swapClothes'), t('footer.donate'), t('footer.fiber')],
    },
    {
      title: t('footer.company'),
      links: [t('footer.about'), t('footer.career')],
    },
    {
      title: t('footer.legal'),
      links: [t('footer.terms'), t('footer.privacy')],
    },
  ];

  return (
    <footer className="bg-brown text-white" id="contact">
      <div className="overflow-hidden bg-cream py-3 text-brown">
        <div className="animate-footer-marquee flex w-max items-center will-change-transform">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 items-center gap-10 py-2 pr-10" aria-hidden={group === 1}>
              {marqueeItems.map((item) => (
                <span
                  key={`${group}-${item}`}
                  className="inline-flex shrink-0 items-center gap-6 whitespace-nowrap text-[32px] font-extrabold uppercase leading-none tracking-[-0.02em]"
                >
                  <IconFooterRecycle className="h-8 w-8 shrink-0 text-gold" aria-hidden="true" />
                  {t('footer.marquee')}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* <img
          src={assets.footerStarLeft}
          alt=""
          className="pointer-events-none absolute left-0 top-0 z-0 w-[min(60vw,760px)] -translate-x-1/5 select-none object-contain opacity-20"
          aria-hidden="true"
        />
        <img
          src={assets.footerStarRight}
          alt=""
          className="pointer-events-none absolute right-0 top-0 z-0 h-full min-h-90 w-[min(46vw,520px)] translate-x-1/5 select-none object-cover object-left opacity-20"
          aria-hidden="true"
        /> */}

        <Container className="relative z-10 py-14 md:py-16">
          <div className="grid gap-12 border-b border-white/25 pb-12 md:grid-cols-[1.55fr_0.8fr_0.8fr_0.8fr] md:gap-16">
            <div className="max-w-107.5">
              <img src={assets.logoDark} alt="IJOL" className="h-14.5 w-auto" />
              <p className="mt-7 text-[15px] leading-[1.55] text-white/78 md:text-base">{t('footer.description')}</p>

              <div className="mt-10 flex items-center gap-7">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="grid h-7 w-7 place-items-center text-white transition-opacity hover:opacity-80"
                    aria-label={`IJOL ${label}`}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {footerColumns.map((column) => (
              <div key={column.title} className="pt-1">
                <h3 className="text-xl font-extrabold text-gold">{column.title}</h3>
                <ul className="mt-7 grid gap-4 text-base text-white">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#footer"
                        className={
                          link === t('footer.career')
                            ? 'text-white/45 transition hover:text-gold'
                            : 'transition hover:text-gold'
                        }
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="pt-5 text-center text-sm font-bold text-white/42">{t('footer.copyright')}</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
