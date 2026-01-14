'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('Navbar');

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-max max-w-2xl h-12 glass-dark rounded-full flex items-center gap-8 md:gap-12 px-6 z-50 animate-scale-in border border-white/5">
      <Link href="/" className="font-semibold text-sm tracking-tight text-white hover:text-zinc-200 transition-colors">
        {t('brand')}
      </Link>
      <div className="flex items-center gap-6">
         <Link href="https://foundrr.site" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{t('products')}</Link>
         <a href="mailto:contact@foundrr.online" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{t('contact')}</a>
         <div className="h-4 w-px bg-white/10" />
         <LanguageSwitcher />
      </div>
    </nav>
  );
}
