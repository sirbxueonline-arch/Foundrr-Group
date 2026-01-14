import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {Inter} from 'next/font/google';
import '../globals.css';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Foundrr Group',
  description: 'Building simple digital products for real businesses.',
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  // Determine text direction (optional, for AZ/EN both are LTR but good practice)
  const dir = 'ltr';
 
  return (
    <html lang={locale} dir={dir}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
