// app/fonts.js
import { Roboto_Slab, Rokkitt } from 'next/font/google';

export const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-slab',
});

export const rokkitt = Rokkitt({
   subsets: ['latin'], 
   weight: ['400','800']
   }); // you can add other weights if needed

