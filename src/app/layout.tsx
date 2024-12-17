import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import '../styles/globals.css';

import { ContextProvider } from '@/components/context-provider';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Toaster } from 'sonner';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hosnaqasmei.com/'),
  title: { default: 'Hosna Qasmei', template: '%s | Hosna Qasmei' },
  description: 'Developer & Creator',
  openGraph: {
    title: 'Hosna Qasmei',
    description: 'Developer & Creator.',
    url: 'https://www.hosnaqasmei.com/',
    siteName: 'Hosna Qasmei',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Hosna Qasmei',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="a07e2826-5910-4684-9e69-0ec4388a0509"
          async
        ></script>
      </head>
      <body
        className={`bg-primary text-secondary text-sm md:text-base ${dmSans.className}`}
      >
        <ContextProvider>
          <main className="min-h-screen flex flex-col items-center">
            <Toaster richColors position="bottom-center" />
            <MaxWidthWrapper>
              <div className="flex-1 w-full flex flex-col gap-8 items-center">
                {children}
              </div>
            </MaxWidthWrapper>
          </main>
        </ContextProvider>
        <div className="pointer-events-none bg-primary fixed bottom-0 left-0 h-28 [mask-image:linear-gradient(transparent,#000000)] w-full"></div>
      </body>
    </html>
  );
}
