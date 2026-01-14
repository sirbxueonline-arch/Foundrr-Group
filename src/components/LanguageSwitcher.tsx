'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative group">
        <select
            defaultValue={locale}
            onChange={handleChange}
            disabled={isPending}
            className="appearance-none bg-transparent text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer focus:outline-none py-1 pr-6"
        >
            <option value="en" className="bg-zinc-900 text-zinc-200">English</option>
            <option value="az" className="bg-zinc-900 text-zinc-200">Azərbaycan</option>
        </select>
        {/* Custom Arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 group-hover:text-zinc-300">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    </div>
  );
}
