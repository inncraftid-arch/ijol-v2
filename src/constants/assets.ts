import signUpBg from '../assets/images/auth-textile-waste.jpg';
import signInBg from '../assets/images/auth-textile-own.jpg';
import signUpOne from '../assets/images/auth-rack.png';
import signUpTwo from '../assets/images/auth-landfill.png';
import signUpThree from '../assets/images/auth-recycle.png';
import trendAgustusan from '../assets/images/trends/trend-agustusan.jpg';
import trendChristmas from '../assets/images/trends/trend-christmas.jpg';
import trendFestival from '../assets/images/trends/trend-festival.jpg';
import trendHalloween from '../assets/images/trends/trend-halloween.jpg';
import trendNewYear from '../assets/images/trends/trend-new-year.jpg';
import trendSyahrini from '../assets/images/trends/trend-syahrini.jpg';

const publicAsset = (fileName: string) => `/assets/images/${fileName}`;

const ellipse = publicAsset('Ellipse 3.png');
const starPanel = publicAsset('Star 1.png');
const logoDark = publicAsset('logo.dark.svg');
const logoLight = publicAsset('logo.light.svg');
const heroImage = publicAsset('comp.sec1.hero.png');
const heroHanger = publicAsset('comp.sec1.hanger.svg');
const heroLeave = publicAsset('comp.sec1.leave.svg');
const heroShirt = publicAsset('comp.sec1.shirt.svg');
const heroStar = publicAsset('comp.sec1.star.svg');
const stepCheck = publicAsset('comp.sec2.right-check.svg');
const stepDelivery = publicAsset('comp.sec2.right-delper.svg');
const stepPay = publicAsset('comp.sec2.right-pay.svg');
const stepSearch = publicAsset('comp.sec2.right.search.svg');
const stepSwap = publicAsset('comp.sec2.right.swap.svg');
const stepTime = publicAsset('comp.sec2.right-time.svg');
const sec4One = publicAsset('comp.sec4.1.png');
const sec4Two = publicAsset('comp.sec4.2.png');
const sec4Three = publicAsset('comp.sec4.3.png');
const sec4Four = publicAsset('comp.sec4.4.png');
const sec4Five = publicAsset('comp.sec4.5.png');
const sec4Six = publicAsset('comp.sec4.6.png');
const productItemJacket = publicAsset('product-item-jacket.png');
const carbonBg = publicAsset('comp.sec5.bg.jpg');
const carbonBgLeft = publicAsset('comp.sec5.bg-left.jpg');
const carbonBot = publicAsset('comp.sec5.bg.bot.png');
const carbonHero = publicAsset('comp.sec5.hero-bot.png');
const sec6Hero = publicAsset('comp.sec6.hero.png');
const sec6Clothes = publicAsset('comp.section6.clothes.png');
const googleIcon = publicAsset('comp.signin.google.png');
const footerInstagram = publicAsset('comp.footer.ig.svg');
const footerLinkedin = publicAsset('comp.footer.linkedin.svg');
const footerThreads = publicAsset('comp.footer.threds.svg');
const footerEmail = publicAsset('comp.footer.email.svg');

export const assets = {
  ellipse,
  starPanel,
  signUpBg,
  signInBg,
  logoDark,
  logoLight,
  heroImage,
  heroHanger,
  heroLeave,
  heroShirt,
  heroStar,
  stepCheck,
  stepDelivery,
  stepPay,
  stepSearch,
  stepSwap,
  stepTime,
  sec4One,
  sec4Two,
  sec4Three,
  sec4Four,
  sec4Five,
  sec4Six,
  productItemJacket,
  carbonBg,
  carbonBgLeft,
  carbonBot,
  carbonHero,
  sec6Hero,
  sec6Clothes,
  googleIcon,
  signUpOne,
  signUpTwo,
  signUpThree,
  trendAgustusan,
  trendChristmas,
  trendFestival,
  trendHalloween,
  trendNewYear,
  trendSyahrini,
  footerInstagram,
  footerLinkedin,
  footerThreads,
  footerEmail,
} as const;
