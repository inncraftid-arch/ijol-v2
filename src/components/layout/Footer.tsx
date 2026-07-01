import Container from '@/components/common/Container';
import {
  IconFooterEmail,
  IconFooterInstagram,
  IconFooterLinkedin,
  IconFooterRecycle,
  IconFooterThreads,
} from '@/assets/icons/footer';
import { assets } from '@/constants/assets';
import { contactEmailUrl } from '@/constants/contact';

const Footer = () => {
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
      title: 'Layanan',
      links: ['Tukar Baju', 'Donasi', 'IJOL Fiber - Daur Ulang'],
    },
    {
      title: 'Perusahaan',
      links: ['Tentang Kami', 'Karir'],
    },
    {
      title: 'Legal',
      links: ['Syarat dan Ketentuan', 'Kebijakan Privasi'],
    },
  ];

  return (
    <footer className="bg-brown text-white" id="contact">
      <div className="overflow-hidden bg-cream py-3 text-brown">
        <div className="animate-footer-marquee flex w-max items-center">
          {[0, 1].map((group) => (
            <div key={group} className="flex min-w-[130vw] shrink-0 items-center justify-around gap-6 px-3 py-2">
              {marqueeItems.map((item) => (
                <span key={`${group}-${item}`} className="inline-flex items-center gap-6 whitespace-nowrap text-[32px] font-extrabold uppercase leading-none tracking-[-0.02em]">
                  <IconFooterRecycle className="h-8 w-8 shrink-0 text-gold" aria-hidden="true" />
                  PUTAR BAIK TERUS
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Container className="py-14 md:py-16">
        <div className="grid gap-12 border-b border-white/25 pb-12 md:grid-cols-[1.55fr_0.8fr_0.8fr_0.8fr] md:gap-16">
          <div className="max-w-107.5">
            <img src={assets.logoDark} alt="IJOL" className="h-14.5 w-auto" />
            <p className="mt-7 text-[15px] leading-[1.55] text-white/78 md:text-base">
              is a clothes circular platform based from Indonesia. Upload clothes you no longer wear to earn swap tokens, and
              you can use to swap with people nearby <strong className="font-extrabold italic text-white">(Swapping
              like swiping on Dating App).</strong> 
            </p>

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
                    <a href="#footer" className={link === 'Karir' ? 'text-white/45 transition hover:text-gold' : 'transition hover:text-gold'}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="pt-5 text-center text-sm font-bold text-white/42">© 2026 Putar Baik Terus | Ijol</p>
      </Container>
    </footer>
  );
};

export default Footer;
