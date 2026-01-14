'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/routing';
import clsx from 'clsx';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
   const t = useTranslations('Navbar');
   const pathname = usePathname();

   const isActive = (path: string) => pathname === path;

   return (
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-max max-w-2xl h-14 pl-6 pr-2 glass-dark rounded-full flex items-center justify-between md:gap-2 z-50 animate-scale-in border border-white/10 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300">
         <Link href="/" className="font-semibold text-sm tracking-tight text-white hover:text-zinc-200 transition-colors mr-auto md:mr-8 shrink-0">
            {t('brand')}
         </Link>

         <div className="flex items-center gap-1 md:gap-2">
            <Link
               href="/products"
               className={clsx(
                  "px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 relative",
                  isActive('/products')
                     ? "text-white bg-white/10 shadow-inner shadow-white/5"
                     : "text-zinc-400 hover:text-white hover:bg-white/5"
               )}
            >
               {isActive('/products') && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
               )}
               {t('products')}
            </Link>

            <Link
               href="/about"
               className={clsx(
                  "px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 relative",
                  isActive('/about')
                     ? "text-white bg-white/10 shadow-inner shadow-white/5"
                     : "text-zinc-400 hover:text-white hover:bg-white/5"
               )}
            >
               {isActive('/about') && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
               )}
               {t('about')}
            </Link>

            <Link
               href="/contact"
               className={clsx(
                  "px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 relative",
                  isActive('/contact')
                     ? "text-white bg-white/10 shadow-inner shadow-white/5"
                     : "text-zinc-400 hover:text-white hover:bg-white/5"
               )}
            >
               {isActive('/contact') && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
               )}
               {t('contact')}
            </Link>

            <div className="h-4 w-px bg-white/10 mx-2" />

            <div className="pl-1 pr-3">
               <LanguageSwitcher />
            </div>
         </div>
      </nav>
   );
}
