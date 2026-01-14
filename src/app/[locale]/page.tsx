import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-white selection:text-zinc-950 overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/[0.02] blur-3xl rounded-full mix-blend-screen" />
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/[0.05] blur-[100px] rounded-full" />
      </div>

      {/* Navbar - Kept here to ensure consistent header design as requested */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-max max-w-2xl h-12 glass-dark rounded-full flex items-center gap-8 md:gap-12 px-6 z-50 animate-scale-in border border-white/5">
        <span className="font-semibold text-sm tracking-tight text-white">{t('Navbar.brand')}</span>
        <div className="flex items-center gap-6">
           <Link href="https://foundrr.site" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{t('Navbar.products')}</Link>
           <a href="mailto:contact@foundrr.online" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">{t('Navbar.contact')}</a>
           <div className="h-4 w-px bg-white/10" />
           <LanguageSwitcher />
        </div>
      </nav>

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

        {/* Philosophy Grid */}
        <section className="animate-fade-up delay-300 mb-40">
          <h2 className="text-xs font-semibold text-zinc-500 mb-8 uppercase tracking-[0.2em] pl-1">{t('Values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-zinc-800/50 rounded-xl flex items-center justify-center text-lg mb-6 border border-white/5 text-zinc-200 group-hover:scale-105 transition-transform duration-300">✨</div>
                  <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">{t('Values.simplicityTitle')}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">{t('Values.simplicityDesc')}</p>
                </div>
            </div>

             <div className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-zinc-800/50 rounded-xl flex items-center justify-center text-lg mb-6 border border-white/5 text-zinc-200 group-hover:scale-105 transition-transform duration-300">🛡️</div>
                  <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">{t('Values.reliabilityTitle')}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">{t('Values.reliabilityDesc')}</p>
                </div>
            </div>

             <div className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-zinc-800/50 rounded-xl flex items-center justify-center text-lg mb-6 border border-white/5 text-zinc-200 group-hover:scale-105 transition-transform duration-300">⚡</div>
                  <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">{t('Values.performanceTitle')}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">{t('Values.performanceDesc')}</p>
                </div>
            </div>
          </div>
        </section>

        {/* Flagship Product */}
        <section className="animate-fade-up delay-400 mb-40">
           <h2 className="text-xs font-semibold text-zinc-500 mb-8 uppercase tracking-[0.2em] pl-1">{t('Product.title')}</h2>
          <Link href="https://foundrr.site" target="_blank" className="block group">
            <div className="relative overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/10 p-8 md:p-16 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10">
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
            </div>
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
