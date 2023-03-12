import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Layout from '@/components/layout/layout';
import localFont from '@next/font/local';

const maisonNeue = localFont({
  src: [
    {
      path: '../../public/fonts/FontsFree-Net-Maison-Neue-Book.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/FontsFree-Net-Maison-Neue-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--maison-neue',
});

const clearface = localFont({
  src: [
    {
      path: '../../public/fonts/title-font.ttf',
      weight: '700',
    },
  ],
  variable: '--clearface',
});
export default function App({ Component, pageProps }: AppProps): ReactNode {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <style jsx global>
        {`
          :root {
            --clearface-font: ${clearface.style.fontFamily};
            --maison-neue-font: ${maisonNeue.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
