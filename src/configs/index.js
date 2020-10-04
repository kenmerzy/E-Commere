import {
  iconAccount, iconCart, iconExplore, iconHome, iconOffer,
} from '../../assets/images'

export const SCREEN_NAME = {
  SlashScreen: 'SlashScreen',
  RegisterScreen: 'RegisterScreen',
  LoginScreen: 'LoginScreen',
  HomeScreen: 'HomeScreen',
  AccountScreen: 'AccountScreen',
  ExploreScreen: 'ExploreScreen',
  OfferScreen: 'OfferScreen',
  CartScreen: 'CartScreen',
  MAIN_TAB: 'MAIN_TAB',
}
export const TAB_DATA = [
  {
    title: 'home',
    image: iconHome,
  },
  {
    title: 'explore',
    image: iconExplore,
  },
  {
    title: 'cart',
    image: iconCart,
  },
  {
    title: 'offer',
    image: iconOffer,
  },
  {
    title: 'account',
    image: iconAccount,
  },
]

export const API_URL = 'https://huymanh.dev/ecommerce/api'
