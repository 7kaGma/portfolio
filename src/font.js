import {
  Noto_Sans_JP,
  Noto_Serif_JP,
  Cinzel,
} from 'next/font/google';

export const notoSans = Noto_Sans_JP({
  weight: ['400', '700'],
  preload: false,
  display: 'swap',
  variable: '--notoSans',
});

export const notoSerif = Noto_Serif_JP({
  weight: ['400', '700'],
  preload: false,
  display: 'swap',
  variable: '--notoSerif',
});

export const cinzel = Cinzel({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});
