import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Background from '@/components/Background';
import TiltCard from '@/components/TiltCard';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-white selection:text-zinc-950 overflow-x-hidden">
      {/* Background Gradients */}
      <Background />


      {/* Navbar - Handled in layout.tsx */}

      <main className="relative max-w-5xl mx-auto px-6 pt-40 pb-20 z-10">
        {/* Hero */}
        <div className="flex flex-col items-center text-center mb-40">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium text-zinc-400 mb-8 animate-scale-in backdrop-blur-sm shadow-inner shadow-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse" />
            {t('Hero.badge')}
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 mb-8 animate-fade-up delay-100 max-w-4xl leading-[1]" dangerouslySetInnerHTML={{ __html: t.raw('Hero.title') }} />
          <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed animate-fade-up delay-200">
            {t('Hero.subtitle')}
          </p>
        </div>

        {/* Philosophy Grid - Bento Style */}
        <section className="animate-fade-up delay-300 mb-40">
          <h2 className="text-xs font-semibold text-zinc-500 mb-8 uppercase tracking-[0.2em] pl-1">{t('Values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

            {/* Simplicity - Tall Card */}
            <div className="md:col-span-3 lg:col-span-1 lg:row-span-2 group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-zinc-800/50 rounded-2xl flex items-center justify-center text-xl mb-6 border border-white/5 text-zinc-200 group-hover:scale-110 transition-transform duration-300">✨</div>
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{t('Values.simplicityTitle')}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">{t('Values.simplicityDesc')}</p>
                </div>
                <div className="w-full h-32 mt-8 rounded-xl bg-gradient-to-t from-zinc-950/50 to-transparent border border-white/5 opacity-50 group-hover:opacity-80 transition-opacity" />
              </div>
            </div>

            {/* Reliability - Wide Card */}
            <div className="md:col-span-3 lg:col-span-2 group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-zinc-800/50 rounded-2xl flex items-center justify-center text-xl mb-6 border border-white/5 text-zinc-200 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{t('Values.reliabilityTitle')}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors max-w-sm">{t('Values.reliabilityDesc')}</p>
                </div>
                <div className="hidden md:block w-32 h-32 rounded-full border border-emerald-500/20 bg-emerald-500/5 animate-pulse" />
              </div>
            </div>

            {/* Performance - Standard Card */}
            <div className="md:col-span-3 lg:col-span-2 group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-zinc-800/50 rounded-2xl flex items-center justify-center text-xl mb-6 border border-white/5 text-zinc-200 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{t('Values.performanceTitle')}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">{t('Values.performanceDesc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Product */}
        <section className="animate-fade-up delay-400 mb-40">
          <h2 className="text-xs font-semibold text-zinc-500 mb-8 uppercase tracking-[0.2em] pl-1">{t('Product.title')}</h2>
          <Link href="https://foundrr.site" target="_blank" className="block group cursor-none">
            <TiltCard className="rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 md:p-16 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-zinc-900/50 to-zinc-950 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8 items-start">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-2.5 py-0.5 rounded-full border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium">{t('Product.newBadge')}</div>
                    <h3 className="text-3xl font-bold text-white tracking-tight">{t('Product.name')}</h3>
                  </div>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    {t('Product.description')}
                  </p>
                  <div className="inline-flex items-center text-sm font-medium text-white border-b border-white/20 pb-0.5 group-hover:border-white transition-all">
                    {t('Product.link')} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
                {/* Abstract Visual Representation */}
                <div className="w-full md:w-64 h-40 md:h-auto aspect-video rounded-xl bg-zinc-950 border border-white/5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500">
                  <span className="text-zinc-700 font-mono text-xs">{t('Product.generating')}</span>
                </div>
              </div>
            </TiltCard>
          </Link>
        </section>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center py-10 border-t border-white/5 text-sm text-zinc-600 animate-fade-up delay-500">
          <div className="mb-4 md:mb-0 hover:text-zinc-400 transition-colors">&copy; {new Date().getFullYear()} {t('Navbar.brand')}</div>
          <div className="flex gap-8">
            <Link href="https://foundrr.site" target="_blank" className="hover:text-white transition-colors">{t('Product.name')}</Link>
            <a href="mailto:contact@foundrr.online" className="hover:text-white transition-colors">{t('Navbar.contact')}</a>
            <a href="mailto:support@foundrr.online" className="hover:text-white transition-colors">Support</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
