import { assets } from './assets';

export const productCardMeta = [
  { title: 'Gaudi Crop Gaudi CropGaudi CropGaudi CropGaudi Crop', code: 'IJL 01', brand: 'Non Branded', size: 'M', condition: 'Baik', owner: 'Arin', location: 'Serpong', carbon: '24.6' },
  { title: 'Vintage Denim Jacket Oversized', code: 'IJL 02', brand: 'Branded', size: 'L', condition: 'Baik', owner: 'Naya', location: 'Bintaro', carbon: '18.2' },
  { title: 'Cream Knit Top Casual Daily Wear', code: 'IJL 03', brand: 'Non Branded', size: 'S', condition: 'Baik', owner: 'Dinda', location: 'Kemang', carbon: '12.8' },
  { title: 'Brown Linen Shirt Relaxed Fit', code: 'IJL 04', brand: 'Local Brand', size: 'M', condition: 'Baik', owner: 'Raka', location: 'BSD', carbon: '16.4' },
  { title: 'Patterned Outer Light Jacket', code: 'IJL 05', brand: 'Non Branded', size: 'M', condition: 'Baik', owner: 'Mira', location: 'Pamulang', carbon: '20.1' },
  { title: 'Soft Beige Trousers Minimal Fit', code: 'IJL 06', brand: 'Branded', size: 'L', condition: 'Baik', owner: 'Tara', location: 'Jakarta', carbon: '14.9' },
] as const;

export const circularPaths = [
  {
    title: 'Tukar Pakaian',
    description: 'Kurangi pembelian baru lewat lemari yang saling memperpanjang umur pakai.',
  },
  {
    title: 'Donasi Pakaian',
    description: 'Pakaian berlebih mengalir ke komunitas yang membutuhkan, bukan ke pembuangan.',
  },
  {
    title: 'Daur Ulang Pakaian',
    description: 'Tekstil rusak masuk proses pemilahan dan daur ulang agar tidak berakhir di landfill.',
  },
];

export const swapSteps = [
  ['Cari Pakaian Favorit', 'Temukan item yang cocok dengan gaya dan ukuranmu.', assets.stepSearch],
  ['Ajukan Penawaran', 'Pilih pakaian milikmu sebagai opsi pertukaran.', assets.stepSwap],
  ['Tunggu Konfirmasi', 'Pemilik meninjau penawaran dan menyetujui match.', assets.stepTime],
  ['Pemilik Menyetujui', 'Kedua pihak mengunci kesepakatan swap.', assets.stepCheck],
  ['Konfirmasi Pembayaran', 'Selesaikan biaya layanan dan pengiriman.', assets.stepPay],
  ['Pakaian Diantar', 'Paket sampai ke pintu dan CO2 tersimpan.', assets.stepDelivery],
] as const;

export const outfitCards = [
  assets.sec4One,
  assets.sec4Two,
  assets.sec4Three,
  assets.sec4Four,
  assets.sec4Five,
  assets.sec4Six,
  assets.sec4One,
  assets.sec4Two,
];

export const trendCards = [
  {
    title: 'Festival Fit',
    image: assets.trendFestival,
  },
  {
    title: 'Suara Ini',
    image: assets.trendSyahrini,
  },
  {
    title: 'Agustusan',
    image: assets.trendAgustusan,
  },
  {
    title: 'Halloween',
    image: assets.trendHalloween,
  },
  {
    title: 'Christmas',
    image: assets.trendChristmas,
  },
  {
    title: 'New Year',
    image: assets.trendNewYear,
  },
];

export const authStats = [
  {
    value: '2.3M',
    unit: 'ton',
    label: 'Indonesian textile waste/year',
    image: assets.signUpOne,
  },
  {
    value: '61%',
    unit: '',
    label: 'ended up being Burned or Buried.',
    image: assets.signUpTwo,
  },
  {
    value: '<1%',
    unit: '',
    label: 'Recycled Into New Fibers',
    image: assets.signUpThree,
  },
];
