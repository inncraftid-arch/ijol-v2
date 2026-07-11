import { assets } from '@/constants/assets';
import {
  IconSwapStepApproved,
  IconSwapStepDelivery,
  IconSwapStepOffer,
  IconSwapStepPayment,
  IconSwapStepSearch,
  IconSwapStepTime,
} from '@/assets/icons/swapSteps';

export const circularPaths = [
  { titleKey: 'impact.paths.swap.title', descriptionKey: 'impact.paths.swap.description' },
  { titleKey: 'impact.paths.donate.title', descriptionKey: 'impact.paths.donate.description' },
  { titleKey: 'impact.paths.recycle.title', descriptionKey: 'impact.paths.recycle.description' },
];

export const swapSteps = [
  ['impact.steps.search.title', 'impact.steps.search.description', IconSwapStepSearch],
  ['impact.steps.offer.title', 'impact.steps.offer.description', IconSwapStepOffer],
  ['impact.steps.wait.title', 'impact.steps.wait.description', IconSwapStepTime],
  ['impact.steps.approved.title', 'impact.steps.approved.description', IconSwapStepApproved],
  ['impact.steps.payment.title', 'impact.steps.payment.description', IconSwapStepPayment],
  ['impact.steps.delivery.title', 'impact.steps.delivery.description', IconSwapStepDelivery],
] as const;

export const trendCards = [
  { title: 'Festival Fit', image: assets.trendFestival },
  { title: 'Suara Ini', image: assets.trendSyahrini },
  { title: 'Agustusan', image: assets.trendAgustusan },
  { title: 'Halloween', image: assets.trendHalloween },
  { title: 'Christmas', image: assets.trendChristmas },
  { title: 'New Year', image: assets.trendNewYear },
];
