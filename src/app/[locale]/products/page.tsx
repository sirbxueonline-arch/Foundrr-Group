import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function Products() {
  const t = useTranslations('ProductsPage');

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-white selection:text-zinc-950 pt-40 px-6">
       <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">{t('title')}</h1>
          <p className="text-zinc-400 text-lg mb-20 animate-fade-up delay-100">{t('subtitle')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Foundrr - Active Product */}
            <Link href="https://foundrr.site" target="_blank" className="block group animate-fade-up delay-200">
                <div className="relative overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/10 p-8 md:p-12 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-zinc-900/50 to-zinc-950 pointer-events-none" />
                    <div className="flex items-start justify-between mb-4">
                        <div className="px-3 py-1 rounded-full bg-white text-zinc-950 text-xs font-bold">Live</div>
                        <span className="text-zinc-500 group-hover:text-white transition-colors text-2xl">↗</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Foundrr</h3>
                    <p className="text-zinc-400 mb-8">
                        The simplest pay-once website builder. No subscriptions, just code.
                    </p>
                    <div className="mt-auto inline-flex items-center text-sm font-medium text-white border-b border-white/20 pb-0.5 group-hover:border-white transition-all">
                        Visit Site
                    </div>
                </div>
            </Link>

            {/* Coming Soon */}
            <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950 border border-white/5 p-8 md:p-12 h-full opacity-70 animate-fade-up delay-300">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_20px)]" />
                <div className="flex items-start justify-between mb-4">
                    <div className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-bold">{t('comingSoon')}</div>
                </div>
                <h3 className="text-3xl font-bold text-zinc-700 mb-4">Untitled Analytics</h3>
                <p className="text-zinc-600 mb-8">
                    Privacy-focused analytics for minimalists.
                </p>
                 <button disabled className="mt-auto px-4 py-2 rounded-full border border-zinc-800 text-zinc-600 text-sm font-medium cursor-not-allowed">
                    {t('notifyMe')}
                </button>
            </div>
          </div>
       </div>
    </div>
  );
}
