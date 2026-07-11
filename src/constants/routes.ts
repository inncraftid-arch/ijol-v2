export const ROUTES = {
  home: '/',
  catalog: '/catalog',
  productPattern: '/catalog/:productId',
  product: (productId: string | number) => `/catalog/${productId}`,
  wardrobe: '/my-wardrobe',
  swapList: '/swap-list',
  login: '/login',
  register: '/register',
  notAllowed: '/not-allowed',
} as const;
