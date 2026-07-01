import { useState } from 'react';
import type { ComponentType, SVGProps } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  IconChevronRight,
  IconOrders,
  IconProfile,
  IconSignIn,
  IconSignOut,
  IconSwapList,
  IconToken,
  IconUpload,
  IconWardrobe,
  IconWhatsapp,
} from '@/assets/icons/navbar';
import { assets } from '@/constants/assets';
import { createWhatsAppUrl } from '@/constants/contact';
import Container from '@/components/common/Container';
import { useOverlay } from '@/contexts/overlay-context';

const navItems = [
  { labelKey: 'nav.about', href: '#about' },
  { labelKey: 'nav.donate', href: '#donate' },
  { labelKey: 'nav.recycle', href: '#recycle' },
];

const whatsappUrl = createWhatsAppUrl('Halo IJOL, saya ingin bertanya tentang IJOL.');

const loggedInUser = {
  name: 'Krisna',
  avatar: assets.signUpThree,
  wardrobeCount: 0,
  swapTokenCount: 0,
  swapListHref: '/swap-list',
  ordersHref: '#orders',
};

type ProfileMenuItem = {
  label: string;
  value?: number;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
};

const profileMenuItems: ProfileMenuItem[] = [
  { label: 'My Wardrobe', value: loggedInUser.wardrobeCount, Icon: IconWardrobe, href: '#wardrobe' },
  { label: 'Swap Token', value: loggedInUser.swapTokenCount, Icon: IconToken, href: '#token' },
  { label: 'Swap List', Icon: IconSwapList, href: loggedInUser.swapListHref },
  { label: 'Orders', Icon: IconOrders, href: loggedInUser.ordersHref },
];

const Navbar = () => {
  const { t } = useTranslation('common');
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const { openUpload } = useOverlay();

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#EAE1D8] bg-white transition duration-300">
        <Container>
          <nav className="flex h-[var(--height-navbar)] items-center justify-between">
            <Link to="/" className="inline-flex items-center" aria-label="IJOL home">
              <img src={assets.logoLight} alt="IJOL" className="h-9 w-auto" />
            </Link>

            <div className="hidden items-center gap-5 text-sm font-bold text-brown/85 md:flex">
              {navItems.map((item, index) => (
                <a key={item.href} href={item.href} className="transition hover:text-gold">
                  {t(item.labelKey)}
                  {index < navItems.length - 1 && <span className="ml-5 font-normal text-brown/20">|</span>}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-4 md:flex">
              <a
                href={whatsappUrl}
                className="inline-flex items-center gap-2 text-sm font-bold text-brown hover:text-gold"
                target="_blank"
                rel="noreferrer"
              >
                <IconWhatsapp className="h-4 w-4" aria-hidden="true" />
                {t('nav.contact')}
              </a>
              <button
                type="button"
                onClick={openUpload}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(201,149,71,0.35)] transition hover:bg-gold-soft"
              >
                <IconUpload className="h-4 w-4" aria-hidden="true" />
                {t('nav.upload')}
              </button>
              <button
                type="button"
                className="grid h-12 w-12 place-items-center rounded-full bg-brown text-white transition hover:bg-brown-deep"
                onClick={() => setProfileOpen((value) => !value)}
                aria-label={t('nav.profile')}
              >
                <IconProfile className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full bg-brown text-white md:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Open menu"
            >
              <span className="text-xl">{menuOpen ? 'x' : '='}</span>
            </button>
          </nav>
        </Container>
      </header>

      {menuOpen && (
        <div className="fixed inset-x-4 top-24 z-50 rounded-3xl bg-white p-6 shadow-soft md:hidden">
          <div className="grid gap-4 text-base font-bold text-brown">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {t(item.labelKey)}
              </a>
            ))}
            <button type="button" onClick={() => { setMenuOpen(false); openUpload(); }} className="rounded-full bg-gold px-5 py-3 text-center text-white">
              {t('nav.upload')}
            </button>
            <Link to="/login" onClick={() => setMenuOpen(false)} className="rounded-full bg-gold px-5 py-3 text-center text-white">
              {t('nav.signin')}
            </Link>
          </div>
        </div>
      )}

      {profileOpen && (
        <button
          type="button"
          aria-label="Close profile dropdown"
          className="fixed inset-0 z-40 cursor-default bg-ink/55 backdrop-blur-[1px]"
          onClick={() => setProfileOpen(false)}
        />
      )}

      {profileOpen && (
        <div
          className={`fixed right-[max(2rem,calc((100vw-1280px)/2+2rem))] top-24 z-50 rounded-2xl bg-white shadow-soft ${
            isSignedIn ? 'w-[min(248px,calc(100vw-2rem))] p-3' : 'w-[min(152px,calc(100vw-2rem))] p-2'
          }`}
        >
          {isSignedIn ? (
            <div>
              <div className="mb-3 flex flex-col items-center gap-1.5 border-b border-line pb-3">
                <img src={loggedInUser.avatar} alt={loggedInUser.name} className="h-12 w-12 rounded-full object-cover" />
                <p className="text-sm font-bold text-gold">{loggedInUser.name}</p>
              </div>
              {profileMenuItems.map(({ label, value, Icon, href }) => (
                <Link key={label} to={href} onClick={() => setProfileOpen(false)} className="flex items-center justify-between rounded-xl px-2 py-2 text-sm text-brown transition hover:bg-cream">
                  <span className="inline-flex items-center gap-2.5 font-medium">
                    <Icon className="h-4.5 w-4.5 text-brown" aria-hidden="true" />
                    {label}
                  </span>
                  <span className="inline-flex min-w-6 items-center justify-end font-bold text-gold">
                    {typeof value === 'number' ? value : <IconChevronRight className="h-4.5 w-4.5 text-brown" aria-hidden="true" />}
                  </span>
                </Link>
              ))}
              <button
                type="button"
                onClick={() => setIsSignedIn(false)}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 border-t border-line pt-3 text-sm font-bold text-coral"
              >
                <IconSignOut className="h-4.5 w-4.5" aria-hidden="true" />
                Sign Out
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login" className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl px-2.5 py-2.5 text-center text-sm font-bold text-gold transition hover:bg-cream">
                <IconSignIn className="h-4 w-4 shrink-0" aria-hidden="true" />
                {t('nav.signin')}
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
