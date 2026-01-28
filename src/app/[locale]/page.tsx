'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Background from '@/components/Background';
import { motion } from 'framer-motion';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-slate-900 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden font-sans">
      <Background />

      <main className="relative max-w-5xl mx-auto px-6 pt-32 pb-20 z-10">
        {/* 1. Hero Section - The Group Identity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-32 md:mb-40"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            {t('Hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {t('Hero.subtitle')}
          </p>

        </motion.div>

        {/* 2. Group Philosophy (Proof) - Moved UP to establish identity */}
        <section id="philosophy" className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Don'ts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-xl font-medium text-red-200 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-sm border border-red-500/10">✕</span>
              {t('Proof.dontsTitle')}
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center text-red-200/80 text-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/40 mr-4" /> {t('Proof.donts.subs')}
              </li>
              <li className="flex items-center text-red-200/80 text-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/40 mr-4" /> {t('Proof.donts.accounts')}
              </li>
              <li className="flex items-center text-red-200/80 text-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/40 mr-4" /> {t('Proof.donts.roadmaps')}
              </li>
            </ul>
            <div className="mt-10 pt-8 border-t border-red-500/10 text-white font-medium flex items-center gap-3 text-lg">
              <span className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-sm border border-emerald-500/10 text-emerald-400">✓</span>
              {t('Proof.dos.oneTool')}
            </div>
          </motion.div>

          {/* Performance Stats */}
          {/* Performance Stats */}
          <div className="flex flex-col justify-center h-full pl-0 md:pl-10">
            <div className="mb-8 flex flex-col items-center text-center">
              <h3 className="text-zinc-500 uppercase tracking-widest text-xs font-semibold mb-10 flex items-center justify-center gap-2">
                {t('Proof.performanceTitle')}
              </h3>
              <div className="space-y-12 w-full">
                <div className="group flex flex-col items-center">
                  <div className="flex items-baseline gap-1 mb-2 justify-center">
                    <span className="text-5xl font-bold text-white tracking-tighter group-hover:text-emerald-400 transition-colors duration-300">100</span>
                    <span className="text-xl text-zinc-500 font-medium">ms</span>
                  </div>
                  <div className="text-zinc-400 text-base">{t('Proof.speed')}</div>
                </div>
                <div className="group flex flex-col items-center">
                  <div className="flex items-baseline gap-1 mb-2 justify-center">
                    <span className="text-5xl font-bold text-white tracking-tighter group-hover:text-blue-400 transition-colors duration-300">0</span>
                  </div>
                  <div className="text-zinc-400 text-base">{t('Proof.frameworks')}</div>
                </div>
                <div className="group flex flex-col items-center">
                  <div className="flex items-baseline gap-1 mb-2 justify-center">
                    <span className="text-5xl font-bold text-white tracking-tighter group-hover:text-indigo-400 transition-colors duration-300">100</span>
                    <span className="text-xl text-zinc-500 font-medium">%</span>
                  </div>
                  <div className="text-zinc-400 text-base">{t('Proof.code')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Flagship Product Section */}
        <section className="mb-40 pt-20 border-t border-white/5">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
              Flagship Product
            </div>

            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
              An instant website generator that produces complete, downloadable business websites. Use it to launch in minutes, not months.
            </p>
            <div className="mt-8">
              <Link
                href="https://foundrr.site"
                target="_blank"
                className="group inline-flex items-center px-6 py-3 rounded-full bg-white text-black font-medium transition-transform hover:scale-105"
              >
                Launch Foundrr
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          <h3 className="text-sm font-semibold text-zinc-500 mb-12 uppercase tracking-widest text-center">{t('HowItWorks.title')}</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[180px] left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10 border-t border-dashed border-white/10" />

            {/* Step 1: Describe (Chat UI) */}
            <div className="flex flex-col gap-8 group">
              <div className="aspect-[4/3] rounded-2xl bg-zinc-900 border border-white/10 relative overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Abstract Chat UI */}
                <div className="absolute inset-x-8 bottom-8 top-8 flex flex-col justify-end gap-3">
                  <div className="w-3/4 p-3 rounded-2xl rounded-tl-sm bg-white/10 border border-white/5 animate-pulse">
                    <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                  </div>
                  <div className="w-full p-4 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3">
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-1/3 bg-white/30 animate-[shimmer_2s_infinite]" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs mb-4 shadow-inner shadow-white/5">1</div>
                <h3 className="text-xl font-medium text-white mb-2">{t('HowItWorks.step1Title')}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{t('HowItWorks.step1Desc')}</p>
              </div>
            </div>

            {/* Step 2: Preview (Browser UI) */}
            <div className="flex flex-col gap-8 group">
              <div className="aspect-[4/3] rounded-2xl bg-zinc-900 border border-white/10 relative overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-indigo-500/10">
                {/* Browser Chrome */}
                <div className="h-6 border-b border-white/5 bg-white/[0.02] flex items-center gap-1.5 px-3">
                  <div className="w-2 h-2 rounded-full bg-red-500/20" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
                </div>
                {/* Mini Website Wireframe */}
                <div className="p-4 space-y-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex justify-between items-center">
                    <div className="w-16 h-2 bg-white/20 rounded-full" />
                    <div className="flex gap-2">
                      <div className="w-8 h-2 bg-white/10 rounded-full" />
                      <div className="w-8 h-2 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-2 py-4 text-center flex flex-col items-center">
                    <div className="w-3/4 h-6 bg-white/10 rounded-lg" />
                    <div className="w-1/2 h-2 bg-white/5 rounded-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-square rounded bg-white/5 border border-white/5" />
                    <div className="aspect-square rounded bg-white/5 border border-white/5" />
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs mb-4 shadow-inner shadow-white/5">2</div>
                <h3 className="text-xl font-medium text-white mb-2">{t('HowItWorks.step2Title')}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{t('HowItWorks.step2Desc')}</p>
              </div>
            </div>

            {/* Step 3: Download (Code/File UI) */}
            <div className="flex flex-col gap-8 group">
              <div className="aspect-[4/3] rounded-2xl bg-zinc-900 border border-white/10 relative overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* File/Code Representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Background Card */}
                    <div className="absolute inset-0 bg-white/5 rotate-6 rounded-lg scale-90" />
                    {/* Main Card */}
                    <div className="relative w-32 aspect-[3/4] bg-zinc-950 border border-white/10 rounded-lg p-3 flex flex-col gap-2 shadow-xl group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full" />
                      <div className="w-2/3 h-1 bg-white/10 rounded-full" />
                      <div className="w-full h-1 bg-white/10 rounded-full" />
                      <div className="mt-auto w-full h-6 rounded bg-white/5 flex items-center justify-center text-[10px] text-zinc-500 font-mono">
                        index.html
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs mb-4 shadow-inner shadow-white/5">3</div>
                <h3 className="text-xl font-medium text-white mb-2">{t('HowItWorks.step3Title')}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{t('HowItWorks.step3Desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pricing / Value */}
        <section className="mb-32">
          <div className="rounded-3xl bg-zinc-900/30 border border-white/5 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">{t('Pricing.title')}</h2>
                <p className="text-lg text-zinc-400 mb-8">{t('Pricing.preview')}</p>
                <Link
                  href="https://foundrr.site"
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                >
                  {t('Product.link')}
                </Link>
              </div>

              <div className="bg-black/20 rounded-2xl p-8 border border-white/5">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">{t('Pricing.forWhoTitle')}</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-zinc-300">
                    <span className="text-indigo-400">→</span> {t('Pricing.forWho.1')}
                  </li>
                  <li className="flex gap-3 text-zinc-300">
                    <span className="text-indigo-400">→</span> {t('Pricing.forWho.2')}
                  </li>
                  <li className="flex gap-3 text-zinc-300">
                    <span className="text-indigo-400">→</span> {t('Pricing.forWho.3')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-white/5 text-sm text-zinc-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 hover:text-zinc-400 transition-colors">&copy; {new Date().getFullYear()} {t('Navbar.brand')}</div>
            <div className="flex gap-8">
              <Link href="https://foundrr.site" target="_blank" className="hover:text-white transition-colors">Foundrr WebAI</Link>
              <Link href="/about" className="hover:text-white transition-colors">{t('Navbar.about')}</Link>
              <a href="mailto:contact@foundrr.online" className="hover:text-white transition-colors">{t('Navbar.contact')}</a>
              <a href="mailto:support@foundrr.online" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>

          {/* GULUZADA Studio Signature */}
          <div 
            className="guluzada-credit" 
            style={{
              textAlign: "center",
              padding: "2rem 0",
              fontSize: "14px",
              fontFamily: "'Space Grotesk', sans-serif",
              color: "currentColor",
              opacity: 0.8,
            }}
          >
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&display=swap" rel="stylesheet" />
            
            <span style={{ fontWeight: 400, opacity: 0.7 }}>by </span> 
            <a 
              href="https://guluzada.dev" 
              target="_blank" 
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "inline-block",
                transition: "opacity 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <span style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>GULUZADA</span> <span style={{ fontWeight: 300 }}>Studio</span>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
