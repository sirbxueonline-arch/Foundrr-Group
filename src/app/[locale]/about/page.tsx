import { useTranslations } from 'next-intl';
import Background from '@/components/Background';

export default function AboutPage() {
    const t = useTranslations('AboutPage');

    return (
        <div className="min-h-screen bg-slate-900 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden font-sans">
            <Background />

            <main className="relative max-w-4xl mx-auto px-6 pt-32 pb-20 z-10">
                <div className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="space-y-24">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-8">{t('whoWeAreTitle')}</h2>
                        <div className="prose prose-invert prose-lg text-zinc-400">
                            <p className="mb-6">{t('whoWeAre1')}</p>
                            <p>{t('whoWeAre2')}</p>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">{t('philosophyTitle')}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {t('philosophyDesc')}
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">{t('missionTitle')}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {t('missionDesc')}
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
