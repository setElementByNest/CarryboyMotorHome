import Script from 'next/script'
import './globals.css';
export { generateMetadata } from '@/utils/functions';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MX8MZJ3N');
          `}
        </Script>
        {/* Google Tag Manager (noscript) */}
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MX8MZJ3N"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          >
          </iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}