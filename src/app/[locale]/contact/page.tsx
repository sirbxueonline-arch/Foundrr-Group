import {useTranslations} from 'next-intl';

export default function Contact() {
  const t = useTranslations('ContactPage');

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-white selection:text-zinc-950 pt-40 px-6">
       <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">{t('title')}</h1>
          <p className="text-zinc-400 text-lg mb-12 animate-fade-up delay-100">{t('subtitle')}</p>
          
          <div className="space-y-4 animate-fade-up delay-200">
            <a href="mailto:contact@foundrr.online" className="block w-full p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/20 transition-all hover:bg-zinc-800 group text-left">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white group-hover:bg-zinc-700 transition-colors">✉️</div>
                    <div>
                        <h3 className="text-white font-medium">{t('email')}</h3>
                        <p className="text-zinc-500 text-sm">contact@foundrr.online</p>
                    </div>
                </div>
            </a>
            
             <a href="https://x.com/foundrrgroup" target="_blank" className="block w-full p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/20 transition-all hover:bg-zinc-800 group text-left">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white group-hover:bg-zinc-700 transition-colors">𝕏</div>
                    <div>
                        <h3 className="text-white font-medium">{t('social')}</h3>
                        <p className="text-zinc-500 text-sm">@foundrrgroup</p>
                    </div>
                </div>
            </a>
          </div>
       </div>
    </div>
  );
}
