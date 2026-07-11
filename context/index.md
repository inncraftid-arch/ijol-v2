# AI Coding Context — Vite + React + TypeScript Project Structure

Dokumen ini digunakan sebagai **context/rules untuk AI coding assistant** ketika membantu membangun project **Vite + React + TypeScript**.

AI wajib mengikuti aturan di dokumen ini untuk menjaga struktur project tetap rapi, konsisten, scalable, dan tidak mengarang hal yang tidak ada di project.

---

# 1. Prinsip Utama

Project ini menggunakan pendekatan:

- **Feature-based structure**
- **TypeScript-first**
- **Reusable component separation**
- **Multi-language ready**
- **Clean import using alias**
- **No hallucination rule**
- **Minimal coupling antar fitur**

AI tidak boleh membuat struktur baru tanpa alasan yang jelas.

AI harus mengikuti struktur dan convention yang ada di dokumen ini.

---

# 2. No Hallucination Rules

AI wajib mengikuti aturan berikut:

## 2.1 Jangan Mengarang Library

AI tidak boleh menggunakan library yang belum ada di `package.json`.

Sebelum menggunakan library seperti:

- `react-router-dom`
- `axios`
- `@tanstack/react-query`
- `zustand`
- `redux`
- `i18next`
- `react-i18next`
- `zod`
- `react-hook-form`
- `dayjs`
- `clsx`
- `tailwind-merge`

AI harus memastikan library tersebut memang sudah ada.

Jika belum ada, AI harus memberikan instruksi install terlebih dahulu.

Contoh yang benar:

```bash
npm install react-i18next i18next
```

Jangan langsung menulis kode import jika package belum tersedia.

---

## 2.2 Jangan Mengarang Endpoint API

AI tidak boleh mengarang endpoint API tanpa informasi dari user.

Contoh yang tidak boleh:

```ts
api.get('/api/v1/products');
```

kecuali endpoint tersebut memang sudah disebutkan atau sudah ada di project.

Jika endpoint belum diketahui, gunakan placeholder yang jelas:

```ts
// TODO: replace with actual product endpoint from backend
api.get('/products');
```

atau buat contract sementara di dokumentasi.

---

## 2.3 Jangan Mengarang Response API

AI tidak boleh mengasumsikan response backend secara detail tanpa konfirmasi.

Jika belum diketahui, gunakan type sementara dengan nama jelas:

```ts
export type Product = {
  id: string;
  name: string;
  imageUrl?: string;
  price?: number;
};
```

Tambahkan komentar:

```ts
// TODO: adjust based on backend response
```

---

## 2.4 Jangan Mengubah Struktur Besar Tanpa Alasan

AI tidak boleh tiba-tiba memindahkan folder atau membuat arsitektur baru seperti:

- Redux architecture
- Atomic design penuh
- Domain-driven design berlebihan
- Monorepo structure
- Microfrontend structure

kecuali user meminta.

---

## 2.5 Jangan Membuat File Berlebihan

AI harus menghindari membuat terlalu banyak file untuk fitur sederhana.

Untuk fitur kecil, cukup gunakan struktur sederhana.

Untuk fitur besar, gunakan struktur lengkap.

Prinsip:

```txt
simple feature = fewer files
complex feature = separated files
```

---

## 2.6 Jangan Mengubah Naming Convention

AI wajib mengikuti naming convention di dokumen ini.

Jangan mencampur:

```txt
ProductCard.tsx
product-card.tsx
productCard.tsx
```

Pilih convention yang sudah ditetapkan.

---

## 2.7 Jangan Menghapus Existing Code Tanpa Konteks

AI tidak boleh menghapus file, component, route, hook, atau service yang sudah ada tanpa alasan jelas.

Jika perlu refactor, AI harus menjelaskan perubahan dan menjaga backward compatibility jika memungkinkan.

---

## 2.8 Jangan Menaruh Logic di Tempat yang Salah

AI wajib menaruh logic sesuai tempatnya.

Contoh:

| Logic                 | Lokasi                            |
| --------------------- | --------------------------------- |
| API call global       | `src/services` atau `src/lib`     |
| API call khusus fitur | `src/features/[feature]/api`      |
| Business logic fitur  | `src/features/[feature]/services` |
| UI reusable           | `src/components/ui`               |
| Layout reusable       | `src/components/layout`           |
| Hook global           | `src/hooks`                       |
| Hook khusus fitur     | `src/features/[feature]/hooks`    |
| Helper pure function  | `src/utils`                       |
| Type global           | `src/types`                       |
| Type khusus fitur     | `src/features/[feature]/types.ts` |
| Translation files     | `src/locales`                     |

---

# 3. Struktur Project

Gunakan struktur berikut sebagai default.

```txt
project-name/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json
│
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── router.tsx
│   │   └── providers.tsx
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   ├── fonts/
│   │   └── styles/
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── common/
│   │
│   ├── features/
│   │   ├── auth/
│   │   ├── product/
│   │   ├── profile/
│   │   ├── order/
│   │   └── dashboard/
│   │
│   ├── layouts/
│   ├── hooks/
│   ├── services/
│   ├── lib/
│   ├── utils/
│   ├── types/
│   ├── constants/
│   ├── config/
│   ├── locales/
│   └── styles/
│
├── .env
├── .env.example
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

# 4. Public vs Assets Rules

## 4.1 Gunakan `public` untuk File yang Diakses Langsung

Folder `public` hanya untuk file yang harus tersedia langsung dari URL.

Contoh:

```txt
public/
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── manifest.json
└── downloads/
    └── company-profile.pdf
```

Contoh akses:

```tsx
<a href="/downloads/company-profile.pdf">Download</a>
```

AI tidak boleh menaruh gambar component biasa di `public` kecuali memang perlu direct URL.

---

## 4.2 Gunakan `src/assets` untuk Asset UI

Gunakan `src/assets` untuk asset yang digunakan oleh component React.

Contoh:

```txt
src/assets/
├── images/
│   ├── logo.svg
│   ├── hero.webp
│   └── empty-state.svg
│
├── icons/
│   ├── cart.svg
│   └── user.svg
│
└── fonts/
    └── inter.woff2
```

Contoh penggunaan:

```tsx
import logo from '@/assets/images/logo.svg';

export function Header() {
  return <img src={logo} alt="Logo" />;
}
```

---

## 4.3 Jangan Simpan Upload User di Project

AI tidak boleh menyimpan file upload user di:

```txt
public/
src/assets/
```

Untuk upload user, gunakan storage eksternal seperti:

- AWS S3
- Supabase Storage
- Cloudinary

Database hanya menyimpan URL.

Contoh:

```ts
type Product = {
  id: string;
  name: string;
  imageUrl: string;
};
```

---

# 5. Multi-language / i18n Rules

Project ini harus siap multi-language.

Bahasa default:

```txt
id
```

Bahasa tambahan yang disiapkan:

```txt
en
```

Jika ada kebutuhan bahasa lain, tambahkan tanpa mengubah struktur utama.

---

## 5.1 Struktur Folder i18n

Gunakan struktur berikut:

```txt
src/locales/
├── index.ts
├── i18n.ts
├── resources.ts
│
├── id/
│   ├── common.json
│   ├── auth.json
│   ├── product.json
│   ├── validation.json
│   └── error.json
│
└── en/
    ├── common.json
    ├── auth.json
    ├── product.json
    ├── validation.json
    └── error.json
```

Penjelasan:

| File              | Fungsi                                 |
| ----------------- | -------------------------------------- |
| `common.json`     | Text umum seperti save, cancel, search |
| `auth.json`       | Text halaman login/register            |
| `product.json`    | Text fitur product                     |
| `validation.json` | Text validasi form                     |
| `error.json`      | Text error umum                        |

---

## 5.2 Jangan Hardcode Text di Component

AI tidak boleh menulis text UI langsung di component jika text tersebut tampil ke user.

Tidak disarankan:

```tsx
<button>Login</button>
```

Gunakan translation key:

```tsx
<button>{t('auth:login.button')}</button>
```

Untuk text debug internal atau komentar developer, hardcode masih boleh.

---

## 5.3 Gunakan Namespace per Domain

Gunakan namespace agar translation tidak bercampur.

Contoh:

```tsx
const { t } = useTranslation('auth');

return <h1>{t('login.title')}</h1>;
```

Isi file:

```json
{
  "login": {
    "title": "Masuk ke akun",
    "button": "Masuk"
  }
}
```

Untuk English:

```json
{
  "login": {
    "title": "Login to your account",
    "button": "Login"
  }
}
```

---

## 5.4 Naming Translation Key

Gunakan format nested object.

Contoh yang benar:

```json
{
  "login": {
    "title": "Masuk ke akun",
    "subtitle": "Silakan masuk untuk melanjutkan",
    "button": "Masuk",
    "googleButton": "Masuk dengan Google"
  }
}
```

Hindari key terlalu panjang seperti:

```json
{
  "auth_login_page_google_login_button_text": "Masuk dengan Google"
}
```

---

## 5.5 Jangan Translate Data dari Backend Secara Sembarangan

AI tidak boleh menerjemahkan value dari backend tanpa aturan.

Contoh data backend:

```json
{
  "status": "PENDING"
}
```

Gunakan mapping di frontend:

```ts
export const PRODUCT_STATUS_LABEL = {
  PENDING: 'product:status.pending',
  ACTIVE: 'product:status.active',
  INACTIVE: 'product:status.inactive',
} as const;
```

Lalu:

```tsx
t(PRODUCT_STATUS_LABEL[status]);
```

---

## 5.6 Error Message

Untuk error message, gunakan pattern:

```txt
src/locales/id/error.json
src/locales/en/error.json
```

Contoh:

```json
{
  "general": {
    "unknown": "Terjadi kesalahan. Silakan coba lagi.",
    "network": "Koneksi bermasalah. Periksa internet Anda."
  }
}
```

English:

```json
{
  "general": {
    "unknown": "Something went wrong. Please try again.",
    "network": "Network error. Please check your connection."
  }
}
```

Jika error berasal dari backend dan sudah siap multi-language dari backend, tampilkan message dari backend.

Jika belum, gunakan fallback translation dari frontend.

---

## 5.7 Validation Message

Validation message harus berada di:

```txt
src/locales/id/validation.json
src/locales/en/validation.json
```

Contoh:

```json
{
  "required": "{{field}} wajib diisi",
  "email": "Format email tidak valid",
  "minLength": "{{field}} minimal {{count}} karakter"
}
```

English:

```json
{
  "required": "{{field}} is required",
  "email": "Invalid email format",
  "minLength": "{{field}} must be at least {{count}} characters"
}
```

---

## 5.8 Language Switcher

Jika membuat language switcher, simpan component di:

```txt
src/components/common/LanguageSwitcher/
```

atau jika hanya dipakai di layout:

```txt
src/components/layout/LanguageSwitcher/
```

Contoh:

```tsx
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <select value={i18n.language} onChange={(event) => i18n.changeLanguage(event.target.value)}>
      <option value="id">Indonesia</option>
      <option value="en">English</option>
    </select>
  );
}
```

---

## 5.9 Simpan Bahasa Terpilih

Bahasa terpilih boleh disimpan di:

```txt
localStorage
```

Gunakan key konsisten:

```txt
app_language
```

Jangan gunakan banyak key berbeda seperti:

```txt
lang
language
locale
selected_language
```

Pilih satu:

```txt
app_language
```

---

# 6. App Folder Rules

Folder `src/app` berisi setup utama aplikasi.

```txt
src/app/
├── App.tsx
├── main.tsx
├── router.tsx
└── providers.tsx
```

Aturan:

- `main.tsx` hanya untuk mount React ke DOM
- `App.tsx` hanya untuk root application
- `router.tsx` hanya untuk routing
- `providers.tsx` untuk global provider seperti Router, QueryClient, Theme, i18n, Auth

Jangan menaruh business logic fitur di folder `app`.

---

# 7. Components Rules

Folder `src/components` hanya untuk component global.

```txt
src/components/
├── ui/
├── layout/
└── common/
```

## 7.1 `components/ui`

Untuk component kecil dan reusable.

Contoh:

```txt
Button
Input
Modal
Select
Checkbox
Badge
Card
Textarea
```

Rules:

- Tidak boleh mengandung business logic fitur
- Tidak boleh melakukan API call
- Harus reusable
- Harus menerima props yang jelas
- Jangan import dari `features`

Contoh yang benar:

```tsx
type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({ children, isLoading, disabled, onClick }: ButtonProps) {
  return (
    <button disabled={disabled || isLoading} onClick={onClick}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
```

Jika text tampil ke user dan perlu multi-language, kirim text dari parent melalui `children`, jangan panggil `useTranslation` di semua UI primitive kecuali memang dibutuhkan.

---

## 7.2 `components/layout`

Untuk component layout global.

Contoh:

```txt
Navbar
Sidebar
Header
Footer
Container
```

Boleh menggunakan i18n jika menampilkan menu atau label global.

---

## 7.3 `components/common`

Untuk component umum yang lebih spesifik dari UI primitive.

Contoh:

```txt
Loading
EmptyState
ErrorState
ConfirmDialog
LanguageSwitcher
Pagination
```

---

# 8. Features Rules

Folder `src/features` berisi logic berdasarkan fitur.

Contoh:

```txt
src/features/auth/
src/features/product/
src/features/order/
```

Struktur default fitur besar:

```txt
src/features/[feature-name]/
├── api/
├── components/
├── hooks/
├── pages/
├── schemas/
├── services/
├── types.ts
└── index.ts
```

Untuk fitur kecil, boleh lebih sederhana:

```txt
src/features/profile/
├── pages/
│   └── ProfilePage.tsx
├── types.ts
└── index.ts
```

---

## 8.1 API Folder

Gunakan folder `api` untuk function yang memanggil backend.

Contoh:

```txt
src/features/product/api/product.api.ts
```

Contoh:

```ts
import { api } from '@/services/api';
import type { Product } from '../types';

export async function getProducts() {
  const response = await api.get<Product[]>('/products');
  return response.data;
}
```

Rules:

- Jangan menaruh formatter di API file
- Jangan menaruh component logic di API file
- Jangan mengarang endpoint
- Jika endpoint belum pasti, beri komentar TODO

---

## 8.2 Services Folder

Gunakan folder `services` untuk business logic khusus fitur.

Contoh:

```txt
src/features/product/services/product.service.ts
```

Contoh:

```ts
import type { Product } from '../types';

export function getProductDisplayName(product: Product) {
  return product.name.trim();
}
```

Rules:

- Boleh mengolah data fitur
- Boleh mapping status
- Boleh format data sebelum dikirim ke component
- Jangan melakukan rendering JSX

---

## 8.3 Hooks Folder

Gunakan folder `hooks` untuk hook khusus fitur.

Contoh:

```txt
src/features/product/hooks/useProducts.ts
```

Contoh:

```ts
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/product.api';

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
}
```

Rules:

- Hook khusus fitur tetap di dalam fitur
- Jangan simpan hook khusus fitur di `src/hooks`
- Global hook saja yang boleh masuk `src/hooks`

---

## 8.4 Components Folder

Gunakan folder `components` di dalam feature untuk component yang hanya dipakai fitur itu.

Contoh:

```txt
src/features/product/components/ProductCard.tsx
```

Jika component mulai dipakai banyak fitur, pindahkan ke `src/components`.

---

## 8.5 Pages Folder

Gunakan folder `pages` untuk halaman route.

Contoh:

```txt
src/features/product/pages/ProductListPage.tsx
src/features/product/pages/ProductDetailPage.tsx
```

Rules:

- Page boleh menggunakan hook fitur
- Page boleh menyusun component
- Page sebaiknya tidak terlalu banyak logic
- Logic berat pindahkan ke hook atau service

---

## 8.6 Schemas Folder

Gunakan folder `schemas` untuk validasi form.

Contoh:

```txt
src/features/auth/schemas/login.schema.ts
```

Jika menggunakan Zod, pastikan `zod` ada di `package.json`.

Jangan menggunakan Zod jika belum diinstall.

---

# 9. Layouts Rules

Folder `src/layouts` untuk layout halaman.

```txt
src/layouts/
├── AuthLayout.tsx
├── DashboardLayout.tsx
└── BlankLayout.tsx
```

Rules:

- Layout boleh menggunakan `Outlet`
- Layout boleh mengatur sidebar/header
- Layout tidak boleh berisi business logic fitur
- Layout boleh membaca auth state jika diperlukan untuk guard visual

---

# 10. Hooks Rules

Folder `src/hooks` hanya untuk hook global.

Contoh:

```txt
src/hooks/
├── useDebounce.ts
├── useDisclosure.ts
├── useLocalStorage.ts
└── usePagination.ts
```

Rules:

- Hook global harus reusable
- Jangan import dari `features`
- Jangan mengandung logic spesifik fitur

---

# 11. Services Rules

Folder `src/services` digunakan untuk service global.

Contoh:

```txt
src/services/
├── api.ts
├── storage.ts
└── auth-token.ts
```

Rules:

- API client global boleh di sini
- Token helper global boleh di sini
- Service spesifik fitur jangan di sini

Contoh `api.ts`:

```ts
import axios from 'axios';
import { env } from '@/config/env';

export const api = axios.create({
  baseURL: env.apiUrl,
});
```

Jika `axios` belum ada di `package.json`, jangan gunakan kode ini sebelum install.

---

# 12. Lib Rules

Folder `src/lib` untuk konfigurasi library pihak ketiga.

Contoh:

```txt
src/lib/
├── queryClient.ts
├── dayjs.ts
├── i18n.ts
└── supabase.ts
```

Rules:

- Hanya untuk setup library
- Jangan isi business logic fitur
- Jangan mengarang konfigurasi yang belum diketahui

---

# 13. Utils Rules

Folder `src/utils` hanya untuk helper function umum.

Contoh:

```txt
src/utils/
├── formatCurrency.ts
├── formatDate.ts
├── truncateText.ts
└── capitalize.ts
```

Rules:

- Harus pure function jika memungkinkan
- Tidak boleh API call
- Tidak boleh JSX
- Tidak boleh import dari `features`

Contoh:

```ts
export function truncateText(value: string, maxLength = 128) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength)}...`;
}
```

---

# 14. Types Rules

Gunakan `src/types` untuk type global.

Contoh:

```txt
src/types/
├── api.ts
├── user.ts
└── common.ts
```

Gunakan `features/[feature]/types.ts` untuk type khusus fitur.

Contoh:

```txt
src/features/product/types.ts
```

Rules:

- Type global tidak boleh bergantung ke fitur tertentu
- Type fitur boleh import type global
- Hindari type `any`
- Jika terpaksa, gunakan `unknown` lebih dulu

---

# 15. Constants Rules

Folder `src/constants` untuk value tetap.

Contoh:

```txt
src/constants/
├── routes.ts
├── roles.ts
├── permissions.ts
└── storage-keys.ts
```

Contoh:

```ts
export const STORAGE_KEYS = {
  APP_LANGUAGE: 'app_language',
  ACCESS_TOKEN: 'access_token',
} as const;
```

Rules:

- Jangan hardcode key localStorage di banyak tempat
- Jangan hardcode route path di banyak component
- Gunakan constants

---

# 16. Config Rules

Folder `src/config` untuk konfigurasi aplikasi.

Contoh:

```txt
src/config/
├── env.ts
├── menu.ts
└── theme.ts
```

Contoh `env.ts`:

```ts
export const env = {
  apiUrl: import.meta.env.VITE_API_URL,
  appName: import.meta.env.VITE_APP_NAME,
};
```

Rules:

- Jangan panggil `import.meta.env` langsung di banyak file
- Ambil env melalui `src/config/env.ts`
- Semua env Vite harus diawali `VITE_`

---

# 17. Styles Rules

Folder `src/styles` untuk style global.

Contoh:

```txt
src/styles/
├── globals.css
├── reset.css
└── variables.css
```

Jika menggunakan Tailwind CSS:

```txt
src/styles/globals.css
```

Rules:

- Style global masuk `src/styles`
- Style component spesifik boleh dekat component jika diperlukan
- Jangan mencampur banyak pendekatan styling tanpa alasan
- Acuan viewport desain adalah `1440px`, tetapi lebar luar content container utama berhenti di `1344px`
- Dengan padding horizontal desktop `32px`, lebar efektif isi container adalah `1280px`
- Semua batas container utama harus menggunakan token `--width-container`, bukan hardcode viewport `1440px`
- Navbar background, background section, fixed overlay, drawer backdrop, dan running text harus tetap full viewport
- Hanya konten di dalam elemen full-width yang dikunci menggunakan component `Container`
- Setiap menulis atau mengubah class Tailwind, wajib memenuhi rekomendasi `suggestCanonicalClasses`
- Selalu gunakan canonical utility Tailwind jika tersedia; arbitrary value hanya boleh digunakan jika tidak ada utility yang setara
- Token yang didefinisikan melalui `@theme` harus dipanggil lewat utility yang dihasilkan Tailwind

Contoh:

```tsx
// Tidak disarankan
<nav className="h-[var(--height-navbar)]" />

// Disarankan
<nav className="h-navbar" />
```

Contoh lain:

```tsx
// Tidak disarankan
<div className="max-w-[var(--width-container)]" />

// Disarankan
<div className="max-w-(--width-container)" />
```

Sebelum menyelesaikan perubahan styling, AI wajib memeriksa dan memperbaiki seluruh peringatan `suggestCanonicalClasses` pada file yang disentuh.

---

# 18. Routing Rules

Routing utama berada di:

```txt
src/app/router.tsx
```

Contoh:

```tsx
import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '@/layouts/AuthLayout';
import DashboardLayout from '@/layouts/DashboardLayout';
import LoginPage from '@/features/auth/pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <div>Dashboard</div>,
      },
    ],
  },
]);
```

Rules:

- Jangan membuat route path hardcode di banyak tempat
- Gunakan `src/constants/routes.ts`
- Page harus berasal dari `features/[feature]/pages`
- Layout berasal dari `src/layouts`

---

# 19. Alias Import Rules

Gunakan alias `@` untuk import dari `src`.

Contoh:

```ts
import Button from '@/components/ui/Button';
import { api } from '@/services/api';
import { ROUTES } from '@/constants/routes';
```

Hindari import terlalu panjang:

```ts
import Button from '../../../components/ui/Button';
```

Konfigurasi `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

Konfigurasi `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

Rules:

- Gunakan alias untuk import lintas folder besar
- Relative import boleh untuk file yang sangat dekat
- Jangan campur gaya import tanpa alasan

---

# 20. Naming Convention

Gunakan naming berikut.

## 20.1 Component

```txt
ProductCard.tsx
LoginForm.tsx
DashboardLayout.tsx
```

## 20.2 Hook

```txt
useLogin.ts
useDebounce.ts
useProductFilter.ts
```

## 20.3 API

```txt
product.api.ts
auth.api.ts
order.api.ts
```

## 20.4 Service

```txt
product.service.ts
auth.service.ts
```

## 20.5 Schema

```txt
login.schema.ts
product.schema.ts
```

## 20.6 Type

```txt
types.ts
product.types.ts
common.types.ts
```

## 20.7 Constant

```txt
routes.ts
roles.ts
storage-keys.ts
```

Rules:

- Component pakai PascalCase
- Hook diawali `use`
- File service pakai `.service.ts`
- File API pakai `.api.ts`
- File schema pakai `.schema.ts`
- Jangan mencampur snake_case, camelCase, kebab-case untuk jenis file yang sama

---

# 21. TypeScript Rules

AI wajib menggunakan TypeScript dengan benar.

Rules:

- Hindari `any`
- Gunakan `unknown` jika data belum pasti
- Buat type untuk props
- Buat type untuk response API jika sudah diketahui
- Jangan mengarang field yang belum pasti
- Gunakan optional property jika field belum pasti

Contoh:

```ts
type ProductCardProps = {
  name: string;
  imageUrl?: string;
  price?: number;
};
```

Jika data dari backend belum pasti:

```ts
// TODO: adjust fields based on backend contract
export type Product = {
  id: string;
  name: string;
  imageUrl?: string;
  price?: number;
};
```

---

# 22. Form Rules

Jika menggunakan form library, pastikan package sudah ada.

Preferred approach jika tersedia:

- `react-hook-form`
- `zod`

Rules:

- Schema validasi masuk `features/[feature]/schemas`
- Form component masuk `features/[feature]/components`
- Submit logic masuk hook atau page
- Validation message harus support i18n

Jangan menulis validation message hardcode di banyak tempat.

---

# 23. State Management Rules

AI tidak boleh langsung memilih Redux/Zustand/Context tanpa kebutuhan.

Urutan default:

1. Local state dengan `useState`
2. Derived state
3. Custom hook
4. Context untuk state global sederhana
5. React Query untuk server state
6. Zustand/Redux hanya jika memang dibutuhkan

Rules:

- Server state jangan disimpan manual di global state jika sudah memakai React Query
- Auth state boleh menggunakan Context atau dedicated store
- Jangan overengineering

---

# 24. API and Data Fetching Rules

Jika menggunakan React Query, simpan:

```txt
src/lib/queryClient.ts
src/features/[feature]/hooks/useFeature.ts
src/features/[feature]/api/feature.api.ts
```

Pattern:

```txt
component/page -> hook -> api -> backend
```

Jangan langsung call API dari component jika fitur mulai kompleks.

Contoh yang disarankan:

```tsx
const { data, isLoading } = useProducts();
```

Bukan:

```tsx
useEffect(() => {
  api.get('/products');
}, []);
```

kecuali untuk kasus sangat sederhana.

---

# 25. Error Handling Rules

Gunakan fallback error yang aman.

Rules:

- Jangan tampilkan raw error object ke user
- Jangan tampilkan stack trace ke user
- Gunakan translation untuk error umum
- Log detail error hanya untuk developer jika perlu

Contoh:

```tsx
<p>{t('error:general.unknown')}</p>
```

---

# 26. Environment Rules

Gunakan `.env.example` untuk mendokumentasikan env.

Contoh:

```txt
VITE_APP_NAME=
VITE_API_URL=
VITE_DEFAULT_LANGUAGE=id
```

Rules:

- Jangan commit secret ke frontend
- Jangan simpan private key di Vite env
- Semua env frontend akan terlihat di browser
- Secret harus berada di backend

---

# 27. Security Rules

AI harus menjaga keamanan dasar frontend.

Rules:

- Jangan simpan secret di frontend
- Jangan simpan refresh token sembarangan jika tidak diperlukan
- Jangan render HTML dari user tanpa sanitasi
- Hindari `dangerouslySetInnerHTML`
- Jangan percaya data dari frontend untuk validasi final
- Validasi utama tetap di backend

---

# 28. Accessibility Rules

Untuk component UI, perhatikan accessibility.

Rules:

- Button harus menggunakan `<button>`
- Input harus punya label jika memungkinkan
- Image harus punya `alt`
- Modal harus bisa ditutup
- Jangan hanya mengandalkan warna untuk status
- Gunakan semantic HTML jika memungkinkan

---

# 29. Example Auth Feature

```txt
src/features/auth/
├── api/
│   └── auth.api.ts
│
├── components/
│   ├── LoginForm.tsx
│   └── GoogleLoginButton.tsx
│
├── hooks/
│   └── useLogin.ts
│
├── pages/
│   └── LoginPage.tsx
│
├── schemas/
│   └── login.schema.ts
│
├── services/
│   └── auth-token.service.ts
│
├── types.ts
└── index.ts
```

Translation:

```txt
src/locales/id/auth.json
src/locales/en/auth.json
```

Example `id/auth.json`:

```json
{
  "login": {
    "title": "Masuk ke akun",
    "subtitle": "Silakan masuk untuk melanjutkan",
    "emailLabel": "Email",
    "passwordLabel": "Kata sandi",
    "button": "Masuk",
    "googleButton": "Masuk dengan Google"
  }
}
```

Example `en/auth.json`:

```json
{
  "login": {
    "title": "Login to your account",
    "subtitle": "Please login to continue",
    "emailLabel": "Email",
    "passwordLabel": "Password",
    "button": "Login",
    "googleButton": "Login with Google"
  }
}
```

---

# 30. Example Product Feature

```txt
src/features/product/
├── api/
│   └── product.api.ts
│
├── components/
│   ├── ProductCard.tsx
│   ├── ProductFilter.tsx
│   └── ProductForm.tsx
│
├── hooks/
│   ├── useProducts.ts
│   ├── useProductDetail.ts
│   └── useCreateProduct.ts
│
├── pages/
│   ├── ProductListPage.tsx
│   ├── ProductDetailPage.tsx
│   └── ProductCreatePage.tsx
│
├── schemas/
│   └── product.schema.ts
│
├── services/
│   └── product.service.ts
│
├── types.ts
└── index.ts
```

Translation:

```txt
src/locales/id/product.json
src/locales/en/product.json
```

---

# 31. AI Workflow Rules

Saat diminta membuat fitur, AI harus mengikuti urutan ini:

1. Cek struktur project yang sudah ada
2. Cek package yang tersedia
3. Tentukan apakah fitur sederhana atau kompleks
4. Buat file di folder yang tepat
5. Gunakan type yang aman
6. Gunakan translation key untuk text UI
7. Hindari hardcode text
8. Hindari membuat endpoint palsu
9. Tambahkan TODO jika contract backend belum jelas
10. Jangan membuat dependency baru tanpa instruksi install

---

# 32. AI Output Rules

Saat memberikan kode, AI harus:

- Menyebutkan file path
- Memberikan kode lengkap per file jika membuat file baru
- Tidak menghilangkan kode existing tanpa alasan
- Menjelaskan jika ada package yang perlu diinstall
- Menandai bagian yang masih TODO
- Tidak mengklaim fitur sudah selesai jika masih butuh backend/API contract

Contoh format output:

```txt
File: src/features/auth/pages/LoginPage.tsx
```

```tsx
// code here
```

---

# 33. Checklist Sebelum AI Menjawab

Sebelum memberikan solusi, AI harus memastikan:

- Apakah library yang digunakan sudah ada?
- Apakah file ditempatkan di folder yang benar?
- Apakah text UI sudah memakai i18n?
- Apakah endpoint API tidak dikarang?
- Apakah type tidak memakai `any`?
- Apakah component reusable tidak bergantung ke fitur?
- Apakah asset berada di tempat yang benar?
- Apakah tidak ada secret di frontend?
- Apakah solusi tidak overengineering?

---

# 34. Final Rule

Jika informasi belum cukup, AI harus memilih salah satu:

1. Menggunakan placeholder dengan komentar `TODO`
2. Memberikan asumsi secara eksplisit
3. Meminta detail tambahan jika benar-benar wajib

AI tidak boleh mengarang detail seolah-olah sudah pasti.

Contoh:

```ts
// TODO: replace this endpoint after backend contract is confirmed
const endpoint = '/products';
```

Contoh penjelasan:

```txt
Asumsi sementara: backend menyediakan endpoint GET /products.
Jika endpoint berbeda, ubah di src/features/product/api/product.api.ts.
```

---

# 35. Kesimpulan

Project ini harus dijaga agar:

- Rapi
- Scalable
- Multi-language ready
- Tidak hardcode text UI
- Tidak mengarang endpoint
- Tidak mengarang package
- Tidak overengineering
- Mudah dilanjutkan developer lain

AI wajib mengikuti rules di dokumen ini setiap kali membuat, mengubah, atau merefactor kode project.
